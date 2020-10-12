import React from "react";
// Importing Global State
import { useStateValue } from "../GlobalState/StateProvider";
import { State } from "../Types/Types";
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from '@material-ui/core/IconButton';



function Transaction() {
  const { List, deleteTransaction } = useStateValue();

  return (
    <div className="transaction">
      <h4>Recent Transactions</h4>
      <div>
        {List?.map((transaction: State, index: number) => {
          return (
            <div className="individualTransaction" key={transaction.id}>
              <span className="transaction__info">
                {+transaction.amount > 0 ? (
                  <>
                  <span className="transaction__icon__green">
                    <ArrowUpwardRoundedIcon />
                  </span>
                  <span className="transaction__detail">
                  <span className="amount">${transaction.amount}</span>
                  <span className="name">{transaction.name}</span>
                </span>
                </>
                ) : (
                  <>
                  <span className="transaction__icon__red">
                    <ArrowDownwardIcon />
                  </span>
                  <span className="transaction__detail">
                  <span className="amount">-${-(transaction.amount)}</span>
                  <span className="name">{transaction.name}</span>
                </span>
                </>
                )}
                
              </span>
              <span className="transaction__remove">
                <IconButton aria-label="delete" onClick={() => deleteTransaction? deleteTransaction(transaction): null}>
                  <DeleteIcon />
                </IconButton>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Transaction;
