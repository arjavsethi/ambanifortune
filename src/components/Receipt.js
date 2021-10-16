import React from 'react'
import Receiptitem from './Receiptitem'
import TotalContext from "../context/totalContext";
import { useContext} from "react"

const Receipt = () => {
   
    const context = useContext(TotalContext)
    const{receitArray,total,formater,printSection}=context;
    const receitTotal  =  formater(101800000000-total.wealth);

    // console.log(receitArray)
    return (
        <div className="App">
        <div id="print-receit">
            <h2 >Receipt</h2>
            {receitArray.map((receit)=>{
                return receit.count===0?"" : <Receiptitem key={receit.name} name={receit.name} price={receit.price} count={receit.count} />
            })}
                 
               <h5>  {receitTotal==="$0.00"?"":("Total is "+receitTotal)}</h5>
               </div>
               {receitTotal==="$0.00"?"": <button className="btn btn-primary btn-sm" onClick={()=>{printSection("print-receit")}}>Print Receit</button>}
               
        </div>
    )
}

export default Receipt
