import { FC, useState, useEffect, useContext } from "react";
import { MarkdownContext } from "../MarkdownContext";

const MarkdownEditor: FC = () => {
  const [text, setText] = useState<string>("");
  const { markdownNotes } = useContext(MarkdownContext);

  useEffect(() => {
    setText(markdownNotes[0].content);
  }, [])

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }

  return (
    <div className="markdown-editor-container">
      <textarea className="markdown-editor" value={text} onChange={handleChange} />
    </div>
  )
}

export default MarkdownEditor;