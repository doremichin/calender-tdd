import React, { useState } from 'react';
import styled from 'styled-components';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import { defaultButton } from '../../../style/ButtonStyle';
import { TEvent } from '../../../models/event';

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
      <Title>캘린더</Title>
      <Button onClick={handleClick}>이벤트 불러오기</Button>
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
`;
const Title = styled.h1`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 20px;
`;
const Button = styled(defaultButton)`
  
`;
export default MainComponent;
