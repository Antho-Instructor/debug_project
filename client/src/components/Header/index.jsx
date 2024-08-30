import bgMobile from "../../assets/bg-header-mobile.svg";
import bgDesktop from "../../assets/bg-header-desktop.svg";
import useWindowWidth from "../../hooks/useWindowWidth";
import style from "./header.module.css";

function Header() {
  const windowWidth = useWindowWidth();

  const backgroundImage = windowWidth >= 375 ? bgDesktop : bgMobile;

  return (
    <header>
      <img src={bgMobile} alt="header" className={style.header} />
    </header>
  );
}

export default Header;
