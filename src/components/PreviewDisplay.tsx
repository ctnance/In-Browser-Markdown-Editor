import { FC, useState, useEffect, useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { MarkdownContext } from "../MarkdownContext";

import Markdown from "markdown-to-jsx";

interface Props {
  isMenuActive: boolean,
  toggleMenu: () => void,
}

const PreviewDisplay: FC<Props> = ({ isMenuActive, toggleMenu }) => {
  const [text, setText] = useState("");
  const { isDarkTheme } = useContext(ThemeContext);
  const { markdownNotes, activeNoteId } = useContext(MarkdownContext);

  useEffect(() => {
    markdownNotes.forEach(note => {
      if (note.id === activeNoteId) {
        setText(note.content);
      }
    })
  }, [activeNoteId])

  return (
    <div className={`preview-container ${isDarkTheme ? "dark" : "light"}`} onClick={() => { isMenuActive && toggleMenu() }}>
      <Markdown>
        {text}
      </Markdown>
    </div>
  )
}

export default PreviewDisplay;