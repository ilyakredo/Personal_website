import React, { useRef, useState } from "react";
import classes from "./Menu.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { scrollToSection } from "../../../../helpers/scrolling";
import { BASE_MODE } from "../../../../assets/constants";

export const Menu = ({ activeSection, mode }) => {
  const menuRef = useRef();
  const [respMenuShow, setRespMenuShow] = useState(false);

  const showMenu = () => {
    setRespMenuShow(!respMenuShow);
    menuRef.current.classList.toggle(classes.responsiveNav);
  };

  return (
    <div className={classes.menuWrapper}>
      <ul
        className={
          mode === BASE_MODE
            ? classes.menu
            : `${classes.menu} ${classes.menu_dark}`
        }
        ref={menuRef}
        onClick={showMenu}
      >
        <li
          className={activeSection === "home" ? classes.active : ""}
          onClick={(e) => scrollToSection("home", e)}
        >
          <a href="#home">home</a>
        </li>
        <li
          className={
            activeSection === "about" || activeSection === "qualities"
              ? classes.active
              : ""
          }
          onClick={(e) => scrollToSection("about", e)}
        >
          <a href="#about">about</a>
        </li>
        <li
          className={activeSection === "resume" ? classes.active : ""}
          onClick={(e) => scrollToSection("resume", e)}
        >
          <a href="#resume">resume</a>
        </li>
        <li
          className={activeSection === "skills" ? classes.active : ""}
          onClick={(e) => scrollToSection("skills", e)}
        >
          <a href="#skills">skills</a>
        </li>
        <li
          className={activeSection === "portfolio" ? classes.active : ""}
          onClick={(e) => scrollToSection("portfolio", e)}
        >
          <a href="#portfolio">portfolio</a>
        </li>
        <li
          className={activeSection === "contact" ? classes.active : ""}
          onClick={(e) => scrollToSection("contact", e)}
        >
          <a href="#contact">contact</a>
        </li>
      </ul>
      <div className={classes.navBtnWrapper} onClick={showMenu}>
        {respMenuShow ? <FaBars /> : <FaTimes />}
      </div>
    </div>
  );
};
