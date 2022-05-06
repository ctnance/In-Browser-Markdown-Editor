import { FC, useState, useEffect, useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { MarkdownContext } from "../MarkdownContext";

const MarkdownEditor: FC = () => {
  const [text, setText] = useState<string>("");
  // TODO: Use the "active" note rather than the first note at index 0
  const { markdownNotes, activeNoteId } = useContext(MarkdownContext);
  const { isDarkTheme } = useContext(ThemeContext);

  useEffect(() => {
    setText(markdownNotes[activeNoteId].content);
  }, [activeNoteId]);

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }

  return (
    <div className="markdown-editor-container">
      <textarea className={`markdown-editor ${isDarkTheme ? "dark" : "light"}`} value={text} onChange={handleChange} />
    </div>
  )
}

export default MarkdownEditor;