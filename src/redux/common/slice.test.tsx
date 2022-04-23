import '@testing-library/jest-dom';
import reducer, { setListItems } from './slice';

describe('slice', () => {
  it('setListItems', () => {
    const state = reducer({
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
      // setListItems 디스패치 했을 때
    }, setListItems([{
      id: 10,
      title: '아무 데이터나',
      desc: '넣어보자',
    }]));

    // listItems 배열의 길이가 0이 아닐 것
    expect(state.listItems).not.toHaveLength(0);
  });
});
