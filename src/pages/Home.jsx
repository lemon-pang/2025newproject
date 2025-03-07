import { useState } from "react";
import DateHeader from "../component/DateHeader";
import DiaryList from "../component/DiaryList";
import IconFooter from "../component/IconFooter";
import "./Home.css";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]); // 오늘 날짜

  return (
    <div>
      {/* 📌 선택된 날짜를 DateHeader와 DiaryList에 전달 */}
      <DateHeader selectedDate={selectedDate} onDateChange={setSelectedDate} />
      <DiaryList selectedDate={selectedDate} />
      <IconFooter />
    </div>
  );
};

export default Home;
