import { Divider } from "primereact/divider";

export default function TermsOfService() {
    const style = {
        width: "100%",
        maxWidth: "1100px",
        margin: "auto",
        paddingBottom: "20px",
        lineHeight: "1.8",
    };

    return (
        <div className="term-of-service" style={style}>
            <h2
                style={{
                    textAlign: "center",
                    fontSize: "2rem",
                }}
            >
                Điều khoản dịch vụ
            </h2>
            <Divider />
            <div className="content">
                <strong>1. Giới thiệu</strong>
                <p>Chào mừng quý khách hàng đến với website chúng tôi.</p>
                <p>
                    Khi quý khách hàng truy cập vào trang website của chúng tôi
                    có nghĩa là quý khách đồng ý với các điều khoản này. Trang
                    web có quyền thay đổi, chỉnh sửa, thêm hoặc lược bỏ bất kỳ
                    phần nào trong Điều khoản mua bán hàng hóa này, vào bất cứ
                    lúc nào. Các thay đổi có hiệu lực ngay khi được đăng trên
                    trang web mà không cần thông báo trước. Và khi quý khách
                    tiếp tục sử dụng trang web, sau khi các thay đổi về Điều
                    khoản này được đăng tải, có nghĩa là quý khách chấp nhận với
                    những thay đổi đó.
                </p>
                <p>
                    Quý khách hàng vui lòng kiểm tra thường xuyên để cập nhật
                    những thay đổi của chúng tôi.
                </p>
                <p>
                    <strong>2. Hướng dẫn sử dụng website</strong>
                </p>
                <p>
                    Khi vào web của chúng tôi, khách hàng phải đảm bảo đủ 18
                    tuổi, hoặc truy cập dưới sự giám sát của cha mẹ hay người
                    giám hộ hợp pháp. Khách hàng đảm bảo có đầy đủ hành vi dân
                    sự để thực hiện các giao dịch mua bán hàng hóa theo quy định
                    hiện hành của pháp luật Việt Nam.
                </p>
                <p>
                    {" "}
                    <strong>3. Các dịch vụ của website</strong>
                </p>
                <p>Website của chúng tôi cung cấp các sản phẩm bao gồm: </p>
                <p>
                    + Các khóa học trực tuyến, trực tiếp
                    <br /> + Các chương trình trải nghiệm, trại hè <br />+ Các
                    dịch vụ giáo dục, đào tạo <br />+ Các sản phẩm ngoại khóa
                </p>
            </div>
        </div>
    );
}
