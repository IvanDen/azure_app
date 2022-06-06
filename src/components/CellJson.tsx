import React from 'react';
import ReactJson from "react-json-view";
import {parseJsonToObj} from "./helpers/helpers";

interface ICellJsonProps {
    value?: string;
}

const CellJson: React.FC<ICellJsonProps> = ({value}): JSX.Element => {
    if (!value) return <></>

    return (
        <>
            {
                value?.length < 50
                    ? <span>{value}</span>
                    : <ReactJson src={parseJsonToObj(value)} collapsed={true}/>
            }
        </>
    )
}
CellJson.displayName = "CellJson";

export default CellJson;