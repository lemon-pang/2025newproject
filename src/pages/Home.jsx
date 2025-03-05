import DateHeader from "../component/DateHeader";
import DiaryMemo from "../component/DiaryMemo";
import IconFooter from "../component/IconFooter";
import axios from "axios";
import { useEffect } from "react";
import './Home.css';

const Home = () => {
    // 오늘 날짜를 가져오는 함수
        const getTodayDate = () => {
        const today = new Date(); // 오늘 날짜 객체
        const year = today.getFullYear(); // 연도
        const month = today.getMonth() + 1; // 월 (0부터 시작하므로 1을 더함)
        const day = today.getDate(); // 일
    
        // 원하는 날짜 형식 (예: 2025-03-05)
        return `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
      };  
     
  return (
    <div>
      <DateHeader getTodayDate={getTodayDate} />
      <DiaryMemo />
      <IconFooter />
    </div>
  );
};

export default Home;