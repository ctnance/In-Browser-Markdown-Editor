import { FC } from "react";
import IconDelete from "../../assets/icon-delete.svg";

const DeleteFileButton: FC = () => {
  return (
    <button className="btn delete-file-btn"><img className="delete-file-btn--icon" src={IconDelete} alt="button icon" /></button>
  )
}

export default DeleteFileButton;