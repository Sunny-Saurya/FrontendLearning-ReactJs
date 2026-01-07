import { createSlice } from "@reduxjs/toolkit";

export const ReduxSlicer = createSlice({
    name: "CounterExample",
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        }
    }
})

export const { increment, decrement, reset } = ReduxSlicer.actions;
export default ReduxSlicer.reducer;