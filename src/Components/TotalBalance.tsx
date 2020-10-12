import React from 'react'
import Paper from '@material-ui/core/Paper';
import {useStateValue} from '../GlobalState/StateProvider'

function TotalBalance() {
    
    const { List } = useStateValue();

    
    let Balance: number[] = []
    List.map (({amount})=>Balance.push(amount))
    
    let positive: number[] = []
    List.map (({amount})=>amount > 0 ? positive.push(amount): null)
    
    
    let negative: number[] = []
    List.map (({amount})=>amount < 0 ? negative.push(amount): null)

    return (
        <div className='total_Balance'>
            <Paper elevation={3} className='total_Balance_Paper1'>
                <p className='Paper1_Balanceword'>Your Balance</p>
        <p className='Paper1_Balanceamount'><span>$</span><span>{Balance.reduce((prev, curr)=>prev+ curr, 0)}</span></p>
            </Paper>
            <Paper elevation={3} className='total_Balance_Paper2'>
                <p className='Paper1_Balanceword'>Income</p>
                <p className='Paper1_Balanceamount green'><span>$</span>{positive.reduce((prev, curr)=>prev+ curr, 0)}<span></span></p>
            </Paper>
            <Paper elevation={3} className='total_Balance_Paper3'>
                <p className='Paper1_Balanceword'>Expense</p>
                <p className='Paper1_Balanceamount red'><span>-$</span><span>{-(negative.reduce((prev, curr)=>prev+ curr, 0))}</span></p>
            </Paper>
        </div>
    )
}

export default TotalBalance
