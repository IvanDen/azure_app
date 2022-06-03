import React, {useEffect, useState} from 'react';
import './App.css';
import 'antd/dist/antd.css';

import MainTable from "./components/MainTable/MainTable";


function App() {
    const [tableData, setTableData] = useState();


    return (
        <div className="App">
            <MainTable />
        </div>
    );
}

export default App;
