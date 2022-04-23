import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Nav from './Nav';

function Header() {
  return (
    <Container>
      <Logo to="/">
        Logo
      </Logo>
      <Nav />
    </Container>
  );
}

const Container = styled.div`
  padding: 10px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow:  1px 1px 5px #eeeeee;
`;
const Logo = styled(Link)`
  font-weight: 500;
  font-size: 20px;
`;

export default Header;
