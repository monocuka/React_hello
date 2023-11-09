




export const FileList = ({files}) => (

    <table className="file-list">
        <tbody>
            {files.map(file => (
                <tr className="file-list-item" key={file.id}>
                    <td className="file-name">{file.name}</td>
                </tr>
            ))}
        </tbody>
    </table>
);


export default FileList;