import {ColumnsType} from "antd/es/table";
import {IHistoryTable, ITableInstances} from "../../models/TableModel";

export const columnsTablesInstances: ColumnsType<ITableInstances>  = [
    {
        title: "PartitionKey",
        dataIndex: "PartitionKey",
        key: "PartitionKey",
    },
    {
        title: "Timestamp",
        dataIndex: "Timestamp",
        key: "Timestamp",
    },
    {
        title: "CreatedTime",
        dataIndex: "CreatedTime",
        key: "CreatedTime",
    },
    {
        title: "CompletedTime",
        dataIndex: "CompletedTime",
        key: "CompletedTime",
    },
    {
        title: "AmountOfTime",
        dataIndex: "AmountOfTime",
        key: "AmountOfTime",
    },
    {
        title: "CustomStatus",
        dataIndex: "CustomStatus",
        key: "CustomStatus",
    },
    {
        title: "Output",
        dataIndex: "Output",
        width: 200,
        ellipsis: true,
        key: "Output",

    },
    {
        title: "RuntimeStatus",
        dataIndex: "RuntimeStatus",
        key: "RuntimeStatus",
    },

];

export const expandedColumnsHistory: ColumnsType<IHistoryTable> = [
    {
        title: "Timestamp",
        dataIndex: "Timestamp",
        key: "Timestamp",
    },
    {
        title: "Input",
        dataIndex: "Input",
        key: "Input",
        ellipsis: true,
    },
    {
        title: "Details",
        dataIndex: "Details",
        key: "Details",
        ellipsis: true,
    },
    {
        title: "Reason",
        dataIndex: "Reason",
        key: "Reason",
        ellipsis: true,
    },
    {
        title: "Name",
        dataIndex: "Name",
        key: "Name",
    }
];