import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllExpenses, addExpense, deleteExpense, updateExpense } from './features/expenseSlice';

const ExpenseForm = () => {
  const [date, setDate] = useState('');
  const [reason, setReason] = useState('');
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses.expenses);
  const expenseStatus = useSelector((state) => state.expenses.status);

  useEffect(() => {
    if (expenseStatus === 'idle') {
      dispatch(fetchAllExpenses());
    }
  }, [expenseStatus, dispatch]);

  const handleAddExpense = (e) => {
    e.preventDefault();
    const newExpense = { date, reason, amount: parseFloat(amount).toFixed(2) };
    dispatch(addExpense(newExpense));
    setDate('');
    setReason('');
    setAmount('');
  };

  const handleDelete = (id) => {
    dispatch(deleteExpense(id));
  };

  return (
    <div className="p-6 w-full md:max-w-3xl mx-auto space-y-8">
      {/* Add New Expense Section */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Add New Expense</h2>
        <form onSubmit={handleAddExpense} className="space-y-4">
          {/* Date, Reason, Amount Inputs */}
          <button type="submit" className="w-full bg-primary-dark text-white p-2 rounded-md">
            Add Expense
          </button>
        </form>
      </section>

      {/* Expense List Section */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Expense List</h3>
        <ul className="space-y-2">
          {expenses.map((expense) => (
            <li key={expense.id} className="p-4 border rounded-md bg-gray-50 flex justify-between items-center">
              <span>{expense.date} - {expense.reason}</span>
              <span className="font-semibold">Rs. {expense.amount}</span>
              <button onClick={() => handleDelete(expense.id)} className="text-red-500">Delete</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ExpenseForm;
