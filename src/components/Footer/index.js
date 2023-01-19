import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Nuestra Empresa</FooterLinkTitle>
              <FooterLink to="/contacto">¿Quines Somos?</FooterLink>
              <FooterLink to="/contacto">Testimonios</FooterLink>
              <FooterLink to="/contacto">Trabaja con nosotros</FooterLink>
              <FooterLink to="/contacto">Inversionistas</FooterLink>
              <FooterLink to="/contacto">Política de Privacidad</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contáctanos</FooterLinkTitle>
              <FooterLink to="/contacto">Contacto</FooterLink>
              <FooterLink to="/contacto">Soporte</FooterLink>
              <FooterLink to="/contacto">Preguntas Frecuentes</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Servicios</FooterLinkTitle>
              <FooterLink to="/contacto">Big Data & Cloud Analytics</FooterLink>
              <FooterLink to="/contacto">
                Low Code & Automatización Inteligente
              </FooterLink>
              <FooterLink to="/contacto">
                Desarrollo de Software a la medida
              </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Partners</FooterLinkTitle>
              <FooterLink to="/contacto">MuleSoft</FooterLink>
              <FooterLink to="/contacto">Snowflake</FooterLink>
              <FooterLink to="/contacto">Amazon Web Services</FooterLink>
              <FooterLink to="/contacto">Google Cloud</FooterLink>
              <FooterLink to="/contacto">Databricks</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              KodeFree
            </SocialLogo>
            <WebsiteRights>
              KodeFree © {new Date().getFullYear()} Todos los derechos
              reservados.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="//www.facebook.com"
                target="blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="//www.instagram.com"
                target="blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="//www.twitter.com"
                target="blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="//www.youtube.com"
                target="blank"
                aria-label="YouTube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="//www.linkedin.com"
                target="blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
