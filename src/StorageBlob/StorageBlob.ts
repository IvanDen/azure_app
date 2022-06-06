import { TableServiceClient} from "@azure/data-tables";
import {SAS} from "./URLsConsts";


export function main() {
    console.log('Azure Blob storage v12 - JavaScript quickstart sample');
    try {
        const serviceClient = new TableServiceClient(SAS)
        return serviceClient;
    } catch (err) {
        throw Error("No Azure Storage Connection");
    }
}




