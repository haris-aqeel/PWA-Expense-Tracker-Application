import React from 'react'
import Paper from '@material-ui/core/Paper';


function TotalBalance() {
    
    return (
        <div className='total_Balance'>
            <Paper elevation={3} className='total_Balance_Paper1'>
                <p className='Paper1_Balanceword'>Your Balance</p>
                <p className='Paper1_Balanceamount'><span>$</span><span>20.00</span></p>
            </Paper>
            <Paper elevation={3} className='total_Balance_Paper2'>
                <p className='Paper1_Balanceword'>Income</p>
                <p className='Paper1_Balanceamount green'><span>$</span><span>20.00</span></p>
            </Paper>
            <Paper elevation={3} className='total_Balance_Paper3'>
                <p className='Paper1_Balanceword'>Expense</p>
                <p className='Paper1_Balanceamount red'><span>-$</span><span>20.00</span></p>
            </Paper>
        </div>
    )
}

export default TotalBalance
