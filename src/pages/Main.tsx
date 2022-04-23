import React from 'react';
import styled from 'styled-components';

import MainContainer from '../views/main/containers/MainContainer';
import { LayoutContainer } from '../style/LayoutStyle';

function Main() {
  return (
    <Container>
      <MainContainer />
    </Container>
  );
}

const Container = styled(LayoutContainer)`

`;

export default Main;
