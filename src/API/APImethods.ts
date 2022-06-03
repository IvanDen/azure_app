import axios from "axios";
import {BASE_URL, URLTableHistory, URLTableInstances} from "../StorageBlob/URLs";
import {ITableInstances} from "../models/TableInstancesModel";

export const baseInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export async function getAsyncData<T>(URL: string): Promise<T> {
    try {
        const asyncResult = await baseInstance.get(URL)
        return asyncResult.data.value
    }
    catch (error) {
        console.log(error);
        throw new Error("The request ended with an error")
    }
}

export const getTableInstances = async (): Promise<ITableInstances[]> =>  {
    const tableInstances = await getAsyncData<ITableInstances[]>(URLTableInstances);
    return tableInstances;
}

export const getTableHistory= async (): Promise<ITableInstances[]> =>  {
    const tableHistory = await getAsyncData<ITableInstances[]>(URLTableHistory);

    return tableHistory;
}
