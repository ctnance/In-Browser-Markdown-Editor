import { FC, useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { PreviewButton } from "./buttons";

interface Props {
  isMarkdownActive: boolean,
  toggleMarkdown: () => void
}
const PreviewBar: FC<Props> = ({ isMarkdownActive, toggleMarkdown }) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div className={`preview-bar ${isDarkTheme ? "dark" : "light"}`}>
      <p className="preview-bar--text">{isMarkdownActive ? "Markdown" : "Preview"}</p>
      <PreviewButton previewActive={isMarkdownActive} togglePreview={toggleMarkdown} />
    </div>
  )
}

export default PreviewBar;