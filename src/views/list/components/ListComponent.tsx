import React from 'react';
import styled from 'styled-components';

import { TData } from '../containers/ListContainer';

interface IListProps {
    data : TData[]
}

function ListComponent({ data } : IListProps) {
  return (
    <Container>
      <ul>
        {data.map((item, index) => (
          <ListItem key={index}>
            <p>{item.title}</p>
            <p>{item.desc}</p>
          </ListItem>
        )) }
      </ul>
    </Container>
  );
}

const Container = styled.div`

`;
const ListItem = styled.li`
  padding: 10px;
  background-color: #eee;
  p{
    margin-bottom: 10px;
  }
`;

export default ListComponent;
