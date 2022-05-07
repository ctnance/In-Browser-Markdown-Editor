import { FC, useContext } from "react";
import { ThemeContext } from "../ThemeContext";

interface Props {
  isActive: boolean,
  toggleSelf: () => void
}

const DeleteNoteModal: FC<Props> = ({ isActive, toggleSelf }) => {
  const { isDarkTheme } = useContext(ThemeContext);

  function exitModal(e: React.MouseEvent<HTMLDivElement>) {
    e.currentTarget === e.target && toggleSelf();
  }

  return (
    <div className="delete-note-modal--container" onClick={exitModal}>
      <div className={`delete-note-modal ${isDarkTheme ? "dark" : "light"}`}>
        <h4 className="delete-note-modal--title">Delete this document?</h4>
        <p className="delete-note-modal--content">Are you sure you want to delete the `welcome.md` document and its contents? This action cannot be reversed.</p>
        <button className="btn delete-note-modal--btn" onClick={() => {/* TODO: Delete Note Here */ }}>Confirm & Delete</button>
      </div>
    </div>
  )
}

export default DeleteNoteModal;