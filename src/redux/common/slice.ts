import { createSlice } from '@reduxjs/toolkit';

import { TEvent } from '../../views/main/components/MainComponent';

export interface commonState {
  events : TEvent[]
}

const initialState: commonState = {
  events: [],
};

export const commonSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setEvents: (state, { payload }) => {
      state.events = payload;
    },
  },
});
export const { setEvents } = commonSlice.actions;

export default commonSlice.reducer;
