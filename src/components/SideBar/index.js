import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper isOpen={isOpen} onCLick={toggle}>
        <SidebarMenu>
          <SidebarLink to="soluciones" onClick={toggle}>
            Soluciones
          </SidebarLink>
          <SidebarLink to="clientes" onClick={toggle}>
            Clientes
          </SidebarLink>
          <SidebarLink to="nosotros" onClick={toggle}>
            Sobre Nosotros
          </SidebarLink>
          <SidebarLink to="carreras" onClick={toggle}>
            Carreras
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/contacto">Contacto</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
