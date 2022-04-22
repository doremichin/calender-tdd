import React, { useState } from 'react';
import styled from 'styled-components';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!

export type TEvent = {
    title? : string
    start? : string
    end? : string
}

function MainComponent() {
  const [events, setEvents] = useState<TEvent[]>([{}]);

  const handleClick = () => {
    setEvents([
      {
        title: 'event1',
        start: '2022-04-10',
      },
      {
        title: 'event2',
        start: '2022-04-12',
        end: '2022-04-13',
      },
      {
        title: 'event3',
        start: '2022-04-22T12:30:00',
      },
    ]);
  };
  return (
    <Container>
      <p>안녕하세요</p>
      <button onClick={handleClick}>불러올거야</button>
      <FullCalendar
        viewClassNames="sophie"
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
      />
    </Container>
  );
}

const Container = styled.div`
padding: 200px;
`;

export default MainComponent;
