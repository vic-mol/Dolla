import React from "react";
import Icon1 from "../../images/cloud.png";
import Icon2 from "../../images/sw_eng.png";
import Icon3 from "../../images/programmer.png";
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesP,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Nuestros Servicios</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Big Data & Desarrollo de Cloud Analytics</ServicesH2>
          <ServicesP>
            Transforma los datos crudos de tu empresa en optimización de
            procesos, operaciones y decisiones.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Low Code & Automatización</ServicesH2>
          <ServicesP>
            Contruímos aplicaciones a traves de herramientas de diseño visual y
            elementos reutilizables.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Desarrollo de Software a la Medida</ServicesH2>
          <ServicesP>
            Contamos con un equipo de desarrollo capaz de crear software a la
            medida de tus requerimientos.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
