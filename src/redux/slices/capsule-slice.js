import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {END_POINTS} from "../../constants/endpoints.js";
import {request} from "./requests/request.js";
import {getUniqueValuesByKey} from "../../tools/libraries/libraries.js";

export const getCapsules = createAsyncThunk("getCapsules", async({}, thunkAPI) => {
  try{
    return request(END_POINTS.getCapsules, "GET");
  } catch(error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const initialState = {
  capsules: [],
  statuses: [],
  original_launches: [],
  types: [],
  loading: false,
}

const capsuleSlice = createSlice({
  name: "capsules",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getCapsules.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(getCapsules.fulfilled, (state, {payload}) => {
      if(payload && payload.length > 0) {
        state.statuses = getUniqueValuesByKey(payload,'status');
        state.original_launches = getUniqueValuesByKey(payload,'original_launch');
        state.types = getUniqueValuesByKey(payload,'type');
        state.capsules = payload;
      } else {
        console.warn("No capsules were fetched")
      }
      state.loading = false;
    })
    builder.addCase(getCapsules.rejected, (state) => {
      console.error("Error fetching SpaceX data")
      state.loading = false;
    })
  },
});

export const {} = capsuleSlice.actions;
export default capsuleSlice.reducer;