import { FC, useContext } from "react";
import { ThemeContextProvider } from "./ThemeContext";
import { Header, Main } from "./components";

const App: FC = () => {
  return (
    <>
      <Header />
      <ThemeContextProvider>
        <Main />
      </ThemeContextProvider>
    </>
  );
}

export default App;
