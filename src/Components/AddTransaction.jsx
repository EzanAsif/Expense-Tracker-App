import React, { useState, useContext } from "react";
import {GlobalContext} from '../context/GlobalState'

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }


  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit = {(e) => onSubmit(e)} >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            placeholder="Enter Title of Transaction"
            value = {text}
            onChange = {(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br /> (negative - expense, positive - income){" "}
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter Amount of Transaction"
            value = {amount}
            onChange = {(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">
            Add Transaction
        </button>
      </form>
    </>
  );
};
