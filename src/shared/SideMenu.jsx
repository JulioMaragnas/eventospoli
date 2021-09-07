import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { ApartmentOutlined, UserOutlined } from "@ant-design/icons";

const { SubMenu, Item } = Menu;

const SideMenu = () => {
  return (
    <Menu mode="inline">
      <SubMenu key="event" icon={<ApartmentOutlined />} title="Eventos">
        <Item key="getEvent">
          <Link to="/getEvents"> Consultar </Link>
        </Item>
        <Item key="registerEvent">
            <Link to="/newEvent"> Registrar nuevo </Link>
        </Item>
      </SubMenu>
      <SubMenu key="atendees" icon={<UserOutlined />} title="Asistentes">
        <Item key="registerAtendee">
            <Link to="/registerAtendees"> Registrar asistentes </Link>
        </Item>
      </SubMenu>
    </Menu>
  );
};

export default SideMenu;
