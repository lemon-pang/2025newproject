import { useEffect, useState } from "react";
import axios from "axios"; // axios 임포트 추가
import './DiaryList.css';

const DiaryList = ({ selectedDate }) => {
  const [diarys, setDiarys] = useState([]);

  useEffect(() => {
    axios.get("/public/data/diarys.json") // JSON 데이터 가져오기 (axios 사용)
      .then((response) => {
        console.log("📌 불러온 데이터:", response.data); //데이터 구조사용
        console.log("📌 데이터 키:", Object.keys(response.data)); // 객체의 키 확인
        const filteredData = response.data.diarys.filter((diary) => {
          return new Date(diary.diarydate).toISOString().split("T")[0] === selectedDate;
        });
        console.log("📌 필터링된 데이터:", filteredData);
        setDiarys(filteredData); // 선택한 날짜의 데이터만 저장
      })
      .catch((error) => {
        console.error("❌ 데이터 가져오기 실패:", error);
      });
  }, [selectedDate]); // 날짜가 변경될 때마다 실행

  return (
    <div>
        <div className="gnbdiary">
            {diarys.length === 0 ? (
                <p>해당 날짜의 다이어리가 없습니다.</p>
            ) : (
                diarys.map((diary) => (
                <div key={diary.id} style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
                    <h3>{diary.title} </h3>
                    <div className="diary-imgphoto"><img src={diary["diary-photo"]} alt="diary"/></div>
                        {/* - {diary.user.name} */}
                    {/* <p><strong>📅 날짜:</strong> {diary.diarydate}</p> */}
                    <p className="diary-text">{diary["diary-memo"]}</p>
                    <p><strong>💬 댓글:</strong> {diary.coment}</p>
                    <p><strong>👤 작성자:</strong> {diary.user.name}</p>
                    
                </div>
                ))
            )}
        </div>    
    </div>
  );
};

export default DiaryList;
