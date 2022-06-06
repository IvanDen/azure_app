import React, {useEffect, useState} from "react";
import "antd/dist/antd.min.css";
import "./App.css";

import MainTable from "./components/MainTable/MainTable";
import {Layout, Menu} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import {ItemType} from "antd/es/menu/hooks/useItems";
import {Link, Route, Routes} from "react-router-dom";

const items: ItemType[] = [
    {
        key: "instances",
        label: <Link to="/instances">Instances Table</Link>,
    },
    {
        key: "file",
        label: <Link to="/file">Load File</Link>,
    },
];

function App() {
    return (
        <Layout>
            <Header className="header">
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['instances']}
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
                        <Route path='instances' element={<MainTable />} />
                        <Route path='file' element={<div>File Loader</div>} />
                    </Routes>
                </Content>
            </Layout>
        </Layout>


    );
}

export default App;
