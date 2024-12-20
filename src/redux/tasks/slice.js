import { createSlice } from "@reduxjs/toolkit";
import { fetchTasksListApi } from "./operations";

const initialState = {
  items: {
    tasksList: [],
  },
  loading: {
    tasksList: false,
  },
  error: false,
};

const slice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasksListApi.fulfilled, (state, action) => {
        state.items.tasksList = action.payload;
        state.loading.tasksList = false;
      })
      .addCase(fetchTasksListApi.pending, (state) => {
        state.loading.tasksList = true;
      })
      .addCase(fetchTasksListApi.rejected, (state, action) => {
        state.error = action.payload;
        state.loading.tasksList = false;
      });
  },
});

export default slice.reducer;
