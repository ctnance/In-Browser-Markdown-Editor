import { FC, useContext } from "react";
import { MarkdownContext } from "../../MarkdownContext";

interface Props {
  toggleMenu: () => void,
}

const NewDocumentButton: FC<Props> = ({ toggleMenu }) => {
  const { markdownNotes, createNewNote } = useContext(MarkdownContext);

  function handleClick() {
    createNewNote(markdownNotes.length);
    toggleMenu();
  }

  return (
    <button className="btn new-document-btn" onClick={handleClick}>+ New Document</button>
  )
}

export default NewDocumentButton;