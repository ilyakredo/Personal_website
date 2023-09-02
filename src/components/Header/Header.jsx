import React, { useState } from "react";
import { Logo } from "./components/Logo/Logo";
import classes from "./Header.module.css";
import { Menu } from "./components/Menu/Menu";
import { Social } from "./components/Social/Social";
import { Mode } from "./components/Mode/Mode";
import { BASE_MODE } from "../../assets/constants";

export const Header = ({ activeSection, mode, onChangeMode }) => {
  const [respMenuShow, setRespMenuShow] = useState(false);

  return (
    <nav
      className={
        mode === BASE_MODE
          ? classes.navigation
          : `${classes.navigation} ${classes.navigation_dark}`
      }
    >
      <Logo mode={mode}></Logo>
      <Menu
        activeSection={activeSection}
        mode={mode}
        respMenuShow={respMenuShow}
        setRespMenuShow={setRespMenuShow}
      />
      <Mode
        mode={mode}
        onChangeMode={onChangeMode}
        setRespMenuShow={setRespMenuShow}
      />
      <Social mode={mode}></Social>
    </nav>
  );
};
