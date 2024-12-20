import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTaskList } from "../../utils/fakeApi";

export const fetchTasksListApi = createAsyncThunk(
  "daily/fetchFriendList",
  async (userId, thunkApi) => {
    try {
      const data = await fetchTaskList(userId);
      console.log(data[0].tasks);

      return data[0].tasks;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
