import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './DiaryWrite.css';
import { useNavigate } from 'react-router-dom'; // useNavigate import

const DiaryWrite = ({ handleDiaryWritten }) => {
  const [image, setImage] = useState(null); // 선택된 이미지 상태
  const [text, setText] = useState(''); // 텍스트 상태 추가
  const navigate = useNavigate(); // useNavigate 훅 사용

  // 파일 선택 시 이미지 미리보기 설정
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // 선택된 파일
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // 이미지 미리보기 URL 설정
      };
      reader.readAsDataURL(file); // 파일을 데이터 URL로 변환
    }
  };

  // 텍스트 변경 시 상태 업데이트
  const handleTextChange = (event) => {
    setText(event.target.value); // 입력된 텍스트 저장
  };

  // 이미지 클릭 시 파일 선택 대화상자 열기
  const handleImageClick = () => {
    document.getElementById('file-input').click(); // 파일 선택 input 클릭
  };

  // 글 등록하기 버튼 클릭 시 상태 업데이트 후 FirstHome으로 이동
  const handleSubmit = () => {
    handleDiaryWritten(); // 일기 작성 여부 상태 업데이트
    navigate('/first-home'); // FirstHome으로 이동
  };

  return (
    <div className="diarywrite">
      <div className="write-inner">
        <div className="xicon">X</div>
        <div className="plus-write-btn">
          {/* 파일 input 태그, 버튼 클릭 시 file input 활성화 */}
          <label htmlFor="file-input" className={`write-btn ${image ? 'has-image' : ''}`}>
            {image ? (
              <img 
                src={image} 
                alt="Preview" 
                className="image-preview" 
                onClick={handleImageClick} // 이미지를 클릭하면 다시 파일 선택 창 열기
              />
            ) : (
              <i className="fa fa-plus" />
            )}
          </label>
          <input
            type="file"
            id="file-input"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </div>
        <p className="photoptag">
          {image ? '✔사진변경하기' : '📷사진추가하기'}
        </p>
        <p className="textareatag">
          <textarea
            placeholder="오늘 하루를 기록해보세요"
            value={text} // 상태로 연결된 textarea 값
            onChange={handleTextChange} // 입력값이 변경되면 상태 업데이트
          />
        </p>
        {/* 텍스트가 입력되면 버튼을 표시 */}
        {text.trim() && (
          <button className="submit-btn" onClick={handleSubmit}>글 등록하기</button> // 글 등록 시 FirstHome으로 이동
        )}
      </div>
    </div>
  );
};

export default DiaryWrite;
