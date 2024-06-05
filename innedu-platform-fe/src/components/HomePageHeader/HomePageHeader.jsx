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
                    Innedu là nền tảng giáo dục trực tuyến dành cho học sinh
                    tiểu học, giúp học sinh học tập mọi lúc, mọi nơi, mọi nền
                    tảng.
                </p>
            </div>
        </div>
    );
}
