import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: '0',
    name: 'nhun',
  },
  {
    id: '1',
    name: 'Hải'
  },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) =>state.users;
export default usersSlice.reducer
