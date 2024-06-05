import icon from "./aboutusicon.png";
import "./AboutUsShort.css";

export default function AboutUsShort() {
    return (
        <div className="aboutus-short">
            <div className="aboutus-short__icon">
                <img src={icon} alt="icon" />
            </div>
            <div className="aboutus-short__content">
                <h4 className="title">Về chúng tôi</h4>
                <h1>PRESTEAM</h1>
                <p className="slogan">XU HƯỚNG GIÁO DỤC MẦM NON THẾ KỶ 21</p>
                <p>
                    Giáo án mầm non đầu tiên ở Việt Nam xây dựng theo khung
                    chương trình của Bộ tích hợp STEAM thiết kế bằng phương pháp
                    Project Based Learning và Design Thinking nhằm phát triển tư
                    duy và kỹ năng giải quyết vấn đề cho trẻ từ 2-6 tuổi.
                </p>
                <p>
                    Innedu, được tạo thành từ 2 từ Innovation và Education,
                    tượng trưng cho sự kết hợp giữa yếu tố đổi mới sáng tạo và
                    triết lý nền tảng trong giáo dục. Sứ mệnh của chúng tôi cũng
                    chính là mang đến cảm hứng sáng tạo cho các giáo viên và học
                    sinh Việt Nam, nhằm hướng đến một tương lai mà mỗi học sinh
                    Việt Nam đều được hưởng thụ một nền giáo dục hiệu quả và
                    hạnh phúc.
                </p>
            </div>
        </div>
    );
}
