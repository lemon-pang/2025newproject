import React, { useState } from "react";
import "./GirlDiary.css";

const GirlDiary = () => {
  const [isWriting, setIsWriting] = useState(false); // 모달 상태
  const [diaryText, setDiaryText] = useState(""); // 일기 내용
  const [image, setImage] = useState(null); // 선택된 이미지

  const handleOpenDiary = () => {
    setIsWriting(true);
  };

  const handleCloseDiary = () => {
    setIsWriting(false);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleSaveDiary = () => {
    if (diaryText.trim() !== "") {
      alert("일기가 저장되었습니다!"); // ✅ 저장 완료 알림
      setIsWriting(false);
    }
  };

  return (
    <div className="girl-diary-container">
      <p>일기작성하기 <button onClick={handleOpenDiary}>+</button></p>

      {/* ✅ modal-inner 안에서 isWriting을 조건으로 모달 표시 */}
      {isWriting && (
        <div className="modal-overlay">
          <div className="modal-inner">    
            <div className="modal-content">
              <label className="image-upload-button">
                {image ? "사진 변경" : "사진 추가+"} {/* ✅ 사진이 추가되면 문구 변경 */}
                <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: "none" }} />
              </label>
              {image && <img src={image} alt="Uploaded" className="uploaded-image" />}
              <textarea
                placeholder="오늘의 일기를 작성하세요..."
                value={diaryText}
                onChange={(e) => setDiaryText(e.target.value)}
              />
              <div className="button-group">
                <button onClick={handleSaveDiary} className="save-button">작성 완료</button>
                <button onClick={handleCloseDiary} className="close-button">닫기</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GirlDiary;