import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { getHomeGoodPriceDate } from '../../services'

export const fetchHomeDateAction = createAsyncThunk('fetchHomeDate',  async () => {
    const res = await getHomeGoodPriceDate()
    return res
})

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        goodPriceInfo: {}
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchHomeDateAction.pending, (state) => {
            // state.status = 'loading';
          })
          .addCase(fetchHomeDateAction.fulfilled, (state, action) => {
            state.status = 'succeeded';
            console.log(action.payload);
            state.goodPriceInfo = action.payload;
          })
          .addCase(fetchHomeDateAction.rejected, (state, action) => {
            state.status = 'failed';
            // state.error = action.error.message;
          });
      },
    // reducers: {
    //     changeGoodPriceInfo(state, {payload}) {
    //         state.goodPriceInfo = payload
    //     }
    // },
    
})
export const {changeGoodPriceInfo} = homeSlice.actions

export default homeSlice.reducer