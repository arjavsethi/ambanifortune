import React from 'react'
import totalContext from '../context/totalContext'
// import { useContext } from 'react';
const Money = (props) => {

    const  context = React.useContext(totalContext);
const {total,formater,perMoneyUsed}=context;
const a = perMoneyUsed()

//sticky property code



//end sticky property code
    return (
        
        
            <div className="alert alert-dark font-weight-bold moneytag fixed-top"  role="alert">
                <div className="box1">Remaining: {total.wealth<=0?"Can't buy ,Selll Something":formater(total.wealth)}</div> 
                <div className="box2">You only spent {a>=100?"100.000000%":a===0?"0.000000%":a+"%"} of the total!</div>
   
</div>
        
    )
}

export default Money
