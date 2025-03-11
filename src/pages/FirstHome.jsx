import { Link } from 'react-router-dom'; // Link import
import './FirstHome.css';

const FirstHome = ({ isDiaryWritten }) => {
  return (
    <div className="firsthome-inner">
      <img src="/img/logo.png" alt="로고" width="60px" />
      <p className="ment">우리의 비밀 일기장</p>

      <div className="photobox">
        <img src="/img/couplephoto.jpg" alt="로고" width="200px" />
        <p className="ment1">2024.03.09 소중한 추억 from. 감자</p>
      </div>
      <div className="diarysecssion">
        <p className="diarydatetag">2025.03.11 일기장</p>
        <p className="diarywriter">공주님</p>
        {/* isDiaryWritten에 따라 문구 변경 */}
        <Link to="/write">
          <p className="pushbtn">
            {isDiaryWritten ? '작성된 일기가 있습니다❤' : '이곳을 눌러 일기를 작성해주세요'}
          </p>
        </Link>
        <p className="diarywriter">왕자님</p>
        <p className="pushbtn">이곳을 눌러 일기를 작성해주세요</p>
      </div>
      <div className="footer-firsthome">푸터자리</div>
    </div>
  );
};

export default FirstHome;
