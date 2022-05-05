import { FC, useState, createContext } from "react";

interface DefaultValues {
  isDarkTheme: boolean,
  toggleTheme: () => void,
}

const ThemeContext = createContext({} as DefaultValues);

interface Props {
  children?: JSX.Element
}

const ThemeContextProvider: FC<Props> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  function toggleTheme() {
    console.log("TOGGLE THEME")
    setIsDarkTheme(prev => !prev);
  }

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme } as DefaultValues}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContextProvider, ThemeContext }