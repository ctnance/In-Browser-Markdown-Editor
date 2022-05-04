import { FC, useContext } from "react";
import { useToggler } from "../hooks";
import { ThemeContext } from "../ThemeContext";
import PreviewButton from "./buttons/PreviewButton";

const PreviewBar: FC = () => {
  const [isMarkdownActive, toggle] = useToggler(true);
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div className={`preview-bar ${isDarkTheme ? "dark" : "light"}`}>
      <p className="preview-bar--text">{isMarkdownActive ? "Markdown" : "Preview"}</p>
      <PreviewButton previewActive={isMarkdownActive} togglePreview={toggle} />
    </div>
  )
}

export default PreviewBar;