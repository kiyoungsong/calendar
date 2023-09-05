import styled from "styled-components";

export const CalendarContainer = styled.div`
  padding: 6px;
  border-radius: 8px;
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DateContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  grid-gap: 8px;
`;

export const DayContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  grid-gap: 8px;
`;

export const DateLabel = styled.div<{ $currentMonth?: boolean }>`
  color: ${(props) => (props.$currentMonth ? `black` : "gray")};
`;
