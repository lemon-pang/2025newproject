import './DateHeader.css';


const DateHeader = ({getTodayDate}) => {

  
  return (
    <div className="dataheader">
      <div className="dataheader-inner">
        <div>아이콘</div>
        <div className="date">{getTodayDate()}</div>
        <div className= "search-ico"><img src="/img/search_icon.png"/></div>
      </div>
    </div>
  );
};

export default DateHeader;