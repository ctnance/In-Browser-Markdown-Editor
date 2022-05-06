import { FC } from "react";
import { Header, Main, Menu } from "./components";
import { useToggler } from "./hooks/index";

const App: FC = () => {
  const [isMenuActive, toggleMenu] = useToggler(true);
  return (
    <>
      {isMenuActive && <Menu toggleSelf={toggleMenu} />}
      <div className={`page-content ${isMenuActive ? "menu-active" : ""}`}>
        <Header isMenuActive={isMenuActive} toggleMenu={toggleMenu} />
        <Main />
      </div>
    </>
  );
}

export default App;
