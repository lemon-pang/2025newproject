import DateHeader from "../component/DateHeader";
import DiaryMemo from "../component/DiaryMemo";
import IconFooter from "../component/IconFooter";
import axios from "axios";
import { useEffect } from "react";
import './Home.css';

const Home = () => {
  const today = new Date(); // 오늘 날짜 객체
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/data/diarys.json');
        const userData = response.data.diarys;
        const targetData = userData.find(user => new Date(user.diarydate).getTime() === today.getTime());
        console.log(targetData);
      }catch (error) {
        console.error('아이디 중복 확인 에러:', error);
        userIdErrRef.current.textContent = '아이디 중복 확인 중 오류 발생. 새로고침 후 사용해주세요'
      } 
    }
    fetchData();
           
  },[]);

  // 오늘 날짜를 가져오는 함수
  const getTodayDate = () => {
    
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