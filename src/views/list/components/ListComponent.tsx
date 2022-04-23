import React from 'react';
import styled from 'styled-components';

import { TListItem } from '../../../models/list';

interface IListProps {
    data : TListItem[]
}

function ListComponent({ data } : IListProps) {
  return (
    <Container>
      <ul>
        {data.map((item, index) => (
          <ListItem key={index}>
            <Title>
              <SubTitle>
                제목 :&nbsp;
              </SubTitle>
              {item.title}
            </Title>
            <Desc>
              <SubTitle>
                할일 :&nbsp;
              </SubTitle>
              {item.desc}
            </Desc>
          </ListItem>
        )) }
      </ul>
    </Container>
  );
}

const Container = styled.div`

`;
const ListItem = styled.li`
  margin-bottom: 20px;
  padding: 20px 25px;
  border-radius: 10px;
  background-color: #eee;
`;
const Title = styled.div`
  margin-bottom: 10px;
`;
const Desc = styled.div`
  
`;
const SubTitle = styled.span`
  font-weight: 600;
`;

export default ListComponent;
