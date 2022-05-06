import { FC, useContext } from "react";
import { MarkdownContext } from "../MarkdownContext";

import IconDocument from "../assets/icon-document.svg";

interface Props {
  id: number,
  creationDate: string,
  filename: string
}

const MarkdownNote: FC<Props> = ({ id, creationDate, filename }) => {
  const { updateActiveNoteId } = useContext(MarkdownContext);
  const date = new Date(creationDate).toLocaleDateString("en-us", { day: "numeric", month: "short", year: "numeric" });

  return (
    <div className="markdown-note" onClick={() => updateActiveNoteId(id)}>
      <div className="markdown-note--icon-container">
        <img className="markdown-note--icon" src={IconDocument} alt="document icon" />
      </div>
      <div className="markdown-note--content">
        <p className="markdown-note--creation-date">{date}</p>
        <p className="markdown-note--filename">{filename}</p>
      </div>
    </div>
  )
}

export default MarkdownNote;