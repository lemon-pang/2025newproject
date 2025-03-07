import { useState, useEffect } from "react";
import DatePicker from "react-datepicker"; // 📌 캘린더 라이브러리 추가
import "react-datepicker/dist/react-datepicker.css"; // 📌 기본 스타일 추가
import './DateHeader.css';

const DateHeader = ({ selectedDate, onDateChange }) => {
  const [today, setToday] = useState("");
  const [date, setDate] = useState(new Date(selectedDate)); // 선택된 날짜를 관리하는 상태

  useEffect(() => {
    const currentDate = new Date().toISOString().split("T")[0]; // 오늘 날짜 가져오기
    setToday(currentDate);
  }, []);

  // 📌 날짜 선택 시 실행되는 함수
  const handleDateChange = (date) => {
    const formattedDate = date.toISOString().split("T")[0]; // YYYY-MM-DD 형식으로 변환
    setDate(date); // 내부 상태 업데이트
    onDateChange(formattedDate); // 부모 컴포넌트(Home.jsx)로 전달
  };

  return (
    <div>
      {/* <h1>{selectedDate || today}</h1> 선택된 날짜 표시 */}
      <h2 style={{ cursor: "pointer" }}></h2>

      {/* 📌 캘린더 UI 추가 */}
      <DatePicker
        selected={date}
        onChange={handleDateChange} // 날짜 변경 시 실행
        dateFormat="yyyy-MM-dd" // 날짜 형식 설정
        maxDate={new Date()} // 미래 날짜 선택 방지
        showYearDropdown // 연도 선택 드롭다운 추가
        showMonthDropdown // 월 선택 드롭다운 추가
        dropdownMode="select" className="date-input" // 드롭다운 모드 설정
      />
    </div>
  );
};

export default DateHeader;
