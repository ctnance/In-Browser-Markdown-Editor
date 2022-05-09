import { FC, useContext } from "react";
import { MarkdownContext } from "../../MarkdownContext";

const NewDocumentButton: FC = () => {
  const { markdownNotes, createNewNote } = useContext(MarkdownContext);

  function handleClick() {
    createNewNote(markdownNotes.length);
  }

  return (
    <button className="btn new-document-btn" onClick={handleClick}>+ New Document</button>
  )
}

export default NewDocumentButton;