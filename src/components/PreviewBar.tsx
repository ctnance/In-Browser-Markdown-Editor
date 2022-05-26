import { FC, useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { PreviewButton } from "./buttons";

interface Props {
  text: string,
  showButton: boolean,
  isMarkdownActive: boolean,
  toggleMarkdown: () => void
}
const PreviewBar: FC<Props> = ({ text, showButton, isMarkdownActive, toggleMarkdown }) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div className={`preview-bar ${isDarkTheme ? "dark" : "light"}`}>
      <p className="preview-bar--text">{text}</p>
      {showButton && <PreviewButton previewActive={isMarkdownActive} togglePreview={toggleMarkdown} />}
    </div>
  )
}

export default PreviewBar;