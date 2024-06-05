import "./Footer.css";

import { NavLink } from "react-router-dom";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-nav">
                <div className="org-info">
                    <h1>
                        inn<span className="text-primary">edu</span>
                    </h1>
                    <p>CÔNG TY TNHH TƯ VẤN VÀ PHÁT TRIỂN GIÁO DỤC INNEDU</p>
                    <p>
                        Mã số thuế: 0311993505 do Sở Kế hoạch và Đầu tư Thành
                        phố Hồ Chí Minh cấp ngày 13/12/2017.
                    </p>
                    <p>
                        Địa chỉ: 26 Đường 37, KDC Tân Quy Đông, Phường Tân
                        Phong, Quận 7, Thành phố Hồ Chí Minh. Việt Nam
                    </p>
                    <p>Hotline: <a href="tel:+84 918 250 667">0918 250 667</a></p>
                    <p>
                        Email:{" "}
                        <a href="mailto:info@inn.edu.vn">info@inn.edu.vn</a>
                    </p>
                </div>
                <div className="customer-help">
                    <h3>Hỗ trợ khách hàng</h3>
                    <ul>
                        <li>
                            <NavLink to="/contact">Liên hệ</NavLink>
                        </li>
                        <li>
                            <NavLink to="/policy">Chính sách</NavLink>
                        </li>
                        <li>
                            <NavLink to="/termsOfService">
                                Điều khoản dịch vụ
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copy-right">
                <p>© {currentYear} innedu. All Rights Reserved.</p>
                {/* Social media contact */}
                <div className="social-media">
                    <a href="https://www.facebook.com/innedu" target="_blank">
                        <i className="pi pi-facebook"></i>
                    </a>
                    <a href="https://www.twitter.com/innedu" target="_blank">
                        <i className="pi pi-twitter"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}
