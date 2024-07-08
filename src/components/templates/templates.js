// import React from "react";
// import "./templates.css"
// function Templates() {
//   return (
//     <>
//       <div className="mainContainer">
//         <div className="leftContainer">

//         </div>
//         <div className="rightContainer">

//         </div>
//       </div>
//     </>
//   );
// }

// export default Templates;

import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import { Dropdown, Table, Input } from "antd";
import "primeicons/primeicons.css";
import DoughnutChartDemo from "../charts/piechart";
import StackedBarDemo from "../charts/barChart";
import "./templates.css";
import Tables from "../table/table";

import {
  SettingOutlined,
  ProfileOutlined,
  WalletOutlined,
  DollarOutlined,
  KeyOutlined,
  FileOutlined,
  MessageOutlined,
  DashboardOutlined,
  BankOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
// import Tables from "../table/table";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    label,
    key,
    icon,
    children,
  };
}
const items = [
  getItem("Dashboard", "0", <DashboardOutlined style={{ fontSize: 20 }} />),
  getItem("Product", "2", <KeyOutlined />, [
    getItem("Tom", "2"),
    getItem("Bill", "3"),
    getItem("Alex", "4"),
  ]),
  getItem("Customers", "sub1", <UserOutlined />, [
    getItem("Tom", "5"),
    getItem("Bill", "6"),
    getItem("Alex", "7"),
  ]),
  getItem("Income", "sub2", <BankOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Promote", "8", <FileOutlined />, [
    getItem("Tom", "9"),
    getItem("Bill", "10"),
    getItem("Alex", "11"),
  ]),
  getItem("Help", "12", <MessageOutlined />, [
    getItem("Tom", "13"),
    getItem("Bill", "14"),
    getItem("Alex", "15"),
  ]),
];

const dropDownItems = [
  {
    label: "1st menu item",
    key: "0",
  },
  {
    label: "2nd menu item",
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];
const Templates = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        breakpoint="lg"
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        // className="fixed top-0"
      >
        <Header
          style={{
            padding: 0,
            // background: colorBgContainer,
          }}
        >
          <div className="flex justify-evenly items-center text-[30px]">
            <SettingOutlined className="text-slate-100 text-[40px] " />
            <span className={`text-white ${collapsed && "hidden"}`}>
              Dashboard
            </span>
          </div>
        </Header>
        <div className="demo-logo-vertical" />
        {/* <Menu theme="dark" defaultSelectedKeys={['0']} mode="vertical" items={items}  */}
        {/* style={{fontSize:20,marginTop:50,}}/>/ */}
        <Menu
          theme="dark"
          mode="vertical"
          defaultSelectedKeys={["1"]}
          items={items}
          className="mt-[50px] text-left"
        />
       
        <div className={` ${collapsed && "w-[70px] ml-[5px] duration-[0.2s]"} last`}>
                <div>
                    <img src='men1.jpg' alt="image" className={` ${collapsed && "hidden"}`}/>
                </div>
                <div>
                    <p className={` ${collapsed && "hidden"}`}>Evano</p>
                    <small className={`small ${collapsed && "hidden"} text-slate-300`} >Project Manager</small>
                </div>
                <div className='angle-down'><i className='pi pi-angle-down'></i></div>
            </div>
        
      </Sider>
      <Layout>
        {/* <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            
          }}
        /> */}

        <div className=" flex items-center flex-auto w-full bg-white p-[25px] mt-[20px] justify-between h-16 roundede-[15px] sticky top-0  z-10 max-sm:justify-evenly ">
          <div>
            <span className="text-[22px] font-normal ml-[50px] max-sm:text-[15px]">
              Hello Shahrukh &#128075;,
            </span>
          </div>
          <div className="text-[18px] ml-4 ">
            
            <Input
              size="large"
              placeholder="Search"
              prefix={<SearchOutlined />}
              className="max-sm:text-[15px] max-sm:w-[150px]"
            />
          </div>
        </div>
        

        <Content className="p-9 flex flex-col ">
        
          <div className="w-full">
            <div className="subContainer">
              <div
                className="w-[350px] h-[200px] rounded-[15px] flex  bg-white items-center justify-center p-[15px] flex-1
              max-sm:w-[150px] max-sm:h-[300px] max-sm:flex max-sm:flex-col"
              >
                <div className="w-[150px] h-[150px] rounded-[50%] flex items-center justify-evenly text-[80px] text-green-500 bg-green-200">
                  <DollarOutlined />
                </div>
                <div className="content">
                  <span id="earning">Earning</span>
                  <br />
                  <span id="rate">$198K</span>
                  <br />
                  <span></span>
                  <span>
                    <i class="fa-solid fa-arrow-up"></i>
                    <span id="green">37.8%</span>
                  </span>
                  <span>this month</span>
                </div>
              </div>

              <div
                className="w-[350px] h-[200px] rounded-[15px] flex  bg-white items-center justify-center p-[15px] flex-1
              max-sm:w-[150px] max-sm:h-[300px] max-sm:flex max-sm:flex-col"
              >
                <div className="w-[150px] h-[150px] rounded-[50%] flex items-center justify-evenly text-[80px] text-violet-700 bg-violet-200">
                  <ProfileOutlined />
                </div>
                <div className="content">
                  <span id="earning">Orders</span>
                  <br />
                  <span id="rate">$2.4K</span>
                  <br />
                  <span>
                    <i class="fa-solid fa-arrow-down"></i>
                    <span id="red">2%</span>
                  </span>
                  <span>this month</span>
                </div>
              </div>

              <div
                className="w-[350px] h-[200px] rounded-[15px] flex  bg-white items-center justify-center p-[15px] flex-1
              max-sm:w-[150px] max-sm:h-[300px] max-sm:flex max-sm:flex-col"
              >
                <div className="w-[150px] h-[150px] rounded-[50%] flex items-center justify-evenly text-[80px] text-blue-700 bg-blue-200">
                  <WalletOutlined />
                </div>
                <div className="content">
                  <span id="earning">Balance</span>
                  <br />
                  <span id="rate">$2.4K</span>
                  <br />
                  <span>
                    <i class="fa-solid fa-arrow-down"></i>
                    <span id="red">2%</span>
                  </span>
                  <span>this month</span>
                </div>
              </div>

              <div
                className="w-[350px] h-[200px] rounded-[15px] flex  bg-white items-center justify-center p-[15px] flex-1
              max-sm:w-[150px] max-sm:h-[300px] max-sm:flex max-sm:flex-col"
              >
                <div className="w-[150px] h-[150px] rounded-[50%] flex items-center justify-evenly text-[80px] text-red-500 bg-pink-300">
                  <i class="fa-solid fa-bag-shopping"></i>
                </div>

                <div className="content">
                  <span id="earning">Total Sales</span>
                  <br />
                  <span id="rate">$198K</span>
                  <br />
                  <span>
                    <i class="fa-solid fa-arrow-up"></i>
                    <span id="green">11%</span>
                  </span>
                  <span>this Week</span>
                </div>
              </div>
            </div>

            <div className="Chart">
              <div className="flex flex-col justify-center w-[65%] p-[30px] bg-white rounded-[15px] max-xl:w-full ">
                <div className="barContent">
                  <div>
                    <span className="text-[18px] font-bold">Overview</span>
                    <p className="mt-2 text-slate-300">Monthly Earnings</p>
                  </div>
                  <div className="w-[120px] h-[35px] bg-slate-50 p-2">
                    <Dropdown
                      menu={{
                        items: dropDownItems,
                      }}
                      trigger={["click"]}
                    >
                      <a
                        onClick={(e) => e.preventDefault()}
                        className="mt-2 text-slate-500"
                      >
                        Quaterely
                        <DownOutlined className="ml-3" />
                      </a>
                    </Dropdown>
                  </div>
                </div>
                <div>
                  <StackedBarDemo />
                </div>
              </div>

              <div className="w-[30%] flex flex-col  bg-white justify-evenly  rounded-[15px] max-xl:w-full max-xl:mt-[30px]">
                <div className="flex flex-col items-start text-justify ">
                  <span className="text-[18px] font-bold ml-[20px]">
                    Customers
                  </span>
                  <p className="mt-2 text-slate-300 ml-[20px]">
                    Customers that buy products
                  </p>
                </div>
                <div className="flex items-center justify-center relative overflow-x-auto ">
                  <DoughnutChartDemo className="max-sm:w-[100px]" />
                  <div className="absolute w-[120px] h-150p rounded-[50%]">
                    <p className="text-[30px] font-bold">65%</p>
                    <p className="text-[18px] font-semibold">Total New </p>
                    <p className="text-[18px] font-semibold">Customer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto bg-white mt-8">
              <Tables />
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Templates;
