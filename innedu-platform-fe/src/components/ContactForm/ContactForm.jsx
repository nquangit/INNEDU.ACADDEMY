import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

import { DatePicker } from "antd";
import dayjs from "dayjs";

import { useState } from "react";
import { useApp } from "../../hooks/useApp";

import "./ContactForm.css";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        address: "",
        phone: "",
        dateOfBirth: "",
        company: "",
        position: "",
        message: "",
    });

    const { theme } = useApp();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            fullname: "",
            email: "",
            address: "",
            phone: "",
            dateOfBirth: "",
            company: "",
            position: "",
            message: "",
        });
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form card">
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
            <div className="form-grid">
                <FloatLabel>
                    <InputText
                        required
                        id="fullname"
                        type="text"
                        value={formData.fullname}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                fullname: e.target.value,
                            })
                        }
                    />
                    <label htmlFor="username">Họ và tên</label>
                </FloatLabel>
                <FloatLabel>
                    <InputText
                        required
                        id="email"
                        type="text"
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                email: e.target.value,
                            })
                        }
                    />
                    <label htmlFor="email">Email</label>
                </FloatLabel>
                <FloatLabel>
                    <InputText
                        required
                        id="phone"
                        type="text"
                        value={formData.phone}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                phone: e.target.value,
                            })
                        }
                    />
                    <label htmlFor="phone">Số điện thoại</label>
                </FloatLabel>
                <DatePicker
                    required
                    style={{
                        backgroundColor:
                            theme === "dark" ? "var(--gray-900)" : "#fff",
                        color:
                            theme === "dark"
                                ? "#fff!important"
                                : "var(--gray-500)!important",
                    }}
                    placeholder="Ngày sinh"
                    value={
                        formData.dateOfBirth
                            ? dayjs(formData.dateOfBirth)
                            : null
                    }
                    onChange={(date, dateString) =>
                        setFormData({
                            ...formData,
                            dateOfBirth: dateString,
                        })
                    }
                    size="large"
                />
                <FloatLabel>
                    <InputText
                        required
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                company: e.target.value,
                            })
                        }
                    />
                    <label htmlFor="company">Đơn vị</label>
                </FloatLabel>
                <FloatLabel>
                    <InputText
                        required
                        id="position"
                        type="text"
                        value={formData.position}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                position: e.target.value,
                            })
                        }
                    />
                    <label htmlFor="position">Chức vụ</label>
                </FloatLabel>
                <FloatLabel>
                    <InputTextarea
                        required
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                message: e.target.value,
                            })
                        }
                        rows={5}
                        cols={30}
                        autoResize
                    />
                    <label htmlFor="message">Tin nhắn</label>
                </FloatLabel>
            </div>
            <button type="submit" className="submit-button">
                <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                                fill="currentColor"
                                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                            ></path>
                        </svg>
                    </div>
                </div>
                <span>Send</span>
            </button>
        </form>
    );
}
