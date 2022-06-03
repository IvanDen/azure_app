import {AzureNamedKeyCredential, AzureSASCredential, TableServiceClient} from "@azure/data-tables";
import {AZURE_STORAGE_CONNECTION_STRING} from "../consts";
import {queryStringTableInstances, URLTableInstances} from "./URLs";
const account = "datafortests2";
const sas = "ku19GOIwMuzlDmAMByM2NjxlteYK0OhSQ5E5iksENzlNiDagLGExKdAugAo8ws8xbkUOffcdUKh4+ASts3m+sA==";
export let serviceClient: TableServiceClient;
try {
    // serviceClient = new TableServiceClient(
    //     `https://${account}.table.core.windows.net`,
    //     new AzureSASCredential(URLTableInstances+queryStringTableInstances))
    // console.log('serviceClient === ', serviceClient);

} catch (err) {
    throw Error("No Azure Storage Connection");
}


async function main() {
    console.log('Azure Blob storage v12 - JavaScript quickstart sample');
    // console.log("process === ", process)


    if (!AZURE_STORAGE_CONNECTION_STRING) {
        throw Error("Azure Storage Connection string not found");
    }
    try {
        return serviceClient
    } catch (err) {
        throw Error("No Azure Storage Connection");
    }

}



