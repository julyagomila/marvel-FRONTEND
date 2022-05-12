import { Link } from "react-router-dom";

import logo from "../assets/pictures/logo-marvel.png";

const Header = () => {
  return (
    <header>
      <img className="logo" src={logo} />
      <section className="header-menu">
        <Link className="link" to={"/home"}>
          <span className="header-element">Personnages</span>
        </Link>

        <Link className="link" to={"/comics"}>
          <span className="header-element">Comics</span>
        </Link>
        <Link className="link" to={"/favoris"}>
          <span className="header-element">Favoris</span>
        </Link>
      </section>
    </header>
  );
};

export default Header;
