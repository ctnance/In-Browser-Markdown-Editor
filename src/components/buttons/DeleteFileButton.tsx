import { FC } from "react";
import DeleteNoteModal from "../DeleteNoteModal";
import { useToggler } from "../../hooks";

import IconDelete from "../../assets/icon-delete.svg";

const DeleteFileButton: FC = () => {
  const [isModalActive, toggle] = useToggler(false);

  return (
    <>
      {isModalActive && <DeleteNoteModal toggleSelf={toggle} />}
      <button className="btn delete-file-btn" onClick={toggle}><img className="delete-file-btn--icon" src={IconDelete} alt="button icon" /></button>
    </>
  )
}

export default DeleteFileButton;