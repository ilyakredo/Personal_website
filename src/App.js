// import "./App.css";
// import "./global.css";
// import { FaArrowUp } from "react-icons/fa";
// import { Header } from "./components/Header/Header";
// import { Home } from "./components/Home/Home";
// import { About } from "./components/About/About";
// import { Skills } from "./components/Skills/Skills";
// import { Resume } from "./components/Resume/Resume";
// import { Portfolio } from "./components/Portfolio/Portfolio";
// import { Contact } from "./components/Contact/Contact";
// import { Footer } from "./components/Footer/Footer";

// function App() {
//   return (
//     <main className="App">
//       <Header />
//       <div class="top-button">
//         <FaArrowUp />
//       </div>
//       <Home />
//       <About />
//       <Resume />
//       <Skills />
//       <Portfolio />
//       <Contact />
//       <Footer />
//     </main>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import "./App.css";
// import "./global.css";
// import { FaArrowUp } from "react-icons/fa";
// import { Header } from "./components/Header/Header";
// import { Home } from "./components/Home/Home";
// import { About } from "./components/About/About";
// import { Skills } from "./components/Skills/Skills";
// import { Resume } from "./components/Resume/Resume";
// import { Portfolio } from "./components/Portfolio/Portfolio";
// import { Contact } from "./components/Contact/Contact";
// import { Footer } from "./components/Footer/Footer";

// function App() {
//   const [showTopButton, setShowTopButton] = useState(false);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   const handleScroll = () => {
//     if (window.pageYOffset > 200) {
//       setShowTopButton(true);
//     } else {
//       setShowTopButton(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <main className="App">
//       <Header />
//       {showTopButton && (
//         <div className="top-button" onClick={scrollToTop}>
//           <FaArrowUp />
//         </div>
//       )}
//       <Home />
//       <About />
//       <Resume />
//       <Skills />
//       <Portfolio />
//       <Contact />
//       <Footer />
//     </main>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import "./App.css";
// import "./global.css";
// import { FaArrowUp } from "react-icons/fa";
// import { Header } from "./components/Header/Header";
// import { Home } from "./components/Home/Home";
// import { About } from "./components/About/About";
// import { Skills } from "./components/Skills/Skills";
// import { Resume } from "./components/Resume/Resume";
// import { Portfolio } from "./components/Portfolio/Portfolio";
// import { Contact } from "./components/Contact/Contact";
// import { Footer } from "./components/Footer/Footer";

// function App() {
//   const [showTopButton, setShowTopButton] = useState(false);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   const handleScroll = () => {
//     if (window.scrollY > 200) {
//       setShowTopButton(true);
//     } else {
//       setShowTopButton(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <main className="App">
//       <Header />
//       {showTopButton && (
//         <div className="top-button" onClick={scrollToTop}>
//           <FaArrowUp />
//         </div>
//       )}
//       <Home />
//       <About />
//       <Resume />
//       <Skills />
//       <Portfolio />
//       <Contact />
//       <Footer />
//     </main>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import "./global.css";
// import Aos from "aos";
// import "aos/dist/aos.css";

// import { customAnimation } from "./helpers/animation";
import { FaArrowUp } from "react-icons/fa";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { Resume } from "./components/Resume/Resume";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Qualities } from "./components/Qualities/Qualities";

function App() {
  const [showTopButton, setShowTopButton] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mode, setMode] = useState("light");

  const onChangeMode = () => {
    mode === "light" ? setMode("dark") : setMode("light");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowTopButton(true);
    } else {
      setShowTopButton(false);
    }

    const sections = [
      "home",
      "about",
      "qualities",
      "skills",
      "resume",
      "portfolio",
      "contact",
    ];

    const active = sections.find((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        );
      }
      return false;
    });

    setActiveSection(active || "home");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="App">
      <Header
        activeSection={activeSection}
        mode={mode}
        onChangeMode={onChangeMode}
      />
      {showTopButton && (
        <div
          className={
            mode === "light" ? "top-button" : "top-button top-button-dark"
          }
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </div>
      )}
      <Home />
      <About mode={mode} />
      <Qualities />
      <Resume mode={mode} />
      <Skills mode={mode} />
      <Portfolio mode={mode} />
      <Contact />
      <Footer mode={mode} />
    </main>
  );
}

export default App;
