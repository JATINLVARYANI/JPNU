import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for signup
export const signupUser = createAsyncThunk('user/signupUser', async (userData, { rejectWithValue }) => {
  try {
    const response = await fetch('http://localhost:8000/api/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData), // Convert userData to JSON
    });

    if (!response.ok) {
      const errorData = await response.json(); // Parse the error response
      return rejectWithValue(errorData.error || 'An error occurred.');
    }

    const data = await response.json(); // Parse the successful response
    return data;
  } catch (error) {
    return rejectWithValue('An error occurred.');
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetError } = userSlice.actions;
export default userSlice.reducer;
