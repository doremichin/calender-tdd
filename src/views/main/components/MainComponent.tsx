import React, { useState } from 'react';
import styled from 'styled-components';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

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
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        timeZone="local"
        // initialView : timeGridWeek , dayGridMonth ,timeGridDay
        initialView="dayGridMonth"
        locale="ko"
        events={events}
        headerToolbar={{
          left: 'dayGridMonth,timeGridWeek,timeGridDay',
          center: 'title tonyButton',
          right: 'prev,next today',
        }}
        views={{
          dayGridMonth: {
            titleFormat: { year: 'numeric', month: 'long', day: '2-digit' },
          },
        }}
        customButtons={{
          tonyButton: {
            text: '커스텀버튼',
            click() {
              alert('clicked the custom button!');
            },
          },
        }}
      />
    </Container>
  );
}

const Container = styled.div`
padding: 200px;
`;

export default MainComponent;
