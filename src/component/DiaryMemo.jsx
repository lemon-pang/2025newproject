import './DiaryMemo.css';
import DiaryCard from './DiaryCard';

const DiaryMemo = () => {
    return (
      <div className="diarys">
        <div className="diarys-inner">
          <DiaryCard />
          <div className="boy-diary">남자친구메모란</div>
        </div>
      </div>
    );
  };
  
export default DiaryMemo;