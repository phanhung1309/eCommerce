import React, {useState} from "react";
import {Menu, MenuProps} from "antd";
import {UserAddOutlined, UserOutlined, AppstoreOutlined, SettingOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

const items: MenuProps["items"] = [
  {
    label: <Link to="/">Home</Link>,
    key: "home",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Username",
    key: "username",
    icon: <SettingOutlined />,
    children: [
      {
        label: "Option 1",
        key: "setting:1",
      },
      {
        label: "Option 2",
        key: "setting:2",
      },
    ],
  },
  {
    label: <Link to="/register">Register</Link>,
    key: "register",
    icon: <UserAddOutlined />,
    style: {marginLeft: "auto"},
  },
  {
    label: <Link to="/login">Login</Link>,
    key: "login",
    icon: <UserOutlined />,
  },
];

const Header: React.FC = () => {
  const [current, setCurrent] = useState<string>("home");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} mode="horizontal" selectedKeys={[current]} items={items} />;
};

export default Header;
