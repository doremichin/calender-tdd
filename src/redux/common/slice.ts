import { createSlice } from '@reduxjs/toolkit';

import { TEvent } from '../../models/event';
import { TListItem } from '../../models/list';

export interface commonState {
  events : TEvent[]
  listItems : TListItem[]
}

const initialState: commonState = {
  events: [],
  listItems: [
    {
      id: 1,
      title: '이번주 할일',
      desc: '개발공부하기',
    },
    {
      id: 2,
      title: '다음주 할일',
      desc: '또 개발공부하기',
    },
    {
      id: 2,
      title: '다다음주 할일',
      desc: '또또..개발공부하기',
    },
  ],
};

export const commonSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setEvents: (state, { payload }) => {
      state.events = payload;
    },
    setListItems: (state, { payload }) => {
      state.listItems = payload;
    },
  },
});
export const { setEvents, setListItems } = commonSlice.actions;

export default commonSlice.reducer;
