import axios from "axios";
import {
    BASE_TABLE_URL,
    newURLForTablesInstances,
    URLTableHistory,
} from "../StorageBlob/URLsConsts";
import {IHistoryTable, ITableInstances} from "../models/TableModel";

// export const azureServiceClient = main();

export const baseInstance = axios.create({
    baseURL: BASE_TABLE_URL,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export async function getAsyncData<T>(URL: string): Promise<T> {
    try {
        const asyncResult = await baseInstance.get(URL);
        return asyncResult.data.value;
    }
    catch (error) {
        console.log(error);
        throw new Error("The request ended with an error");
    }
}

export const getTableInstances = async (): Promise<ITableInstances[]> =>  {
    const tableInstances = await getAsyncData<ITableInstances[]>(newURLForTablesInstances);
    return tableInstances;
}

export const getTableHistory= async (): Promise<IHistoryTable[]> =>  {
    const tableHistory = await getAsyncData<IHistoryTable[]>(URLTableHistory);
    return tableHistory;
}
