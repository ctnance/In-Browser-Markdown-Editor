import { FC, useContext } from "react";
import { MarkdownContext } from "../MarkdownContext";
import { NewDocumentButton, ThemeButton } from "./buttons";
import { MarkdownNote } from "./";

import Logo from "../assets/logo.svg";

interface Props {
  isActive: boolean,
  toggleSelf: () => void,
}

const Menu: FC<Props> = ({ isActive, toggleSelf }) => {
  const { markdownNotes } = useContext(MarkdownContext);

  const noteEntries = markdownNotes.map(note => (
    <MarkdownNote key={note.id} id={note.id} creationDate={note.createdAt} filename={note.name} toggleMenu={toggleSelf} />
  ))

  return (
    <div className="menu">
      <div className="menu--title-icon-wrapper">
        <img className="menu--title-icon" src={Logo} alt="menu title icon" />
      </div>
      <p className="menu--document-text">My Documents</p>
      <NewDocumentButton toggleMenu={toggleSelf} />
      <div className="menu--markdown-notes">
        {noteEntries}
      </div>
      <ThemeButton />
    </div>
  )
}

export default Menu;