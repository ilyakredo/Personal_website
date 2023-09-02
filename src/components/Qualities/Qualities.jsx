import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import classes from "./Qualities.module.css";
import {
  ParallaxProvider,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";
import img from "../../assets/images/background_parallax_03.jpg";
import { qualityDescriptionArr } from "../../assets/data/data";
import { QualityItem } from "./components/QualityItem/QualityItem";

export const Qualities = () => {
  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className={classes.qualities} id="qualities">
      <ParallaxProvider>
        <ParallaxBanner
          style={{ aspectRatio: "2 / 1", width: "100%", maxHeight: "45vw" }}
          className={classes.banner}
        >
          <ParallaxBannerLayer image={img} speed={-20} opacity={[0.7, 0.7]} />
          <ParallaxBannerLayer>
            <div className={classes.qualitiesWrapper}>
              {qualityDescriptionArr.map((quality, ind) => (
                <div
                  key={quality.id}
                  data-aos="flip-left"
                  data-aos-duration={`${(ind + 1) * 300}`}
                >
                  <QualityItem
                    title={quality.title}
                    description={quality.desc}
                    icon={quality.icon}
                  />
                </div>
              ))}
            </div>
          </ParallaxBannerLayer>
        </ParallaxBanner>
      </ParallaxProvider>
    </section>
  );
};
