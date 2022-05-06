import { FC, useContext } from "react";
import { MarkdownContext } from "../MarkdownContext";
import { NewDocumentButton, ThemeButton } from "./buttons";
import { MarkdownNote } from "./";

import Logo from "../assets/logo.svg";

const Menu: FC = () => {
  const { markdownNotes } = useContext(MarkdownContext);

  const noteEntries = markdownNotes.map(note => (
    <MarkdownNote key={note.id} creationDate={note.createdAt} filename={note.name} />
  ))

  return (
    <div className="menu">
      <img className="menu--title-icon" src={Logo} alt="menu icon" />
      <p className="menu--document-text">My Documents</p>
      <NewDocumentButton />
      <div className="menu--markdown-notes">
        {noteEntries}
      </div>
      <ThemeButton />
    </div>
  )
}

export default Menu;