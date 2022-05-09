import { FC, useState, useEffect, useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { MarkdownContext } from "../MarkdownContext";

interface Props {
  isMenuActive: boolean,
  toggleMenu: () => void,
}

const MarkdownEditor: FC<Props> = ({ isMenuActive, toggleMenu }) => {
  const [text, setText] = useState<string>("");
  // TODO: Use the "active" note rather than the first note at index 0
  const { markdownNotes, activeNoteId, updateNoteContent } = useContext(MarkdownContext);
  const { isDarkTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log("NEW NOTE!");
    markdownNotes.map(note => {
      if (note.id === activeNoteId) {
        setText(note.content);
      }
    });
  }, [activeNoteId]);

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const { value } = e.target;
    setText(value);
    updateNoteContent(value);
  }

  return (
    <div className="markdown-editor-container" onClick={() => { isMenuActive && toggleMenu() }}>
      <textarea className={`markdown-editor ${isDarkTheme ? "dark" : "light"}`} value={text} onChange={handleChange} />
    </div>
  )
}

export default MarkdownEditor;