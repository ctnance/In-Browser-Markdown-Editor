import { FC, useEffect, useRef, useContext } from "react";
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
  const menu = useRef<HTMLDivElement>(null);

  const noteEntries = markdownNotes.map(note => (
    <MarkdownNote key={note.id} id={note.id} creationDate={note.createdAt} filename={note.name} toggleMenu={toggleSelf} />
  ));

  useEffect(() => {
    if (!isActive) {
      setTimeout(() => {
        if (menu.current) {
          menu.current.style.display = "none";
        }
      }, 500); // 500 milliseconds is transition time for menu to fully appear; so disappear in 500 ms
    } else {
      if (menu.current) {
        menu.current.style.display = "flex";
      }
    }
  }, [isActive]);

  return (
    <div className="menu" ref={menu}>
      <div className="menu--title-icon-wrapper">
        <img className="menu--title-icon" src={Logo} alt="menu title icon" />
      </div>
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