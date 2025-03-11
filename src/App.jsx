import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLogin from './pages/MainLogin';
import FirstHome from './pages/FirstHome';
import DiaryWrite from './component/DiaryWrite';
import './App.css';

function App() {
  const [isDiaryWritten, setIsDiaryWritten] = useState(false); // 일기 작성 여부 상태

  // 일기 작성 후 상태 업데이트 함수
  const handleDiaryWritten = () => {
    setIsDiaryWritten(true);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<MainLogin />} />
          {/* FirstHome에 isDiaryWritten과 handleDiaryWritten을 props로 전달 */}
          <Route path="/first-home" element={<FirstHome isDiaryWritten={isDiaryWritten} />} />
          <Route path='/main' element={<MainLogin />} />
          {/* DiaryWrite에서 글 등록 후 상태를 변경하도록 함수 전달 */}
          <Route path='/write' element={<DiaryWrite handleDiaryWritten={handleDiaryWritten} />} />
        </Routes>
      </div>  
    </BrowserRouter>
  );
}

export default App;
