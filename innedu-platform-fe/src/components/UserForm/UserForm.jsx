import "./UserForm.css";
import { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

import { DatePicker } from "antd";
import dayjs from "dayjs";

import { useApp } from "../../hooks/useApp";
import loginImage from "../../assets/img/login.png";

export default function UserForm() {
    const { theme } = useApp();

    const [isLogin, setIsLogin] = useState(true);

    const [loginForm, setLoginForm] = useState({
        username: "",
        password: "",
    });

    const [registerForm, setRegisterForm] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        address: "",
        birthday: "",
        gender: "",
        inviteCode: "",
    });

    useEffect(() => {
        // Get the url hash
        const hash = window.location.hash;
        // Check if the hash is equal to #register
        if (hash === "#register") {
            // Set the isLogin state to false
            setIsLogin(false);
            window.location.hash = "register";
        } else {
            // Set the isLogin state to true
            setIsLogin(true);
            window.location.hash = "#login";
        }
    }, []);

    const genders = [
        { name: "Nam", code: "M" },
        { name: "Nữ", code: "F" },
        { name: "Khác", code: "O" },
    ];

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(loginForm);
        setLoginForm({
            username: "",
            password: "",
        });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(registerForm);
        setRegisterForm({
            name: "",
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
            address: "",
            birthday: "",
            gender: "",
            inviteCode: "",
        });
    };

    return (
        <div className="auth-form">
            <div className="wrapper">
                <div className="card">
                    <div className="tools">
                        <div className="circle">
                            <span className="red box"></span>
                        </div>
                        <div className="circle">
                            <span className="yellow box"></span>
                        </div>
                        <div className="circle">
                            <span className="green box"></span>
                        </div>
                    </div>
                    <div className="content">
                        <form
                            className="user-form"
                            style={{
                                visibility: isLogin ? "visible" : "hidden",
                            }}
                            onSubmit={handleLogin}
                        >
                            <h2>Đăng nhập</h2>
                            <div className="login-form form-grid">
                                <FloatLabel>
                                    <InputText
                                        required
                                        id="username"
                                        type="text"
                                        value={loginForm.username}
                                        onChange={(e) =>
                                            setLoginForm({
                                                ...loginForm,
                                                username: e.target.value,
                                            })
                                        }
                                    />
                                    <label htmlFor="username">
                                        Tên người dùng
                                    </label>
                                </FloatLabel>
                                <FloatLabel>
                                    <InputText
                                        required
                                        id="password"
                                        type="password"
                                        value={loginForm.password}
                                        onChange={(e) =>
                                            setLoginForm({
                                                ...loginForm,
                                                password: e.target.value,
                                            })
                                        }
                                    />
                                    <label htmlFor="password">Mật khẩu</label>
                                </FloatLabel>
                                <button type="submit">Đăng nhập</button>
                            </div>
                            <div className="register-link">
                                <span>Chưa có tài khoản?</span>
                                <button
                                    onClick={() => {
                                        setIsLogin(false);
                                        window.location.hash = "register";
                                    }}
                                    type="button"
                                >
                                    Đăng ký tài khoản
                                </button>
                            </div>
                            <div className="forgot-password">
                                <button type="button">Quên mật khẩu</button>
                            </div>
                            <div className="home-link">
                                <NavLink className="btn-shine" to="/">
                                    <span>Quay về trang chủ</span>
                                </NavLink>
                            </div>
                        </form>
                        <form
                            className="user-form"
                            style={{
                                visibility: isLogin ? "hidden" : "visible",
                            }}
                            onSubmit={handleRegister}
                        >
                            <h2>Đăng ký tài khoản</h2>
                            <div className="register-form form-grid">
                                <FloatLabel>
                                    <InputText
                                        required
                                        id="name"
                                        type="text"
                                        value={registerForm.name}
                                        onChange={(e) =>
                                            setRegisterForm({
                                                ...registerForm,
                                                name: e.target.value,
                                            })
                                        }
                                    />
                                    <label htmlFor="name">Họ và tên</label>
                                </FloatLabel>
                                <FloatLabel>
                                    <InputText
                                        required
                                        id="email"
                                        type="email"
                                        value={registerForm.email}
                                        onChange={(e) =>
                                            setRegisterForm({
                                                ...registerForm,
                                                email: e.target.value,
                                            })
                                        }
                                    />
                                    <label htmlFor="email">Email</label>
                                </FloatLabel>
                                <FloatLabel>
                                    <InputText
                                        required
                                        id="username"
                                        type="text"
                                        value={registerForm.username}
                                        onChange={(e) =>
                                            setRegisterForm({
                                                ...registerForm,
                                                username: e.target.value,
                                            })
                                        }
                                    />
                                    <label htmlFor="username">
                                        Tên người dùng
                                    </label>
                                </FloatLabel>
                                <FloatLabel>
                                    <InputText
                                        required
                                        id="password"
                                        type="password"
                                        value={registerForm.password}
                                        onChange={(e) =>
                                            setRegisterForm({
                                                ...registerForm,
                                                password: e.target.value,
                                            })
                                        }
                                    />
                                    <label htmlFor="password">Mật khẩu</label>
                                </FloatLabel>
                                <FloatLabel>
                                    <InputText
                                        required
                                        id="confirm-password"
                                        type="password"
                                        value={registerForm.confirmPassword}
                                        onChange={(e) =>
                                            setRegisterForm({
                                                ...registerForm,
                                                confirmPassword: e.target.value,
                                            })
                                        }
                                    />
                                    <label htmlFor="confirm-password">
                                        Nhập lại mật khẩu
                                    </label>
                                </FloatLabel>
                                <FloatLabel>
                                    <InputText
                                        required
                                        id="address"
                                        type="text"
                                        value={registerForm.address}
                                        onChange={(e) =>
                                            setRegisterForm({
                                                ...registerForm,
                                                address: e.target.value,
                                            })
                                        }
                                    />
                                    <label htmlFor="address">Địa chỉ</label>
                                </FloatLabel>
                                <DatePicker
                                    required
                                    style={{
                                        backgroundColor:
                                            theme === "dark"
                                                ? "var(--gray-900)!important"
                                                : "#fff",
                                        color:
                                            theme === "dark"
                                                ? "#fff!important"
                                                : "var(--gray-500)!important",
                                    }}
                                    placeholder="Ngày sinh"
                                    size="large"
                                    className="w-full"
                                    value={
                                        registerForm.birthday
                                            ? dayjs(registerForm.birthday)
                                            : null
                                    }
                                    onChange={(date, dateString) =>
                                        setRegisterForm({
                                            ...registerForm,
                                            birthday: dateString,
                                        })
                                    }
                                />
                                <FloatLabel>
                                    <Dropdown
                                        inputId="gender"
                                        options={genders}
                                        optionLabel="name"
                                        className="w-full"
                                        value={registerForm.gender}
                                        onChange={(e) =>
                                            setRegisterForm({
                                                ...registerForm,
                                                gender: e.value,
                                            })
                                        }
                                    />
                                    <label htmlFor="gender">Giới tính</label>
                                </FloatLabel>
                                <FloatLabel>
                                    <InputText
                                        required
                                        id="invite-code"
                                        type="text"
                                        className="w-full"
                                        value={registerForm.inviteCode}
                                        onChange={(e) =>
                                            setRegisterForm({
                                                ...registerForm,
                                                inviteCode: e.target.value,
                                            })
                                        }
                                    />
                                    <label htmlFor="invite-code">
                                        Mã giới thiệu
                                    </label>
                                </FloatLabel>
                            </div>
                            <button type="submit">Register</button>
                            <div className="login-link">
                                <span>Đã có tài khoản?</span>
                                <button
                                    onClick={() => {
                                        setIsLogin(true);
                                        window.location.hash = "#login";
                                    }}
                                    type="button"
                                >
                                    Đăng nhập
                                </button>
                            </div>
                            <div className="home-link">
                                <NavLink className="btn-shine" to="/">
                                    <span>Quay về trang chủ</span>
                                </NavLink>
                            </div>
                        </form>
                        <motion.div
                            style={{
                                backgroundImage: `url(${loginImage})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                            className="slider"
                            initial={{ x: isLogin ? "-100%" : "-50%" }}
                            animate={{ x: isLogin ? "-5%" : "-100%" }}
                            transition={{ duration: 0.4 }}
                        ></motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
