import React from 'react';
import ExpenseForm from './ExpenseForm';
import Navbar from '../Navbar/Navbar';

function SPCLayout() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      <Navbar />
      <div className="w-full p-4 mt-20">
        <ExpenseForm />
      </div>
    </div>
  );
}

export default SPCLayout;
