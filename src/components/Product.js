import React from "react";
import TotalContext from "../context/totalContext";
// import { useContext,useState } from "react";


const Product = (props) => {
  const context = React.useContext(TotalContext)
  const{total,settotal, perMoneyUsed,receitCountIncUpdater,receitCountDncUpdater,formater}=context;
  
  const {name,price,url }=props;

 
//count functionality
const initialcount=0
const [count, setcount] = React.useState(initialcount)

//onBuy
const onBuy=(price)=>{
  
 
  const  newTotal={
        wealth : total.wealth-price
    }

    setcount(count+1)

    settotal(newTotal)
    perMoneyUsed();
    receitCountIncUpdater(name);
// console.log(receitArray)
  
 }
 //onSell
const onSell=(price)=>{
  const  newTotal={
    wealth : total.wealth+price
   
}

setcount(count-1)

settotal(newTotal)
perMoneyUsed();
receitCountDncUpdater(name);
// console.log(receitArray)
}

//receipt functionality



  return (
    <div className="App col-md-4 my-2">
      <div className="card" style={{width:"18rem"}}>
  <img className="card-img-top" style={{width :"430px",height:"279px"}} src={url} alt="Card  cap"/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">USD {formater(price)}</p>
    <button type="button" className={count===0?"btn btn-primary disabled btn-sm":"btn btn-primary  btn-sm"}  onClick={count===0?()=>{}:()=>{onSell(price)}}>-</button>
    <span className="mx-3"> {count} </span>
    <button type="button" className={total.wealth<=0?"btn btn-primary disabled btn-sm":"btn btn-primary  btn-sm"} onClick={total.wealth<=0?()=>{}:()=>{onBuy(price)}} >+</button>
  </div>
</div>
    </div>
  );
};

export default Product;
