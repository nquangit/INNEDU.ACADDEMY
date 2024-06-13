import { useState, useEffect, useCallback } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useApp } from "../../hooks/useApp";

import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Image } from "primereact/image";
import { Menu } from "primereact/menu";
import { Badge } from "primereact/badge";
import { Popover } from "antd";
import { Button } from "primereact/button";

import logo from "/logo.png";

export default function Header() {
    const { theme, switchTheme } = useApp();
    const [searchValue, setSearchValue] = useState("");
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(false);

    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const handleScroll = useCallback(() => {
        if (window.scrollY > lastScrollY) {
            // Scroll Down
            setShowHeader(false);
        } else {
            // Scroll Up`
            setShowHeader(true);
        }
        setLastScrollY(window.scrollY);
    }, [lastScrollY]);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY, handleScroll]);

    const itemRenderer = (item) => (
        <div className="p-menuitem-content">
            <NavLink className="flex align-items-center p-menuitem-link" to={item.link}>
                <span className={item.icon} />
                <span className="mx-2">{item.label}</span>
                {item.badge && <Badge className="ml-auto" value={item.badge} />}
                {item.shortcut && (
                    <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
                        {item.shortcut}
                    </span>
                )}
            </NavLink>
        </div>
    );
    let items = [
        {
            template: () => {
                return (
                    <span className="inline-flex align-items-center gap-1 px-2 py-2">
                        <span className="font-medium text-xl font-semibold">
                            inn<span className="text-primary">edu</span>
                        </span>
                    </span>
                );
            },
        },
        {
            separator: true,
        },
        {
            label: "Profile",
            items: [
                {
                    label: "Login",
                    icon: "pi pi-sign-in",
                    template: itemRenderer,
                    link: "/auth#login",
                },
                {
                    label: "Register",
                    icon: "pi pi-user-plus",
                    template: itemRenderer,
                    link: "/auth#register",
                },
            ],
        },
    ];

    return (
        <header className={`header ${showHeader ? "show" : "hide"}`}>
            <div className="header-nav">
                <NavLink className="header-logo" to="/">
                    <Image src={logo} alt="logo" />
                </NavLink>
                <nav>
                    <ul>
                        <button
                            className="hamburger hamburger--collapse"
                            type="button"
                        >
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>

                        <li className="nav-item">
                            <NavLink to="/courses">Course</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="user-nav">
                <div className="search-bar">
                    {!showSearchBar && (
                        <Button
                            size="small"
                            onMouseEnter={() => setShowSearchBar(true)}
                        >
                            <span
                                style={{ fontSize: "1.2rem", color: "#fff" }}
                                className="pi pi-search"
                            ></span>
                        </Button>
                    )}
                    {showSearchBar && (
                        <IconField
                            iconPosition="left"
                            onMouseEnter={() => setShowSearchBar(true)}
                            onMouseLeave={() => {
                                if (searchValue === "" && !isSearchFocused)
                                    setShowSearchBar(false);
                            }}
                        >
                            <InputIcon className="pi pi-search"> </InputIcon>
                            <InputText
                                style={{
                                    borderRadius: "50px",
                                }}
                                v-model="value1"
                                className="p-inputtext-sm"
                                placeholder="Search"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                onFocus={() => setIsSearchFocused(true)}
                                onBlur={() => {
                                    setIsSearchFocused(false);
                                    if (searchValue === "")
                                        setShowSearchBar(false);
                                }}
                            />
                        </IconField>
                    )}
                </div>
                <div className="cart">
                    <lord-icon
                        src="https://cdn.lordicon.com/evyuuwna.json"
                        trigger="hover"
                        colors="primary:#16c79e"
                        style={{
                            marginRight: "10px",
                        }}
                    ></lord-icon>
                </div>
                <button
                    className="theme-switcher"
                    onClick={() => switchTheme()}
                    style={{
                        color:
                            theme === "dark"
                                ? "var(--surface-900)"
                                : "var(--blue-400)",
                    }}
                >
                    <span
                        style={{
                            fontSize: "1.3rem",
                        }}
                        className={`pr-1 pi pi-${
                            theme === "dark" ? "sun" : "moon"
                        }`}
                    ></span>
                </button>
                <Popover
                    content={
                        <Menu model={items} className="w-full md:w-14rem" />
                    }
                    trigger="click"
                    style={{
                        padding: "0",
                    }}
                >
                    <button className="user-profile">
                        <lord-icon
                            src="https://cdn.lordicon.com/kthelypq.json"
                            trigger="hover"
                            colors="primary:#22c55e"
                        ></lord-icon>
                    </button>
                </Popover>
            </div>
        </header>
    );
}
