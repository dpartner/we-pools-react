import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchFriendList } from "../../utils/fakeApi";

export const fetchFriendListApi = createAsyncThunk(
  "daily/fetchFriendList",
  async (userId, thunkApi) => {
    try {
      const data = await fetchFriendList(userId);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
