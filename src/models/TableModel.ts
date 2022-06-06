export interface ITableInstances {
    CompletedTime: string,
    CreatedTime: string,
    CustomStatus: string,
    ExecutionId: string,
    Output: string,
    PartitionKey: string,
    RuntimeStatus: string,
    Timestamp: string,
    AmountOfTime: string
}

export interface IHistoryTable {
    Timestamp: string,
    Input: string,
    Details: string,
    Reason: string,
    Name: string,
    PartitionKey: string,
    RowKey: string,

}

