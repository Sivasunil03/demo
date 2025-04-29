import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Final = () => {
    const[des,setDec]=useState('')
    const[amt,setAmt]=useState(0)
    const[expense,setExpense]=useState([])
    const[summa,setSumma]=useState('')
    const[total,setTotal]=useState(0)
    const addExpense=()=>{
        const amountNumber=parseFloat(amt)
        const newExpense={description:des,amount:amountNumber,summaThan:summa}
        setExpense([...expense,newExpense])
        setTotal(total+amountNumber)
        setAmt('')
        setDec('')
        setSumma('')
    }
    const removeExpense=(indexToDelete)=>{
        const removedAmount = expense[indexToDelete].amount
        let updatedList=expense.filter((_,index)=>(index!==indexToDelete))
        setExpense(updatedList)
        setTotal(total-removedAmount)
    }
  return (
    <div>
        <h1>Expense Tracker</h1>
        <input type="text" 
        placeholder='Type Description Here...'
        value={des}
        onChange={(e)=>setDec(e.target.value)}
        />
        <input type="text" 
        placeholder='Type Amount Here...'
        value={amt}
        onChange={(e)=>setAmt(e.target.value)}
        />
        <input type="text" 
        placeholder='Type Summa Here...'
        value={summa}
        onChange={(e)=>setSumma(e.target.value)}
        />
        <button onClick={addExpense}>Add Expense</button>
        <ol>   
            {expense.map((expense,index)=>(
                <li key={index}>{expense.description} Rs:{expense.amount.toFixed(2)} this is summa: {expense.summaThan}
                <button onClick={()=>removeExpense(index)}>Delete</button>
                </li>
            ))}
        </ol>
        <h2>Total: {total}</h2>
        <button><Link to={'/exp'}>i am a link </Link></button>
    </div>
  )
}

export default Final