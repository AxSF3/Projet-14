import { createSlice } from "@reduxjs/toolkit";

// authSlice
export const employeeSlice = createSlice({
  name: "employee",
  initialState: { employeesList: [] },
  reducers: {
    addInList: (state, { payload }) => {
      state.employeesList.push(payload);
    },
  },
});

export const { addInList } = employeeSlice.actions;
export default employeeSlice.reducer;
