import { appTitle, navItems } from "../data/app_data";
import "../styles/Header.scss";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <h1>{appTitle}</h1>
      <nav>
        <HashLink id="link" to={"/#home"}>{navItems[0]}</HashLink>
        <Link id="link" to={"/contact"}>{navItems[1]}</Link>
        <HashLink id="link" to={"/#about"}>{navItems[2]}</HashLink>
        <HashLink id="link" to={"/#brand"}>{navItems[3]}</HashLink>
        <Link id="link" to={"/services"}>{navItems[4]}</Link>
      </nav>
    </div>
  );
};

export default Header;
