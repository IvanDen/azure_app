import React, {useEffect, useState} from 'react';
import {getTableHistory, getTableInstances} from "../../API/APImethods";
import {ITableInstances} from "../../models/TableInstancesModel";
import {Table} from "antd";

interface IMainTableProps {
}

interface IInstancesColumns {
    title: string,
    dataIndex: string,
    key: string
}

interface IInstancesValue extends ITableInstances {
    key: string,
}

const MainTable: React.FC<IMainTableProps> = (props): JSX.Element => {
    const [stateInstances, setInstateInstances] = useState<ITableInstances[]>([]);
    useEffect(() => {
        const result = getTableInstances();
        result.then(data => setInstateInstances(data))
    }, [])

    const getColumns = (): IInstancesColumns[] => {
        if (!stateInstances) return [];
        const keysArr = Object.keys(stateInstances[0]);

        const result: IInstancesColumns[] = keysArr?.map((key) => {
            return {
                title: key,
                dataIndex: key,
                key: key,
            }
        })
        return result ?? [];
    }

    const getTablesData = (): IInstancesValue[] => {
        if (!stateInstances) return [];
        const result = stateInstances?.map((row) => {
            return {...row, key: row.RowKey }
        })
        return result ?? [];
    }

    return (
        <div>
            <Table dataSource={getTablesData()} columns={getColumns()} />;
        </div>
    );
};

MainTable.displayName = "MainTable";
export default MainTable;