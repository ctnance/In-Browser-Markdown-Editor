import { FC, useState, useEffect, useContext } from "react";
import { MarkdownContext } from "../MarkdownContext";
import IconDocument from "../assets/icon-document.svg";

interface Props {
  isMenuActive: boolean,
  toggleMenu: () => void,
}

const FileInput: FC<Props> = ({ isMenuActive, toggleMenu }) => {
  // TODO: Use the "active" note rather than the first note at index 0
  const [fileName, setFileName] = useState<string>("untitled.md");
  const { markdownNotes, activeNoteId, updateNoteName } = useContext(MarkdownContext);

  useEffect(() => {
    markdownNotes.map(note => {
      if (note.id === activeNoteId) {
        setFileName(note.name);
      }
    });
  }, [activeNoteId]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setFileName(value);
    updateNoteName(value);
  }

  return (
    <div className="file-input" onClick={() => { isMenuActive && toggleMenu() }}>
      <img className="file-input--icon" src={IconDocument} alt="document icon" />
      <input className="file-input--input" type="text" value={fileName} onChange={handleChange} />
    </div>
  )
}

export default FileInput;