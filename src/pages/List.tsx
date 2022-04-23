import React from 'react';
import styled from 'styled-components';

import { LayoutContainer } from '../style/LayoutStyle';

import ListContainer from '../views/list/containers/ListContainer';

function List() {
  return (
    <Container>
      <ListContainer />
    </Container>
  );
}

const Container = styled(LayoutContainer)`

`;

export default List;
