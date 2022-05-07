import { FC, useContext } from "react";
import { MarkdownContext } from "../../MarkdownContext";

import IconDelete from "../../assets/icon-delete.svg";

const DeleteFileButton: FC = () => {
  const { deleteNote } = useContext(MarkdownContext);

  return (
    <button className="btn delete-file-btn" onClick={() => {/*TODO: deleteNote function here*/ }}><img className="delete-file-btn--icon" src={IconDelete} alt="button icon" /></button>
  )
}

export default DeleteFileButton;