import { PropTypes } from "react";
import FileIcon from "./FileIcon";

export const FileName = ({ file })=> {
    return (
        <>
            <FileIcon file={file} />
            <td className="file-name" > {file.name} </td>
        </>
    );
}

FileName.propTypes={
    file: PropTypes.object.isRequired
};