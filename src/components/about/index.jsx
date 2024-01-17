import React from "react";
import Breadcrumb from "../../common/breadcrumbs/breadcrumb";
import HeroBanner from "../../common/hero-banner";
import CtaArea from "../contact/cta-area";
import TeamArea from "../homes/home-4/team-area";
import Brand from "./brand";
import CompanyArea from "./company-area";
import HeaderTwo from "@/src/layout/headers/header-2";
import FooterTwo from "@/src/layout/footers/footer-2";
 
const About = () => {
  return (
    <>
      <HeaderTwo />
      <Breadcrumb title_top="Sobre"  title_bottom="Brasil Atuarial" />
      <HeroBanner title="Sobre" subtitle="Brasil Atuarial" bg_img="/atuarial/assets/img/salasuperior.jpg" />
      <CompanyArea />
      <Brand />
      <TeamArea bg_style={true} />
      <CtaArea />
      <FooterTwo />
    </>
  );
};

export default About;
