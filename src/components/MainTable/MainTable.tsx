import React, {useEffect, useState} from "react";
import {getTableInstances} from "../../API/APImethods";
import {ITableInstances} from "../../models/TableModel";
import {Table} from "antd";
import {getAmountOfTime} from "../helpers/helpers";
import {columnsTablesInstances} from "./colums";
import {ExpandedRowHistory} from "./ExpandedRowHistory";

interface IMainTableProps {
}

interface IInstancesValue extends ITableInstances {
    key: string,
}

const MainTable: React.FC<IMainTableProps> = (props): JSX.Element => {
    const [stateInstances, setInstateInstances] = useState<ITableInstances[]>([]);
    useEffect(() => {

        const result = getTableInstances();
        result.then(data => setInstateInstances(data))

    }, []);

    const getTablesData = (): IInstancesValue[] => {
        if (!stateInstances) return [];

        const result = stateInstances?.map((row) => {

            return {...row, key: row.ExecutionId, AmountOfTime: getAmountOfTime(row.CreatedTime, row.CompletedTime) }
        })
        return result ?? [];
    }

    return (
        <Table
            className="components-table-demo-nested"
            dataSource={getTablesData()}
            columns={columnsTablesInstances}
            expandable={
            {
                expandedRowRender: (record, index, indent, expanded) => {
                    return <ExpandedRowHistory partitionKey={record.PartitionKey} />
                }
            }}
            pagination={false}
        />
    );
};

MainTable.displayName = "MainTable";
export default MainTable;