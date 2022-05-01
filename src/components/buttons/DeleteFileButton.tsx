import IconDelete from "../../assets/icon-delete.svg";

function DeleteFileButton() {
  return (
    <button className="btn delete-file-btn"><img src={IconDelete} alt="button icon" /></button>
  )
}

export default DeleteFileButton;