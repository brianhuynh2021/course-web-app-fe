import React from "react";
import { Layout, Menu, Input } from "antd";
import logo from "../../assets/logo.png";

const { Header } = Layout;
const { Search } = Input;

const menuItems = [
  { key: "home", label: "Home" },
  { key: "courses", label: "Courses" },
  { key: "about", label: "About Me" },
  { key: "contact", label: "Contact" },
  { key: "cart", label: "Cart" },
  { key: "login", label: "Login" },
  { key: "register", label: "Register" },
];

const AppHeader: React.FC = () => {
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        height: 64,
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        borderBottom: "1px solid #f0f0f0",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginRight: 20 }}>
        <span style={{ color: "#595959", fontSize: 18, fontWeight: 500 }}>
            Lập trình với Brian Huynh
        </span>
        <img
          src={logo}
          alt="Logo"
          style={{
            height: 30,
            cursor: "pointer",
            borderRadius: 4,
            border: "1px solid #e8e8e8",
            marginRight: 40
          }}
        />
      </div>

      <div style={{ width: 400, padding: "8px 0", marginTop: 31.5}}>
        <Search placeholder="Bạn muốn học gì?" enterButton />
      </div>

      <Menu
        theme="light"
        mode="horizontal"
        items={menuItems}
        style={{ minWidth: 0, marginLeft: "auto", flexShrink: 0 }}
      />
    </Header>
  );
};

export default AppHeader;