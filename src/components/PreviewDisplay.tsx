import { useContext } from "react";
import { FC } from "react";
import { ThemeContext } from "../ThemeContext";

const PreviewDisplay: FC = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div className={`preview-container ${isDarkTheme ? "dark" : "light"}`}>
      <h1>PREVIEW IN PROGRESS</h1>
    </div>
  )
}

export default PreviewDisplay;