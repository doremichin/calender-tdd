import { render } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import MainComponent from './MainComponent';

test('main-component test', () => {
  // render(<컴포넌트/>)을 구조분해 할당해서 받으면 screen.* 없이 테스트 가능
  const { getByText, getByRole, getAllByText } = render(<MainComponent />);
  getByText('캘린더');

  // 렌더링 된 컴포넌트에서 다수의 엘리먼트가 검색되는 상황에서는 All을 붙여줘야함(없으면 에러)
  getAllByText((content, element) => element?.tagName.toLowerCase() === 'table');

  // 버튼을 눌렀을때 렌더링 될 텍스트를 체크
  // name : TextMatch
  // https://testing-library.com/docs/queries/byrole 참조
  const target = getByRole('button', { name: '이벤트 불러오기' });
  userEvent.click(target);
  expect(getByText('event1')).toBeTruthy();

  // 렌더링되는 돔요소의 role이 궁금할때
  // getByRole('dont know');   << 이거 주석 풀어서 해봐요!
  // https://twitter.com/rwieruch/status/1260912349978013696 참조
});
