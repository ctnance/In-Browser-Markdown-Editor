import { FC } from "react";
import { useState } from "react";

const MarkdownEditor: FC = () => {
  let [text, setText] = useState("");

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