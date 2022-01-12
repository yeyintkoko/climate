import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface WeatherState {
    value: number;
}

const initialState: WeatherState = {
    value: 0,
};

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        increment: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAmount} = weatherSlice.actions;

export default weatherSlice.reducer;
