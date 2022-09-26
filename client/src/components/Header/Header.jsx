import Esports from "../../assets/esportszone.PNG";
import Title from "../../assets/esportszonetitle.PNG";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div id="navbar">
      <a href="http://localhost:3000">
        <img id="logo" src={Esports} alt="logo" />
      </a>
      <img id="name" src={Title} alt="title" />
      <div id="search-container">
        <FontAwesomeIcon id="search-icon" icon={faMagnifyingGlass} />
        <input id="searchbar" type="search" placeholder="Search"></input>
      </div>
    </div>
  );
}
