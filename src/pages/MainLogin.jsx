import './MainLogin.css';
import { Link } from 'react-router-dom'; // Link import

const MainLogin = () => {
    return(
        <div className="main-page">
            <div className="main-inner">
                <div className="mainlogo">
                    <img src="/img/logo.png" alt="로고" /> {/* public 폴더 내 이미지 사용 */}
                </div>
                <div className="button-css">
                    {/* Link로 감싸서 로그인 버튼 클릭 시 FirstHome으로 이동 */}
                    <Link to="/first-home">
                        <button className="btn-css">로그인</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MainLogin;
