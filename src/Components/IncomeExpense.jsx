import React, {useContext} from 'react'
import { GlobalContext } from "../context/GlobalState";



export const IncomeExpense = () => {
    const  { transactions }  = useContext(GlobalContext)
    let amount = transactions.map(transaction => (transaction.amount));
    let income = 0
    let expense = 0
    for(let i = 0; i < amount.length; i++){
        amount[i] > 0 ? income += amount[i] : expense += amount[i]
    }
    console.log(income, expense);
    return (
        <div className = "inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className = "money plus">
                    +${income.toFixed(2)}
                </p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className = "money minus">
                    -${expense.toFixed(2)}
                </p>
            </div>
        </div>
    )
}
