import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUser } from "../../utils/fakeApi";

export const fetchUserApi = createAsyncThunk("user/fetchUser", async(userId, thunkApi) => {
  try {
    const user = await fetchUser(userId);
    
    return user;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
    
  }
});