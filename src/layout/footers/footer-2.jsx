import { CopyRight } from '@/src/common/social-links';
import Link from 'next/link';
import React, { useState } from 'react';

const footer_content = {
   address: <>1811 Silverside Rd, Wilmington,<br />DE 19810, USA</>,
   phone: "+806(000)8899",
   email: "contact@info.com",
   download: "Download App",
   footer_lisks: [
      {
         id: 1,
         cls: "footer-col-2-2",
         title: "Nosso grupo",
         delay: ".5s",
         links: [
            { name: "Payments", link: "#" },
            { name: "Advances", link: "#" },
            { name: "Online Checkout", link: "#" },
            { name: "Dashboard", link: "#" },
            { name: "Get Started", link: "#" },
         ]
      }

   ],
   social_links: [
      {
         link: "https://www.facebook.com/brasilatuarialbh",
         target: "_blank",
         icon: "fab fa-facebook-f",
      },
      {
         link: "https://www.instagram.com/brasilatuarial/",
         target: "_blank",
         icon: "fab fa-instagram",
      },
      {
         link: "https://wa.me/3125108536?text=Ol%C3%A1%2C%20como%20vai%3F",
         target: "_blank",
         icon: "fab fa-whatsapp",
      },
   ],
}
const { social_links } = footer_content

const FooterTwo = () => {
   const [isOppen, setIsOppen] = useState(false)
   const oppenLan = () => {
      setIsOppen(!isOppen)
   }
   return (
      <>
         <footer>
            <div className="tp-footer__pl-pr grey-bg-2">
               <div className="tp-footer__area pt-90 tp-footer__tp-border-bottom">
                  <div className="container">
                     <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-4 col-md-6 pb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                           <div className="tp-footer__widget footer-widget-2 footer-col-2-1">
                              <div className="tp-footer__logo mb-25 text-center">
                                 <Link href="/">
                                    <img width={150} src="/atuarial/assets/img/logo.png" alt="them-pure" />
                                 </Link>
                              </div>
                              <div className="tp-footer__contact-info">

                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="tp-copyright__area pt-20 pb-20">
                  <div className="container">
                     <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                           <div className="tp-copyright__social">

                              {social_links.map((l, i) => (
                                 <Link
                                    key={i}
                                    href={l.link}
                                    target={l.target ? l.target : ""}
                                 >
                                    <i className={l.icon}></i>
                                 </Link>
                              ))}
                           </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-8  d-none d-md-block">
                           <div className="tp-copyright__text tp-copyright__text-2 text-center">
                              <span><CopyRight /></span>
                           </div>
                        </div>
                        
                     </div>
                  </div>
               </div>
            </div>

         </footer>
      </>
   );
};

export default FooterTwo;