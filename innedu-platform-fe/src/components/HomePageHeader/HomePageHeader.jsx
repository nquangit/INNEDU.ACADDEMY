import blackboard from "../../assets/blackboard.svg";
import "./HomePageHeader.css";

export default function HomePageHeader() {
    return (
        <div className="home-page-header">
            <img src={blackboard} alt="blackboard" width="60%" />
            <div className="board-content">
                <h1 className="title">
                    <span
                        style={{
                            color: "var(--primary-color)",
                        }}
                    >
                        INN
                    </span>
                    <span>EDU</span>
                </h1>
                <p>
                    Innedu, được tạo thành từ 2 từ Innovation và Education,
                    tượng trưng cho sự kết hợp giữa yếu tố đổi mới sáng tạo và
                    triết lý nền tảng trong giáo dục.
                </p>
            </div>
        </div>
    );
}
