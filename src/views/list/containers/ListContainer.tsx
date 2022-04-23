import React from 'react';
import styled from 'styled-components';

import ListComponent from '../components/ListComponent';

export type TData = {
    id : number
    title : string
    desc : string
}

function ListContainer() {
  const mockData : TData[] = [
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
  ];
  return (
    <Container>
      <ListComponent data={mockData} />
    </Container>
  );
}

const Container = styled.div`

`;

export default ListContainer;
