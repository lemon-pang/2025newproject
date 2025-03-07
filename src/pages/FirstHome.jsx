//메인화면에서 작성된 일기 볼 수 있는 창.
//여자, 남자별로 작성된 혹은 일기 작성할 수 있는 창 띄우는곳

import { useState } from "react";
import DateHeader from "../component/DateHeader";
import IconFooter from "../component/IconFooter";
import GirlDiary from "../component/GirlDiary";
import "./FirstHome.css";

const FirstHome = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]); // 오늘 날짜

  return (
    <div>
      <DateHeader selectedDate={selectedDate} onDateChange={setSelectedDate} />
      <GirlDiary />
      <IconFooter />
    </div>
  );
};

export default FirstHome;
