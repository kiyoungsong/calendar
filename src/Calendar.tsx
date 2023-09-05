import { useEffect, useState } from "react";
import {
  CalendarContainer,
  CalendarHeader,
  DateContainer,
  DateLabel,
  DayContainer,
} from "./styles";
import dayjs from "dayjs";
import { generateDate } from "./generateDate";

interface DateProps {
  currentMonth: boolean;
  date: dayjs.Dayjs;
}

export const Calendar = () => {
  const [date, setDate] = useState(dayjs());
  const dates = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  const [records, setRecords] = useState<DateProps[]>([]);
  const prevMonth = () => {
    setDate((prev) => prev.add(-1, "month"));
  };

  const nextMonth = () => {
    setDate((prev) => prev.add(1, "month"));
  };

  useEffect(() => {
    const arrayOfDate = generateDate(date);
    setRecords(arrayOfDate);
  }, [date]);

  return (
    <CalendarContainer>
      <CalendarHeader>
        <div onClick={prevMonth}>
          <button>{` < `}</button>
        </div>
        <div className="block xl:hidden">
          <span>
            {date.year()}년 {date.month() + 1}월
          </span>
        </div>
        <div onClick={nextMonth}>
          <button>{` > `}</button>
        </div>
      </CalendarHeader>
      <DateContainer>
        {dates.map((date, index) => (
          <div key={index}>{date}</div>
        ))}
      </DateContainer>
      <DayContainer>
        {records.map(({ date, currentMonth }) => {
          return (
            <DateLabel $currentMonth={currentMonth}>{date.date()}</DateLabel>
          );
        })}
      </DayContainer>
    </CalendarContainer>
  );
};
