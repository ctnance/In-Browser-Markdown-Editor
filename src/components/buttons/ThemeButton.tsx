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
    <div className="theme-button-container">
      <div className="theme-button--icon-dark">
        <img src={IconDark} />
      </div>
      <div className={`theme-button theme-button--${isDarkTheme ? "dark" : "light"}`} onClick={toggleTheme}><div className="theme-button--indicator"></div></div>
      <div className="theme-button--icon-light">
        <img src={IconLight} />
      </div>
    </div>
  )
}

export default ThemeButton;