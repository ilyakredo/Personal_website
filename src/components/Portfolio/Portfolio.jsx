import React, { useEffect, useRef, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import classes from "./Portfolio.module.css";
import { portfolioDataArr } from "../../assets/data/data";
import { PortfolioItem } from "./components/PortfolioItem/PortfolioItem";
import { scrollToBottom, smoothScrollByPixels } from "../../helpers/scrolling";
import { BASE_MODE } from "../../assets/constants";

export const Portfolio = ({ mode }) => {
  const [showAll, setShowAll] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [triggerMessage, setTriggerMessage] = useState("show more");
  const triggerRef = useRef(null);
  const lastVisibleItemRef = useRef(null);

  const toggleView = () => {
    setShowAll(!showAll);
    setScrolled(true);
  };

  useEffect(() => {
    setTriggerMessage(showAll ? "show less" : "show more");
    if (showAll && triggerRef.current) {
      scrollToBottom(triggerRef.current);
    }
    if (scrolled && !showAll) {
      smoothScrollByPixels(-550);
    }
  }, [showAll, scrolled]);

  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <section
      id="portfolio"
      className={
        mode === BASE_MODE
          ? classes.portfolio
          : `${classes.portfolio} ${classes.portfolio_dark}`
      }
    >
      <div className={classes.portfolioHeading}>
        <div>Portfolio</div>
        <h2>Some of my projects</h2>
      </div>
      <div className={classes.portfolioContent} ref={lastVisibleItemRef}>
        {portfolioDataArr.map((portfolioItem, index) => (
          <PortfolioItem
            ref={index === 3 ? lastVisibleItemRef : null}
            img={portfolioItem.image}
            addImg={portfolioItem.addImage}
            icon={portfolioItem.icon}
            name={portfolioItem.name}
            desc={portfolioItem.desc}
            techIcons={portfolioItem.techIcons}
            index={index}
            visible={index < 4 || showAll}
            key={portfolioItem.id}
          />
        ))}
      </div>
      <div className={`${classes.showMore} ${showAll ? classes.addSpace : ""}`}>
        <div
          className={classes.triggerWrapper}
          ref={triggerRef}
          onClick={toggleView}
        >
          <div className={classes.triggerInnerWrapper}>
            {showAll ? <FaArrowAltCircleUp /> : <FaArrowAltCircleDown />}
            <div className={classes.loadMsg}>{triggerMessage}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
