import { createSlice } from "@reduxjs/toolkit";
const initialState: number = Number(localStorage.getItem("id")) || 0;
const userId = createSlice({
  name: "userId",
  initialState,
  reducers: {
    userID(state, action) {
      return action.payload
    },
  },
});

export default userId.reducer;
export const {userID} = userId.actions