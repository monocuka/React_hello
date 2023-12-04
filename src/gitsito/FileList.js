import { FileListItem } from "./FileListItems";


const FileList = ({files}) => (

    <table className="file-list" >
        <tbody>
            {files.map(file => (
                /* ahora se usa FileListItem aquí */
                <FileListItem key={file.id} file={file} />
            ))}
        </tbody>
    </table>
);


export default FileList;