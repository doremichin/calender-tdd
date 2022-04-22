import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import AsyncComponent from './AsyncComponent';

test('async-component test', async () => {
  const {
    getByText, findAllByRole,
  } = render(<AsyncComponent />);

  // toBeInTheDocument 사용시 "import '@testing-library/jest-dom';" 해줘야함..
  expect(getByText('로딩중')).toBeInTheDocument();

  // find* 메서드는 비동기적으로 처리되고 타겟을 못찾으면 에러 날림
  // container에 엘리먼트의 role을 입력해줌
  // https://www.w3.org/TR/html-aria/#docconformance 참조
  expect(await findAllByRole('listitem')).toHaveLength(2);
  // h1 ~ h6 의 role=heading
  // li 의 role = listitem
});
