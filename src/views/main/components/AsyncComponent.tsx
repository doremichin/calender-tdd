import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const mockFetch = () => new Promise((resolve : (arg :any) => any) => {
  setTimeout(
    resolve(() => [
      { id: '1', name: 'Person1' },
      { id: '2', name: 'Person2' },
    ]),
    2000,
  );
});

function AsyncComponent() {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const loadResult = async () => {
      const fetchedResult = await mockFetch();

      setResult(fetchedResult);
      setLoading(false);
    };

    loadResult();
  }, []);

  return (
    <Container>
      {loading && <div>로딩중</div>}
      {result && (
        <ul>
          {result.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      )}
    </Container>
  );
}

const Container = styled.div`

`;

export default AsyncComponent;
