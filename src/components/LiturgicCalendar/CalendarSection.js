import styled from "styled-components";
import Calendar from "./subcomponents/Calendar";

const MainContainer = styled.div`
  height: 700px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
`;

function CalendarSection() {
  return (
    <MainContainer>
      <Calendar></Calendar>
    </MainContainer>
  );
}

export default CalendarSection;
