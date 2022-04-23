import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import ListComponent from './ListComponent';
import { ListItems } from '../../../../fixtures';

test('list-component test', async () => {
  const { container } = render(<ListComponent data={ListItems} />);

  expect(container).toHaveTextContent('개발공부하기');
});
