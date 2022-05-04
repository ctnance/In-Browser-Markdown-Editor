import { FC } from "react";
import { useToggler } from "../hooks";
import PreviewButton from "./buttons/PreviewButton";

const PreviewBar: FC = () => {
  const [isMarkdownActive, toggle] = useToggler(true);

  return (
    <div className="preview-bar">
      <p className="preview-bar--text">{isMarkdownActive ? "Markdown" : "Preview"}</p>
      <PreviewButton previewActive={isMarkdownActive} togglePreview={toggle} />
    </div>
  )
}

export default PreviewBar;