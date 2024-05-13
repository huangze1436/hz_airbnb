import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { getHomeDiscountData, getHomeGoodPriceDate ,getHomeHighScoreData, getHomeHotRecommendData} from '../../services'

export const fetchHomeDateAction = createAsyncThunk('fetchHomeDate',   (payload, {dispatch}) => {
    getHomeGoodPriceDate().then(res=>{
      dispatch(changeGoodPriceInfo(res))
    })

    getHomeHighScoreData().then(res=>{
      dispatch(changeHighScoreInfo(res))
    })
    getHomeDiscountData().then(res=>{
      console.log(res);
      dispatch(changeDiscountInfo(res))
    })
    getHomeHotRecommendData().then(res=>{
      dispatch(changeHotRecommendInfo(res))
    })
})

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        goodPriceInfo: {},
        highScoreInfo: {}
    },
    // extraReducers: (builder) => {
    //     builder
    //       .addCase(fetchHomeDateAction.pending, (state) => {
    //         // state.status = 'loading';
    //       })
    //       .addCase(fetchHomeDateAction.fulfilled, (state, action) => {
    //         state.status = 'succeeded';
    //         console.log(action.payload);
    //         state.goodPriceInfo = action.payload;
    //       })
    //       .addCase(fetchHomeDateAction.rejected, (state, action) => {
    //         state.status = 'failed';
    //         // state.error = action.error.message;
    //       });
    //   },
    reducers: {
        changeGoodPriceInfo(state, {payload}) {
            state.goodPriceInfo = payload
        },
        changeHighScoreInfo(state, {payload}) {
          state.highScoreInfo = payload
        },
        changeDiscountInfo(state, {payload}) {
          state.discountInfo = payload
        },
        changeHotRecommendInfo(state, {payload}) {
          state.hotRecommendInfo = payload
        }
    },
    
})
export const {changeGoodPriceInfo,changeHighScoreInfo, changeDiscountInfo, changeHotRecommendInfo} = homeSlice.actions

export default homeSlice.reducer