import React, { useEffect, useState, useRef } from "react";
import classes from "./PortfolioItem.module.css";
import { FaRegTimesCircle } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { ImageSlider } from "../ImageSlider/ImageSlider";
import { Icon } from "../Icon/Icon";

export const PortfolioItem = React.forwardRef(
  (
    { img, imgMinor, addImg, icon, name, desc, visible, techIcons, index },
    ref
  ) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isHoverDenied, setIsHoverDenied] = useState(true);
    const elementRef = useRef(null);

    const togglePopup = () => {
      setIsPopupOpen(!isPopupOpen);
    };

    const stopPropagation = (e) => {
      e.stopPropagation();
    };

    useEffect(() => {
      Aos.init({ once: true });

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setTimeout(() => {
              setIsHoverDenied(false);
            }, 1200);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
    }, []);

    React.useImperativeHandle(ref, () => ({
      togglePopup,
    }));

    return (
      <div
        ref={(el) => {
          elementRef.current = el;
          if (ref) {
            ref.current = el;
          }
        }}
        className={`${classes.portfolioItem} ${
          visible ? classes.visible : ""
        } ${!isHoverDenied ? classes.hoverReady : ""}`}
        onClick={togglePopup}
      >
        <picture
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          data-aos-duration={`${index < 2 ? "800" : "1200"}`}
        >
          <source srcSet={img} type="image/webp" />
          <img src={imgMinor} alt={name} />
        </picture>
        {!isPopupOpen && (
          <div className={classes.overlay}>
            <img src={icon} alt="icon" />
            <h2>{name}</h2>
            <div className={classes.description}>
              <p>{desc}</p>
              <span></span>
            </div>
            <div className={classes.techWrapper}>
              {techIcons.map((icon) => {
                return (
                  <Icon key={icon.id} icon={icon.icon} title={icon.title} />
                );
              })}
            </div>
          </div>
        )}
        <div
          className={`${classes.popupOverlay} ${
            isPopupOpen ? classes.active : ""
          }`}
          onClick={togglePopup}
        >
          <div className={classes.popupContent} onClick={stopPropagation}>
            <ImageSlider slides={addImg} />
            <div className={classes.closeBtnWrapper} onClick={togglePopup}>
              <FaRegTimesCircle className={classes.closeBtn} />
            </div>
          </div>
        </div>
      </div>
    );
  }
);
