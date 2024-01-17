import Link from 'next/link';
import React from 'react';

const account_content ={
    account_shape: [
        {
            id: 1,
            cls: "bg",
            img: "/atuarial/assets/img/account/account-bg.png" 
        },
        {
            id: 2,
            cls: "main-img",
            img: "/atuarial/assets/img/account/acc-main.png" 
        },
        {
            id: 3,
            cls: "author",
            img: "/atuarial/assets/img/account/ac-author.png" 
        },
        {
            id: 4,
            cls: "shape-1",
            img: "/atuarial/assets/img/account/ac-shape-1.png"
        },
        {
            id: 5,
            cls: "shape-2",
            img: "/atuarial/assets/img/account/ac-shape-2.png"
        },
    ],
    sub_title: "Faça parte",
    title: "Como fazemos?",
    account_step: [
        {
            id: 1, 
            number: "01",
            info: <>Entramos em contato</>,
        },
        {
            id: 2, 
            number: "02",
            info: <>Analisámos sua situação</>,
        },
        {
            id: 3, 
            number: "03",
            info: <>Otimizamos a situação!</>,
        },

    ],
    btn_text: "Adquirir agora",
}
const {account_shape, sub_title, title, account_step, btn_text, info}  = account_content



const OpenAccountArea = () => {
    return (
      <>
        <div className="tp-account-area pb-120">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div
                  className="tp-account-thumb-wrapper p-relative text-center wow tpfadeLeft"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s"
                >
                  {account_shape.map((item, i) => (
                    <div key={i} className={`tp-account-${item.cls}`}>
                      <img src={item.img} alt="theme-pure" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="tp-account-step-wrapper">
                  <div className="tp-account-section-box mb-40">
                    <h4 className="tp-section-subtitle-2">{sub_title}</h4>
                    <h3 className="tp-section-title-lg">{title}</h3>
                  </div>
                  <div className="tp-account-step mb-50">
                    {account_step.map((setp, i) => (
                      <div
                        key={i}
                        className="tp-account-item d-flex align-items-center"
                      >
                        <span>{setp.number}</span>
                        <p>{setp.info}</p>
                      </div>
                    ))}
                  </div>
                  <div className="tp-account-btn-box">
                    <Link className="tp-btn-green mb-15" href="/contact">
                      {btn_text}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default OpenAccountArea;