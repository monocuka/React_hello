import { FileName } from "./FileName";
import { PropTypes } from "react";

const FileListItem=({ file }) => (
    <tr className="file-list-item" >
        <FileName file={file} />
    </tr>
);

FileListItem.propTypes={
    file: PropTypes.object.isRequired
};