import AnswerQuestion from '@/src/common/answer-question';
import Link from 'next/link';
import React from 'react';

const faq_content = {
    title: <>Perguntas frequentes</>,
    description: <>Caso tenha mais alguma dúvida, nosso time dará todo o suporte necessário!</>,
    btn_text: "Entre em contato",
}

const { title, description, btn_text }  = faq_content

const FaqArea = ({style_service}) => {
    return (
        <>
            <div className="tp-faq-area pb-120 fix">
               <div className="container">
                  <div className="row"> 
                     <div className={`col-12 d-flex justify-content-between align-items-center ${style_service && "wow tpfadeLeft"}`} 
                        data-wow-duration={style_service && ".9s"} 
                        data-wow-delay={style_service && ".4s"}>
                        <div className="tp-faq-left-wrapper p-relative">
                           <div className={`tp-faq-section-box ${style_service && "tp-inner-font tp-inner-faq-box"} pb-20`}>
                              <h3 className={`${style_service ? "tp-section-title" : "tp-section-title-lg"}`}>{title}</h3>
                              <p>{description}</p>
                           </div>
                        </div>
                        <div className="tp-faq-btn">
                              <Link className={`${style_service ? "tp-btn-inner tp-btn-hover alt-color-black" : "tp-btn-green"} `} 
                                  href="/contact">
                                    {btn_text}
                              </Link>
                           </div>
                     </div>

                     <div className="col-12">
                        <AnswerQuestion /> 
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default FaqArea;