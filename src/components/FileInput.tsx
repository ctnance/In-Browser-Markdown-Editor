import { FC, useState, useEffect, useContext } from "react";
import { MarkdownContext } from "../MarkdownContext";
import IconDocument from "../assets/icon-document.svg";

const FileInput: FC = () => {
  // TODO: Use the "active" note rather than the first note at index 0
  const [fileName, setFileName] = useState<string>("untitled.md");
  const { markdownNotes, activeNoteId } = useContext(MarkdownContext);

  useEffect(() => {
    setFileName(markdownNotes[activeNoteId].name);
  }, [activeNoteId]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFileName(e.target.value);
  }

  return (
    <div className="file-input">
      <img className="file-input--icon" src={IconDocument} alt="document icon" />
      <input className="file-input--input" type="text" value={fileName} onChange={handleChange} />
    </div>
  )
}

export default FileInput;