import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '.';

// -----------------
// STATE - This defines the type of data maintained in this Redux store.

export interface State {
  count: number;
}

const initialState: State = {
  count: 0,
};

const reducerSlice = createSlice({
  name: 'Counter',
  initialState,
  reducers: {
    increase(state) {
      state.count = state.count + 1;
      return state;
    },

    increaseAmount(state, action: PayloadAction<number>) {
      state.count = state.count + action.payload;
      return state;
    },
  },
});

export const { increase, increaseAmount } = reducerSlice.actions;
export default reducerSlice.reducer;

export const increaseAsync = (time: number): AppThunk => async (
  dispatch,
  getState
) => {
  setTimeout(() => {
    const count = getState().counter.count;
    dispatch(increaseAmount(count === 0 ? 1 : count));
  }, time);
};
