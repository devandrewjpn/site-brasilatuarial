import Link from 'next/link';
import React from 'react';


const cta_content = {
    bg_img: "/atuarial/assets/img/cta/cta-bg.jpg",
    title: "",
    info: <>Um risco continua arriscado quando pode-se prevê-lo</>,
    btn_text: "Fale conosco",
}
const {bg_img, title, info, btn_text}  = cta_content


const CtaArea = () => {
    return (
        <>
             <div className="tp-cta-area p-relative">
               <div className="tp-cta-grey-bg grey-bg-2"></div>
               <div className="container">
                  <div className="row">
                     <div className="col-12">
                        <div className="tp-cta-bg" style={{backgroundImage: `url(${bg_img})`}}>
                           <div className="tp-cta-content text-center">
                              <h3 className="tp-section-title-lg text-white">{title}</h3>
                              <p>{info}</p>
                              <Link className="tp-btn-green" href="/contact">{btn_text}</Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default CtaArea;