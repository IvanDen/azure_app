import React, {useEffect, useState} from 'react'
import {expandedColumnsHistory} from "./colums";
import {Table} from "antd";
import {getTableHistory} from "../../API/APImethods";
import {IHistoryTable} from "../../models/TableModel";

export interface IExpandedHistoryProps {
    RowKey?: string,
    partitionKey: string,
}

interface IHistoryTableColumnData extends IHistoryTable {
    key: string,
}

export const ExpandedRowHistory: React.FC<IExpandedHistoryProps> = ({RowKey, partitionKey}): JSX.Element => {
    const [historyData, setHistoryData] = useState<IHistoryTable[]>([]);

    useEffect(() => {
        const result = getTableHistory();
        result.then(data => setHistoryData(data));

    }, []);

    const getHistoryByPartitionKey = (historyArr: IHistoryTable[], partitionKey: string): IHistoryTableColumnData[] => {
        const result = historyArr.filter(row => row.PartitionKey === partitionKey)
            .sort((row, nextRow) => {
                if ((!row.RowKey && !nextRow.RowKey) || !row.RowKey) return -1
                if (!nextRow.RowKey) return 1
                if (row.RowKey > nextRow.RowKey) {
                    return 1;
                }
                if (row.RowKey < nextRow.RowKey) {
                    return -1;
                }
                return 0;
            });
        return result.map(row => {
            return {
                ...row,
                key: Math.random().toString(36).substring(2, 7)
            }
        });
    }

    return <Table
        columns={expandedColumnsHistory}
        dataSource={getHistoryByPartitionKey(historyData, partitionKey)}
        pagination={false}
    />
}