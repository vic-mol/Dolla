import React, { useState } from "react";
import Video from "../../video/video.mp4";
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroP,
  HeroH1,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Haz despegar tu negocio con KodeFree</HeroH1>
        <HeroP>
          En KodeFree, te ayudamos a realizar la transformación digital que tu
          negocio necesita, con la tecnología a la medida de sus necesidades.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="soluciones"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true;"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Iniciar {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
