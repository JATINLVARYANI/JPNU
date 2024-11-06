import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFormFields = createAsyncThunk('form/fetchFields', async () => {
  const response = await fetch('http://localhost:5050/api/formFields'); // Replace with your API endpoint
  return response.json();
});

const formSlice = createSlice({
  name: 'form',
  initialState: {
    fields: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFormFields.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFormFields.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.fields = action.payload; // Assuming the payload is an array of field objects
      })
      .addCase(fetchFormFields.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default formSlice.reducer;
