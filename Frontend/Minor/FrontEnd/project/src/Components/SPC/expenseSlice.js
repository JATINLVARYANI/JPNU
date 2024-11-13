// src/features/expenseSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async actions for fetching, adding, deleting, and updating expenses
export const fetchAllExpenses = createAsyncThunk(
  'expenses/fetchAll',
  async () => {
    // Replace with API call to fetch expenses
    const response = await fetch('/api/expenses');
    return response.json();
  }
);

export const addExpense = createAsyncThunk(
  'expenses/add',
  async (expense) => {
    // Replace with API call to add an expense
    const response = await fetch('/api/expenses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(expense),
    });
    return response.json();
  }
);

export const deleteExpense = createAsyncThunk(
  'expenses/delete',
  async (id) => {
    await fetch(`/api/expenses/${id}`, { method: 'DELETE' });
    return id;
  }
);

export const updateExpense = createAsyncThunk(
  'expenses/update',
  async (expense) => {
    const response = await fetch(`/api/expenses/${expense.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(expense),
    });
    return response.json();
  }
);

// Initial state
const initialState = {
  expenses: [],
  status: 'idle',
  error: null,
};

// Expense slice with extra reducers for async actions
const expenseSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllExpenses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllExpenses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.expenses = action.payload;
      })
      .addCase(fetchAllExpenses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addExpense.fulfilled, (state, action) => {
        state.expenses.push(action.payload);
      })
      .addCase(deleteExpense.fulfilled, (state, action) => {
        state.expenses = state.expenses.filter(expense => expense.id !== action.payload);
      })
      .addCase(updateExpense.fulfilled, (state, action) => {
        const index = state.expenses.findIndex(expense => expense.id === action.payload.id);
        if (index !== -1) {
          state.expenses[index] = action.payload;
        }
      });
  },
});

export default expenseSlice.reducer;
