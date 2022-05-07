import { FC } from "react";
import { Header, Main, Menu } from "./components";
import { useToggler } from "./hooks/index";

const App: FC = () => {
  const [isMenuActive, toggleMenu] = useToggler(false);

  return (
    <>
      <Menu isActive={isMenuActive} toggleSelf={toggleMenu} />
      <div className={`page-content ${isMenuActive ? "menu-active" : ""}`}>
        <Header isMenuActive={isMenuActive} toggleMenu={toggleMenu} />
        <Main toggleMenu={toggleMenu} />
      </div>
    </>
  );
}

export default App;
