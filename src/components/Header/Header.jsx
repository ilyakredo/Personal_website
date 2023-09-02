// import React from "react";
// import { Logo } from "./components/Logo/Logo";
// import classes from "./Header.module.css";
// import { Menu } from "./components/Menu/Menu";
// import { Social } from "./components/Social/Social";

// export const Header = ({ activeSection }) => {
//   return (
//     <nav className={classes.navigation}>
//       <Logo></Logo>
//       <Menu activeSection={activeSection}></Menu>
//       <Social></Social>
//     </nav>
//   );
// };

import React from "react";
import { Logo } from "./components/Logo/Logo";
import classes from "./Header.module.css";
import { Menu } from "./components/Menu/Menu";
import { Social } from "./components/Social/Social";
import { Mode } from "./components/Mode/Mode";

export const Header = ({ activeSection, mode, onChangeMode }) => {
  return (
    <nav
      className={
        mode === "light"
          ? classes.navigation
          : `${classes.navigation} ${classes.navigation_dark}`
      }
    >
      <Logo mode={mode}></Logo>
      <Menu activeSection={activeSection} mode={mode} />
      <Mode mode={mode} onChangeMode={onChangeMode} />
      <Social mode={mode}></Social>
    </nav>
  );
};
