import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";


export const Balance = () => {
  const  { transactions }  = useContext(GlobalContext);
  let amount = transactions.map(transaction => (transaction.amount));
  let total = 0
  for(let i = 0; i < amount.length; i++){
    total += amount[i]
  }
  // console.log(total);
  return (
    <>
      <h4>Your Balance </h4>
  <h1 id="balance">${total.toFixed(2)}</h1>
    </>
  );
};
