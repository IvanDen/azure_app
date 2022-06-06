import React, {useEffect, useState} from "react";
import "antd/dist/antd.min.css";
import "./App.css";

import MainTable from "./components/MainTable/MainTable";
import {Layout, Menu} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import {ItemType} from "antd/es/menu/hooks/useItems";
import {Link, Route, Routes, useLocation} from "react-router-dom";
import FileViewer from "./components/FileViewer/FileViewer";

const items: ItemType[] = [
    {
        key: "/",
        label: <Link to="/">Instances Table</Link>,
    },
    {
        key: "file",
        label: <Link to="/file">Load File</Link>,
    },
];

function App() {
    const location = useLocation();
    console.log("location.pathname",  location.pathname)


    return (
        <Layout>
            <Header className="header">
                <Menu
                    activeKey={location.pathname}
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['/']}
                    items={items}
                />
            </Header>
            <Layout>
                <Content
                    className="site-layout-background"
                    style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
                    >
                    <Routes>
                        <Route path='/' element={<MainTable />} />
                        <Route path='file' element={<FileViewer />} />
                    </Routes>
                </Content>
            </Layout>
        </Layout>


    );
}

export default App;
