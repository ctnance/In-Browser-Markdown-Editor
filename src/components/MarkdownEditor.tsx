import { useState } from "react";

function MarkdownEditor() {
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