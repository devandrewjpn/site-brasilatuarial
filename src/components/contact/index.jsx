import React, { useEffect,useState } from "react";
import Breadcrumb from "../../common/breadcrumbs/breadcrumb";
import ContactFormArea from "./contact-form-area";
import ContactInner from "./contact-inner";
import CtaArea from "./cta-area";
import HeroBanner from "../../common/hero-banner";
import HeaderTwo from "@/src/layout/headers/header-2";
import FooterTwo from "@/src/layout/footers/footer-2";

const Contact = () => {

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <>
      <HeaderTwo />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title_top="Fale Conosco" title_bottom="" />
            <HeroBanner title="Fale Conosco" subtitle="" bg_img="/assets/img/salasuperior2.jpg" />
            <ContactFormArea />
            <ContactInner />
            <CtaArea />
          </main>
          <FooterTwo />
        </div>
      </div>
    </>
  );
};

export default Contact;
