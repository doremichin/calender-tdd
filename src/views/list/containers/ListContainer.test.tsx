import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import ListContainer from './ListContainer';
import { useAppSelector } from '../../../redux/hooks';
import { TListItem } from '../../../models/list';
import { ListItems } from '../../../../fixtures';

// __mocks__ 의 모듈 불러오기
jest.mock('react-redux');

// mock function 타입 정의 useAppSelector가 리턴할 데이터
// how to use ts and jestmock : https://klzns.github.io/how-to-use-type-script-and-jest-mocks
const mockUseAppSelector = useAppSelector as jest.Mock<TListItem[]>;

test('list-container test', async () => {
  // useSelector 테스트
  mockUseAppSelector.mockImplementation(() => ListItems);
  const { container } = render(<ListContainer />);

  expect(container).toHaveTextContent('산책');
});
