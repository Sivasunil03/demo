import React, { useState } from 'react';
const ExpenseTracker = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);

  const addExpense = () => {
    if (description && !isNaN(amount)) {
      const newExpense = { description, amount: parseFloat(amount) };
      setExpenses([...expenses, newExpense]);
      setTotal(total + newExpense.amount);
      setDescription('');
      setAmount('');
    } else {
      alert('Please enter both fields');
    }
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <button onClick={addExpense}>Add Expense</button>

      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.description}: Rs.{expense.amount.toFixed(2)}
          </li>
        ))}
      </ul>

      <div>Total: Rs.{total.toFixed(2)}</div>
    </div>
  );
};

export default ExpenseTracker;
