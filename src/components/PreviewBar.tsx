import { useToggler } from "../hooks";
import PreviewButton from "./buttons/PreviewButton";

function PreviewBar() {
  const [isMarkdownActive, toggle] = useToggler(false);

  return (
    <div className="preview-bar">
      <p className="preview-bar--text">{isMarkdownActive ? "Markdown" : "Preview"}</p>
      <PreviewButton previewActive={isMarkdownActive} togglePreview={toggle} />
    </div>
  )
}

export default PreviewBar;