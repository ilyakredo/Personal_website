import { HiLightBulb, HiCode } from "react-icons/hi";
import { HiMagnifyingGlass, HiPuzzlePiece } from "react-icons/hi2";
import {
  SiPuppeteer,
  SiGit,
  SiFirebase,
  SiRedux,
  SiReact,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiJest,
  SiBootstrap,
  SiSass,
} from "react-icons/si";
import lashbarScreen from "../images/portfolio_lash_bar_1_.png";
import lashbarImg from "../images/portfolio_lash_bar_1_.jpg";
import lashbarImgAddFirst from "../images/portfolio_lash_bar_2.jpg";
import lashbarImgAddSecond from "../images/portfolio_lash_bar_3.jpg";
import lashbarIcon from "../icons/face-smile-beam-regular.svg";
import progamingScreen from "../images/portfolio_pro-gaming_1_screen.png";
import progamingImg from "../images/portfolio_pro-gaming_1_wide.jpg";
import progamingImgAddFirst from "../images/portfolio_pro-gaming_2.jpg";
import progamingIcon from "../icons/gamepad-solid.svg";
import prodentalScreen from "../images/portfolio_prodental_1_screen.png";
import prodentalImg from "../images/portfolio_prodental_1.jpg";
import prodentalImgAddFirst from "../images/portfolio_prodental_2.jpg";
import prodentalImgAddSecond from "../images/portfolio_prodental_3.jpg";
import prodentalIcon from "../icons/tooth-solid.svg";
import carpathiaScreen from "../images/portfolio_carpathia_1_screen.png";
import carpathiaImg from "../images/portfolio_carpathia_1.jpg";
import carpathiaImgAddFirst from "../images/portfolio_carpathia_2.jpg";
import carpathiaImgAddSecond from "../images/portfolio_carpathia_3.jpg";
import carpathiaIcon from "../icons/tree-solid.svg";
import booksBSScreen from "../images/portfolio_books_bs_app_1_screen.png";
import booksBSImg from "../images/portfolio_book_bs_app_1.jpg";
import booksBSImgAddFirst from "../images/portfolio_book_bs_app_2.jpg";
import booksBSImgAddSecond from "../images/portfolio_book_bs_app_3.jpg";
import booksBSIcon from "../icons/book-solid.svg";
import photoScreen from "../images/portfolio_photo_1_screen.png";
import photoImg from "../images/portfolio_photo_1.jpg";
import photoImgAddFirst from "../images/portfolio_photo_2.jpg";
import photoImgAddSecond from "../images/portfolio_photo_3.jpg";
import photoIcon from "../icons/camera-solid.svg";

// About section - data

export const aboutInfo =
  "I'm a passionate Frontend and Software Developer, devoted to crafting websites and dynamic single-page apps using React. I'm particularly drawn to the artistic side of frontend work, enhancing designs with a focus on user experience. Additionally, I specialize in creating tools for data analysis, storage, and processing. I'm comfortable with cloud-based storage and developing apps that streamline data tasks. My dedication to self-improvement drives me to constantly learn and gain new insights to refine my abilities.";

export const qualityArr = [
  { id: 1, msgBody: "Attention to Performance" },
  { id: 2, msgBody: "Creativity" },
  { id: 3, msgBody: "Attention to Detail" },
  { id: 4, msgBody: "Self-Motivated" },
  { id: 5, msgBody: "Problem-Solving Skills" },
];

export const qualityDescriptionArr = [
  {
    id: 1,
    title: "Passionate about Coding",
    desc: "I enjoy crafting digital solutions, adeptly turning tough challenges into functional working code that fuels creative and innovative apps",
    icon: <HiCode />,
  },
  {
    id: 2,
    title: "Detail-Oriented",
    desc: "I focus on enhancing user experiences by paying careful attention to design elements and ensuring seamless functionality across diverse platforms",
    icon: <HiMagnifyingGlass />,
  },
  {
    id: 3,
    title: "Creative in my Approach",
    desc: "I bring fresh and innovative concepts to projects, adding creative solutions, and consistently delivering engaging web experiences",
    icon: <HiLightBulb />,
  },
  {
    id: 4,
    title: "Skilled in Problem Solving",
    desc: "I have good problem-solving skills as a developer and I enhance user experiences through effective solutions and improved functionality",
    icon: <HiPuzzlePiece />,
  },
];

export const detailsArr = [
  { id: 1, detailDesc: "Name", detailValue: "Illia Moiseienko" },
  { id: 2, detailDesc: "Email", detailValue: "illia.moiseienko@gmail.com" },
  { id: 3, detailDesc: "Phone", detailValue: "+38(050) 974-38-46" },
  { id: 4, detailDesc: "Location", detailValue: "Calgary, AB, Canada" },
];

// Resume section - data

export const educationDataArr = [
  {
    id: 1,
    title: "Master of Computer Science",
    institution: "Donetsk National Technical University, Donetsk, Ukraine",
    duration: "September 2002 – June 2007",
    descriptionSubject: "Major",
    description: "Automated Control Systems",
  },
  {
    id: 2,
    title: "Advanced Programming (Java)",
    institution: "Tel-Ran Academy, Rehovot, Israel",
    duration: "July 2015 – May 2016",
    descriptionSubject: "Course program",
    description:
      "Course program: Java basics, Data types and classes, OOP basics, Exceptions and error handling, Collections framework, Threads concept, Multithreading, Networking, TCP-IP protocols, Database connectivity, Design patterns, Spring Framework, Aspect oriented programming.",
  },
  {
    id: 3,
    title: "Frontend developer course",
    institution: "EPAM University program, Kyiv, Ukraine",
    duration: "April 2022 – May 2023",
    descriptionSubject: "Course program",
    description:
      "IT Fundamentals, Basic of programming, HTML, HTML5, CSS, CSS preprocessors SASS/LESS, Javascript ES5/ES6, Basics of OOP, Bootstrap, Typescript, Git, Webpack.",
  },
];

export const experienceDataArr = [
  {
    id: 1,
    title: "Frontend Developer",
    duration: "February 2023 – Current",
    employer: "EPAM SYSTEMS, Kyiv, Ukraine",
    jobDesc:
      "Collaborated with a team of 6 developers to create diverse React projects, utilizing state management (Redux) for user-friendly cross-device apps. Designed reusable components for improved interaction. Skillfully migrated existing app to React, enhancing performance, support, and stability. Implemented seamless navigation, user authentication, and backend integration, yielding remarkable and consistently positive results.",
  },
  {
    id: 2,
    title: "Software Developer",
    duration: "June 2021 – Current",
    employer: "LLC PUBLISHING HOUSE KREDO, Kyiv, Ukraine",
    jobDesc:
      "Managed and optimized company website, catalyzing 50% online sales growth. Developed applications using diverse data automation techniques for deep market insights, spurring product sales. Utilized Node.js, Express, Puppeteer for enriched product presentation, driving higher sales. Streamlined tasks like data collection, price monitoring, and secure storage, reducing manual effort. Innovated tools for automated data collection, enhancing accuracy and efficiency, while also reducing processing time by 3.5x and personnel needs by 2x.",
  },
];

// Skills section - data

export const skillsArr = [
  {
    id: 1,
    icon: <SiHtml5 />,
    title: "HTML",
    url: "https://www.w3schools.com/html/default.asp",
    percentage: "90",
    color: "#dd4b24",
  },
  {
    id: 2,
    icon: <SiCss3 />,
    title: "CSS",
    url: "https://www.w3schools.com/css/default.asp",
    percentage: "90",
    color: "#254bdd",
  },
  {
    id: 3,
    icon: <SiJavascript />,
    title: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    percentage: "90",
    color: "#e8d44d",
  },
  {
    id: 4,
    icon: <SiTypescript />,
    title: "Typescript",
    url: "https://www.typescriptlang.org/",
    percentage: "75",
    color: "#2f74c0",
  },
  {
    id: 5,
    icon: <SiReact />,
    title: "React",
    url: "https://react.dev/",
    percentage: "80",
    color: "#5ed3f3",
  },
  {
    id: 6,
    icon: <SiRedux />,
    title: "Redux",
    url: "https://redux.js.org/",
    percentage: "70",
    color: "#7248b6",
  },
  {
    id: 7,
    icon: <SiJest />,
    title: "Jest",
    url: "https://jestjs.io/",
    percentage: "70",
    color: "#c03b13",
  },
  {
    id: 8,
    icon: <SiNodedotjs />,
    title: "Node.js",
    url: "https://nodejs.org/",
    percentage: "80",
    color: "#509941",
  },
  {
    id: 9,
    icon: <SiExpress />,
    title: "Express",
    url: "https://expressjs.com/",
    percentage: "70",
    color: "#4d5964",
  },
  {
    id: 10,
    icon: <SiPuppeteer />,
    title: "Puppeteer",
    url: "https://pptr.dev/",
    percentage: "75",
    color: "#01d19d",
  },
  {
    id: 11,
    icon: <SiFirebase />,
    title: "Google Firebase",
    url: "https://firebase.google.com/",
    percentage: "75",
    color: "#f7c52a",
  },
  {
    id: 12,
    icon: <SiGit />,
    title: "Git",
    url: "https://git-scm.com/",
    percentage: "70",
    color: "#e84e31",
  },
];

export const portfolioDataArr = [
  {
    id: 1,
    image: carpathiaScreen,
    addImage: [carpathiaImg, carpathiaImgAddFirst, carpathiaImgAddSecond],
    icon: carpathiaIcon,
    techIcons: [
      { id: 1, icon: <SiHtml5 />, title: "HTML" },
      { id: 2, icon: <SiCss3 />, title: "CSS" },
      { id: 3, icon: <SiJavascript />, title: "Javascript" },
    ],
    name: "Explore Carpathia",
    desc: "ExploreCarpathia Community is your gateway to ecotourism in Ukraine's Carpathia region. Discover diverse eco-tours, enriching insights, and connect with fellow travelers. Immerse yourself in captivating articles, collaborate with adventurers, and embrace the natural and cultural wonders of Carpathia.",
  },
  {
    id: 2,
    image: prodentalScreen,
    addImage: [prodentalImg, prodentalImgAddFirst, prodentalImgAddSecond],
    icon: prodentalIcon,
    techIcons: [
      { id: 1, icon: <SiHtml5 />, title: "HTML" },
      { id: 2, icon: <SiCss3 />, title: "CSS" },
      { id: 3, icon: <SiJavascript />, title: "Javascript" },
    ],
    name: "ProDental вental сlinic",
    desc: "This website presents ProDental clinic in Kyiv, known for its skilled doctors and excellent service. They offer a wide variety of dental treatments to ensure exceptional care for their patients.",
  },
  {
    id: 3,
    image: lashbarScreen,
    addImage: [lashbarImg, lashbarImgAddFirst, lashbarImgAddSecond],
    icon: lashbarIcon,
    techIcons: [
      { id: 1, icon: <SiHtml5 />, title: "HTML" },
      { id: 2, icon: <SiSass />, title: "Sass" },
      { id: 3, icon: <SiJavascript />, title: "Javascript" },
    ],
    name: "LashBar beauty salon",
    desc: "This website showcases a popular lash studio in Kyiv, Ukraine. With three locations, it offers amazing lash services. The studio has talented staff and many satisfied customers in Kyiv, making it a top choice for fantastic lash treatments",
  },
  {
    id: 4,
    image: photoScreen,
    addImage: [photoImg, photoImgAddFirst, photoImgAddSecond],
    icon: photoIcon,
    techIcons: [
      { id: 1, icon: <SiHtml5 />, title: "HTML" },
      { id: 2, icon: <SiCss3 />, title: "CSS" },
      { id: 3, icon: <SiJavascript />, title: "Javascript" },
      { id: 4, icon: <SiBootstrap />, title: "Bootstrap" },
    ],
    name: "Photographer portfolio website",
    desc: "This website features a highly talented and professional photographer known for her exceptional skills and award-winning photography. Explore her portfolio to witness her remarkable work.",
  },
  {
    id: 5,
    image: progamingScreen,
    addImage: [progamingImg, progamingImgAddFirst],
    icon: progamingIcon,
    techIcons: [
      { id: 1, icon: <SiHtml5 />, title: "HTML" },
      { id: 2, icon: <SiCss3 />, title: "CSS" },
      { id: 3, icon: <SiJavascript />, title: "Javascript" },
      { id: 4, icon: <SiNodedotjs />, title: "Node.js" },
      { id: 5, icon: <SiExpress />, title: "Express" },
      { id: 6, icon: <SiFirebase />, title: "Google Firebase" },
    ],
    name: "Pro-gaming community",
    desc: "This website presents Pro-gaming community - a vibrant collective of players based in Kyiv. They organize tournaments, diverse events, and gatherings. This community comprises numerous engaging and imaginative individuals",
  },
  {
    id: 6,
    image: booksBSScreen,
    addImage: [booksBSImg, booksBSImgAddFirst, booksBSImgAddSecond],
    icon: booksBSIcon,
    techIcons: [
      { id: 1, icon: <SiHtml5 />, title: "HTML" },
      { id: 2, icon: <SiCss3 />, title: "CSS" },
      { id: 3, icon: <SiReact />, title: "React" },
      { id: 4, icon: <SiFirebase />, title: "Google Firebase" },
    ],
    name: "Books Best Sellers App",
    desc: "Books Best Sellers App is a robust application developed using React and leverages Google Firestore for efficient data storage. This feature-rich platform employs React Routing and various React hooks such as useState, useEffect, useContext, and useRef, delivering a tool for companies to maintain an internal list of top book best sellers.",
  },
];
