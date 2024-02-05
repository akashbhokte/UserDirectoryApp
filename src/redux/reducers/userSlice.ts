import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
  users: [],
  status: 'idle',
  error: null,
};

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('ERR', error);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
