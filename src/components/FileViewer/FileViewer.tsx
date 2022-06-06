import React, {useEffect, useState} from 'react';
import {getFile} from "../../API/APImethods";

import ReactJson from 'react-json-view'
import {parseJsonToObj} from "../helpers/helpers";



interface IFileViewerProps {
}

const FileViewer: React.FC<IFileViewerProps> = (props): JSX.Element => {
    const [jsonData, setJsonData] = useState("")
    useEffect(() => {

        const result = getFile();
        result.then(data => setJsonData(data))

    }, [jsonData]);
    const getFileObj = (): object => {
        const result = parseJsonToObj(jsonData) as {dealernacdb: any[]};
        return Array.isArray(result?.dealernacdb) ? result?.dealernacdb[0] : {file: "Not JSON"};
    }
    return (
        <div>
            <ReactJson src={getFileObj()} />
        </div>
    );
}


export default FileViewer;