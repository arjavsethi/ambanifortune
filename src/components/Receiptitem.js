import React from 'react'
import TotalContext from '../context/totalContext';
import { useContext } from 'react';
const Receiptitem = (props) => {
    const { name,price,count}= props;
    const context = useContext(TotalContext)
    const {formater}=context;
    return (
       
        <div>
            {name} x {count} ......................{formater(price * count)}
        </div>
    )
}

export default Receiptitem
