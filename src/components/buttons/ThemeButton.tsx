import { FC, useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

import IconLight from "../../assets/icon-light-mode.svg";
import IconDark from "../../assets/icon-dark-mode.svg";

const ThemeButton: FC = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);


  function handleClick() {
    console.log("HANDLING CLICK!")
    console.log(isDarkTheme)
  }

  return (
    <div className="theme-btn-container">
      <div className="theme-btn--icon-dark-container">
        <img className={`theme-btn--icon-dark ${isDarkTheme ? "selected" : ""}`} src={IconDark} />
      </div>
      <div className={`theme-btn theme-btn--${isDarkTheme ? "dark" : "light"}`} onClick={toggleTheme}><div className="theme-btn--indicator"></div></div>
      <div className="theme-btn--icon-light-container">
        <img className={`theme-btn--icon-light ${!isDarkTheme ? "selected" : ""}`} src={IconLight} />
      </div>
    </div>
  )
}

export default ThemeButton;