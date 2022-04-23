import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <Container>
      <NavItem to="/">Calendar</NavItem>
      <NavItem to="/list">TodoList</NavItem>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
const NavItem = styled(Link)`
  padding: 10px;
`;

export default Nav;
