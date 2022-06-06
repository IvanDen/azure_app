import axios, {AxiosResponse, ResponseType} from "axios";
import {
    BASE_BLOB_URL,
    BASE_TABLE_URL,
    URLForBlobs,
    NewURLForTablesInstances,
    URLTableHistory,
} from "../StorageBlob/URLsConsts";
import {IHistoryTable, ITableInstances} from "../models/TableModel";

export async function getAsyncData<T=any>(
    baseURL: string,
    URL: string,
    responseType?: ResponseType
):  Promise<AxiosResponse<T, any>> {
    try {
        const asyncResult = await axios.get(
            baseURL + URL, {
                responseType: responseType ? responseType : "json", // important?
                timeout: 2000,
            }
        );
        return asyncResult;
    }
    catch (error) {
        console.log(error);
        throw new Error("The request ended with an error");
    }
}

export const getTableInstances = async (): Promise<ITableInstances[]> =>  {
    const tableInstances = await getAsyncData<{ value: ITableInstances[] }>(BASE_TABLE_URL, NewURLForTablesInstances);
    return tableInstances.data.value;
}

export const getTableHistory= async (): Promise<IHistoryTable[]> =>  {
    const tableHistory = await getAsyncData<{ value: IHistoryTable[]}>(BASE_TABLE_URL, URLTableHistory);
    return tableHistory.data.value;
}

export const getFile = async (): Promise<any> =>  {

    const file = await getAsyncData<Blob>(BASE_BLOB_URL, URLForBlobs, "blob");
    const text = await file.data.text();

    return text;
}