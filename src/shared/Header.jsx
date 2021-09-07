import React from 'react'
import { Menu } from 'antd';
import { SlackSquareOutlined } from '@ant-design/icons'

const Header = ()=>(
    <Menu>
        <Menu.Item key="Main" icon={<SlackSquareOutlined />} />
    </Menu>
);
export default Header;