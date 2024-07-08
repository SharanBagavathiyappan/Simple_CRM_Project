import React from "react";
import { Space, Table, Tag, Avatar,Dropdown,message ,Button} from "antd";
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import "./table.css";
// import {BarDropdownBox, TabDropdownBox} from "../dropdown/barDropdown";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
// import { Button, Dropdown, message, Space, Tooltip } from 'antd';
import crystal from "./crystal.avif";
import vecteez from "./crystalball.jpg";
import { Layout } from "antd";
const { Content } = Layout;
const columns = [
  {
    title: "Product Name",
    key: "product",
    dataIndex: "products",
    render: (products, record) => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Avatar
          src={record.image}
          style={{ marginRight: 8, width: 100, height: 60, borderRadius: 8 }}
        />
        <div className="tabContent">
          <div className="tabSub">
            <h3>{products[0]}</h3>
          </div>
          <div>{products[1]}</div>
        </div>
      </div>
    ),
  },
  {
    title: "Stock",
    key: "stock",
    dataIndex: "stock",
  },
  {
    title: "Price",
    key: "Price",
    dataIndex: "price",
  },
  {
    title: "Total sales",
    key: "total sales",
    dataIndex: "totalSales",
  },
];
const data = [
  {
    key: "1",
    name: "hiii",
    stock: "32 in stock",
    price: "$49.99",
    totalSales: 20,
    products: ["Abstract", "Lorem ipsum dolor sit amet."],
    image: crystal,
  },
  {
    key: "2",
    name: "wel",
    stock: "32 in stock",
    price: "$49.99",
    totalSales: 20,
    products: ["Sarphens Illustration", "Lorem ipsum dolor sit amet."],
    image: vecteez,
  },
];
const handleButtonClick = (e) => {
    message.info('Click on left button.');
    console.log('click left button', e);
  };
  const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };
  const items = [
    {
      label: '1st menu item',
      key: '1',
      icon: <UserOutlined />,
    },
    {
      label: '2nd menu item',
      key: '2',
      icon: <UserOutlined />,
    },
    {
      label: '3rd menu item',
      key: '3',
      icon: <UserOutlined />,
      danger: true,
    },
    {
      label: '4rd menu item',
      key: '4',
      icon: <UserOutlined />,
      danger: true,
      disabled: true,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
const Tables = () => {
  return (
    <>
      <div className="tabOut">
        <span className="pro">Product Sell</span>
        <div>
          <Input
            size="large"
            placeholder="Search"
            prefix={<SearchOutlined />}
            className="inp"
          />
          {/* <TabDropdownBox/> */}
          <Dropdown menu={menuProps} className="border-0 ">
      <Button >
        <Space>
          Last 30 Days
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
        
        </div>
      </div >
      <Table 
        columns={columns}
        dataSource={data}
        style={{ textAlign: "center" }}
        pagination={false}
      />
    </>
  );
};
export default Tables;
