import React, { useState } from 'react';

const ExpenseForm = () => {
  const [date, setDate] = useState('');
  const [reason, setReason] = useState('');
  const [amount, setAmount] = useState('');
  const [expenses, setExpenses] = useState([
    { id: 1, date: '2024-11-10', reason: 'Food for company officials', amount: '150.00' },
    { id: 2, date: '2024-11-10', reason: 'Water bottles for officials', amount: '30.00' },
    { id: 3, date: '2024-11-10', reason: 'Transportation for officials', amount: '100.00' },
  ]);

  const handleAddExpense = (e) => {
    e.preventDefault();

    const newExpense = {
      id: Date.now(),
      date,
      reason,
      amount: parseFloat(amount).toFixed(2),
    };

    setExpenses([...expenses, newExpense]);
    setDate('');
    setReason('');
    setAmount('');
  };

  return (
    <div className="p-6 w-full md:max-w-3xl mx-auto space-y-8">
      {/* Add New Expense Section */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Add New Expense</h2>
        <form onSubmit={handleAddExpense} className="space-y-4">
          <div>
            <label htmlFor="date" className="block text-gray-700">Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark"
              required
            />
          </div>

          <div>
            <label htmlFor="reason" className="block text-gray-700">Reason for Expense</label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows="3"
              className="mt-1 p-2 w-full border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary-dark"
              placeholder="Enter reason"
              required
            />
          </div>

          <div>
            <label htmlFor="amount" className="block text-gray-700">Amount</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark"
              placeholder="Enter amount"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary-dark text-white p-2 rounded-md hover:bg-primary-darkest transition"
          >
            Add Expense
          </button>
        </form>
      </section>

      {/* Expense List Section */}
      <section className="bg-white rounded-lg shadow-md p-6" >
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Expense List</h3>
        <ul className="space-y-2">
          {expenses.map((expense) => (
            <li
              key={expense.id}
              className="p-4 border rounded-md bg-gray-50 flex justify-between items-center"
              style={{ backgroundColor: 'hsla(240, 100%, 70%, .45)' }}
            >
              <span>{expense.date}       {expense.reason}</span>
              <span className="font-semibold">Rs. {expense.amount}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ExpenseForm;
