import { FC, useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { MarkdownContext } from "../MarkdownContext";

interface Props {
  isActive: boolean,
  toggleSelf: () => void
}

const DeleteNoteModal: FC<Props> = ({ isActive, toggleSelf }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  const { markdownNotes, activeNoteId } = useContext(MarkdownContext);

  const activeNote = markdownNotes.find(note => note.id === activeNoteId)

  function exitModal(e: React.MouseEvent<HTMLDivElement>) {
    e.currentTarget === e.target && toggleSelf();
  }

  return (
    <div className={`delete-note-modal--container ${isDarkTheme ? "dark" : "light"}`} onClick={exitModal}>
      <div className="delete-note-modal">
        <h4 className="delete-note-modal--title">Delete this document?</h4>
        <p className="delete-note-modal--content">Are you sure you want to delete the `{activeNote?.name}` document and its contents? This action cannot be reversed.</p>
        <button className="btn delete-note-modal--btn" onClick={() => {/* TODO: Delete Note Here */ }}>Confirm & Delete</button>
      </div>
    </div>
  )
}

export default DeleteNoteModal;