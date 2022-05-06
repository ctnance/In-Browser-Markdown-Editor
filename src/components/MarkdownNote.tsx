import { FC } from "react";

import IconDocument from "../assets/icon-document.svg";

interface Props {
  creationDate: string,
  filename: string
}

const MarkdownNote: FC<Props> = ({ creationDate, filename }) => {
  const date = new Date(creationDate).toLocaleDateString("en-us", { day: "numeric", month: "short", year: "numeric" });

  return (
    <div className="markdown-note">
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