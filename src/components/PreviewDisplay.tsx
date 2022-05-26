import { FC, useState, useEffect, useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { MarkdownContext } from "../MarkdownContext";
import { PreviewBar } from "./";

import Markdown from "markdown-to-jsx";

interface Props {
  isMarkdownActive: boolean,
  toggleMarkdown: () => void,
  isMenuActive: boolean,
  toggleMenu: () => void,
}

const PreviewDisplay: FC<Props> = ({ isMarkdownActive, toggleMarkdown, isMenuActive, toggleMenu }) => {
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
    <div className={`preview-container ${isDarkTheme ? "dark" : "light"}`}>
      <PreviewBar text="preview" showButton={true} isMarkdownActive={isMarkdownActive} toggleMarkdown={toggleMarkdown} />
      <div className="preview-container--content-wrapper">
        <div className={`preview-container--content ${isDarkTheme ? "dark" : "light"}`} onClick={() => { isMenuActive && toggleMenu() }}>
          <Markdown>
            {text}
          </Markdown>
        </div>
      </div>
    </div>
  )
}

export default PreviewDisplay;