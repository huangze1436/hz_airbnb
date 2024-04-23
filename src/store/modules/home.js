import {createSlice} from '@reduxjs/toolkit'

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        cityName: '北京'
    },
    reducers: {
        changeCity(state, action) {
            state.cityName = action.payload
        }
    }
})
export const {changeCity} = homeSlice.actions

export default homeSlice.reducer