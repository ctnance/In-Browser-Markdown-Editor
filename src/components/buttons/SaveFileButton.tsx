import { FC, useContext } from "react";
import { MarkdownContext } from "../../MarkdownContext";
import IconSave from "../../assets/icon-save.svg";

const SaveFileButton: FC = () => {
  const { saveNotes } = useContext(MarkdownContext);
  return (
    <button className="btn save-file-btn"><img className="save-file-btn--icon" src={IconSave} alt="button icon" onClick={saveNotes} /></button>
  )
}

export default SaveFileButton;