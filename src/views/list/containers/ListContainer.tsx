import React from 'react';
import styled from 'styled-components';

import ListComponent from '../components/ListComponent';
import { useAppSelector } from '../../../redux/hooks';

function ListContainer() {
  const listItems = useAppSelector((state) => state.common.listItems);
  return (
    <Container>
      <ListComponent data={listItems} />
    </Container>
  );
}

const Container = styled.div`

`;

export default ListContainer;
