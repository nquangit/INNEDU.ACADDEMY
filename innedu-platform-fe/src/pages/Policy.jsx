import { Divider } from "primereact/divider";

export default function Policy() {
    const style = {
        width: "100%",
        maxWidth: "1100px",
        margin: "auto",
        paddingBottom: "30px",
        lineHeight: "2",
    };

    return (
        <div className="policy" style={style}>
            <h2
                style={{
                    textAlign: "center",
                    fontSize: "2rem",
                }}
            >
                Chính sách bảo mật
            </h2>
            <Divider />
            <div className="content">
                <h2>Chính sách Bảo vệ thông tin cá nhân</h2>
                <p>
                    Nhằm đảm bảo an toàn cho website và bảo mật thông tin cho
                    người tiêu dùng Chúng tôi đưa ra một số chính sách bảo mật
                    thông tin cho khách hàng cá nhân và tổ chức khi mua hàng tại
                    website:<strong> innedu.academy</strong>
                </p>
                <p>
                    Chính sách bảo mật sẽ giải thích cách chúng tôi tiếp nhận,
                    sử dụng và (trong trường hợp nào đó) tiết lộ thông tin cá
                    nhân của bạn. Chính sách cũng sẽ giải thích các bước chúng
                    tôi thực hiện để bảo mật thông tin cá nhân của khách hàng.
                    Cuối cùng, chính sách bảo mật sẽ giải thích quyền lựa chọn
                    của bạn về việc thu thập, sử dụng và tiết lộ thông tin cá
                    nhân của mình.
                </p>
                <p>
                    Bảo vệ dữ liệu cá nhân và gây dựng được niềm tin cho bạn là
                    vấn đề rất quan trọng với công ty. Vì vậy, chúng tôi sẽ dùng
                    tên và các thông tin khác liên quan đến bạn tuân thủ theo
                    nội dung của chính sách bảo mật. Chúng tôi chỉ thu thập
                    những thông tin cần thiết liên quan đến giao dịch mua bán
                </p>
                <div>
                    1. <strong>Mục đích thu thập thông tin:</strong>
                    <p>
                        Việc thu thập dữ liệu của website:
                        {" "}<strong> innedu.accademy</strong> sẽ giúp chúng tôi:
                    </p>
                    <p>
                        + Nắm bắt được các yêu cầu, mong muốn của khách hàng
                        nhằm nâng cao chất lượng sản phẩm .
                    </p>
                    <p>
                        + Giúp khách hàng cập nhật các thông tin chương trình
                        khuyến mại, giảm giá do chúng tôi tổ chức sớm nhất.
                    </p>
                    <p>
                        + Hỗ trợ khách hàng khi có khiếu nại, ý kiến một cách
                        nhanh nhất.
                    </p>
                </div>
                <p>
                    2. <strong>Phạm vi thu thập thông tin:</strong>
                </p>
                <p>
                    + Họ và Tên <br /> + Địa chỉ <br />+ Email <br />+ Fax{" "}
                    <br />+ Điện thoại <br />+ Nội dung cần liên hệ
                </p>
                <p>
                    3. <strong>Phạm vi sử dụng thông tin:</strong>
                </p>
                <div>
                    Thông tin thu thập được chúng tôi sử dụng cho các mục đích
                    sau:
                    <p>
                        + Giao hàng cho quý khách đã mua hàng tại{" "}
                        <strong> innedu.accademy</strong>
                        <br /> + Thông báo về việc giao hàng và hỗ trợ cho khách
                        hàng
                        <br /> + Xử lý các đơn đặt hàng và cung cấp sản phẩm
                        thông qua website: <strong>
                            {" "}
                            innedu.accademy
                        </strong>{" "}
                        Ngoài ra, các thông tin giao dịch gồm: lịch sử mua hàng,
                        giá trị giao dịch, phương thức vận chuyển và thanh toán
                        cũng được website: <strong> innedu.accademy</strong> lưu
                        trữ nhằm giải quyết những vấn đề có thể phát sinh về
                        sau.
                        <br /> Chúng tôi sẽ không chia sẻ thông tin khách hàng
                        trừ những trường hợp cụ thể sau đây:
                        <br />+ Để bảo vệ<strong> innedu.accademy</strong> và
                        các bên thứ ba khác: Chúng tôi chỉ đưa ra thông tin tài
                        khoản và những thông tin cá nhân khác khi tin chắc rằng
                        việc đưa những thông tin đó là phù hợp với luật pháp,
                        bảo vệ quyền lợi, tài sản của người sử dụng dịch vụ, của{" "}
                        <strong> innedu.accademy</strong> và các bên thứ ba
                        khác.
                        <br />+ Theo yêu cầu pháp lý từ một cơ quan chính phủ
                        hoặc khi chúng tôi tin rằng việc làm đó là cần thiết và
                        phù hợp nhằm tuân theo các yêu cầu pháp lý Nó chắc chắn
                        không bao gồm việc bán, chia sẻ dẫn đến việc làm lộ
                        thông tin cá nhân của khách hàng vì mục đích thương mại
                        vi phạm những cam kết được đặt ra trong quy định Chính
                        sách bảo mật thông tin khách hàng của chúng tôi.
                    </p>
                </div>
                <p>
                    4. <strong>Thời gian lưu trữ thông tin:</strong>
                </p>
                <p>
                    Chúng tôi sẽ lưu trữ các thông tin cá nhân do khách hàng
                    cung cấp trên các hệ thống nội bộ của chúng tôi trong quá
                    trình cung cấp sản phẩm cho khách hàng, cho đến khi hoàn
                    thành mục đích thu thập, hoặc khi khách hàng có yêu cầu hủy
                    các thông tin đã cung cấp.
                </p>
                <p>
                    5.{" "}
                    <strong>
                        Cam kết bảo mật thông tin cá nhân khách hàng:
                    </strong>
                </p>
                <p>
                    Công ty cam kết bảo đảm an toàn thông tin cho quý khách hàng
                    khi đăng ký thông tin cá nhân với chúng tôi. Chúng tôi cam
                    kết không trao đổi mua bán thông tin khách hàng vì mục đích
                    thương mại. Mọi sự chia sẻ và sử dụng thông tin khách hàng
                    chúng tôi cam kết thực hiện theo chính sách bảo mật của
                    chúng tôi. Chúng tôi cam kết sẽ khiến quý khách cảm thấy tin
                    tưởng và hài lòng về bảo mật thông tin cá nhân khi tham gia
                    và sử dụng website của công ty
                </p>
                <p>
                    6.{" "}
                    <strong>
                        Những người hoặc tổ chức có thể được tiếp cận với thông
                        tin:
                    </strong>
                </p>
                <p>
                    Chúng tôi chỉ sử dụng thông tin khách hàng vào những việc
                    hoàn toàn chính đáng, được sự đồng ý chấp thuận của khách
                    hàng. Tuyệt đối không cung cấp thông tin cho một bên thứ 3
                    nếu không được khách hàng đồng ý. Chỉ cung cấp thông tin của
                    khách hàng khi nó có lợi với khách hàng và được sự cho phép
                    của khách hàng. Nhưng chúng tôi vẫn sẻ phải cung cấp thông
                    tin cho bên thứ 3 trong một số trường hợp sau: Được sự cho
                    phép của khách hàng Theo yêu cầu của các tổ chức, cơ quan,
                    chính phủ, nhà nước khi xác nhận được việc làm đó là hợp
                    pháp và không vi phạm pháp luật nhà nước Việt Nam
                </p>
                <p>
                    7.{" "}
                    <strong>
                        Địa chỉ của đơn vị thu thập và quản lý thông tin cá
                        nhân:
                    </strong>
                </p>
                <p>
                    Tên đơn vị: CÔNG TY TNHH TƯ VẤN VÀ PHÁT TRIỂN GIÁO DỤC
                    INNEDU
                    <br /> Mã số thuế: 0311993505
                    <br /> Ngày hoạt động: 04 tháng 10 năm 2012
                    <br /> Địa chỉ trụ sở: Số 424 đường Đại Lộ Tân Phú, khu phố
                    Nam Thông 3 - Phú Mỹ Hưng, Phường Tân Phú, Quận 7, Thành phố
                    Hồ Chí Minh, Việt Nam
                    <br /> Điện thoại: 0918 250 667
                </p>
                <p>
                    8.{" "}
                    <strong>
                        Phương tiện và công cụ để người dùng tiếp cận và chỉnh
                        sửa dữ liệu cá nhân của mình.
                    </strong>
                </p>
                <p>
                    Khách hàng có thể thực hiện các quyền trên bằng cách liên hệ
                    với chúng tôi qua số điện thoại hoặc địa chỉ liên lạc được
                    công bố trên website: <strong> innedu.accademy</strong>
                </p>
            </div>
        </div>
    );
}
