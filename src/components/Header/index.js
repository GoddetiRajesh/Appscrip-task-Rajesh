import { SiReact } from "react-icons/si";
import { LuSearch } from "react-icons/lu";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsBagDash } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";

import "./index.css";

const Header = () => (
  <>
    <div className="header-container">
      <div className="logos-container">
        <SiReact className="logo-icon" />
        <h1 className="logo-heading">LOGO</h1>
        <div className="icons-container">
          <LuSearch className="icon" />
          <IoMdHeartEmpty className="icon" />
          <BsBagDash className="icon" />
          <IoPersonOutline className="icon" />
        </div>
      </div>
      <ul className="menu-container">
        <li className="menu-items">SHOP</li>
        <li className="menu-items">SKILLS</li>
        <li className="menu-items">STORIES</li>
        <li className="menu-items">ABOUT</li>
        <li className="menu-items">CONTACT US</li>
      </ul>
    </div>
    <div className="header-container">
      <h1 className="heading">DISCOVER OUR PRODUCTS</h1>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus <br />
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </p>
    </div>
  </>
);

export default Header;
