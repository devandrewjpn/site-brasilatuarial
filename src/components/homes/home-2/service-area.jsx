import Link from 'next/link';
import React from 'react';

const service_content = {
    title: <>Isso é o que podemos proporcionar para sua Entidade</>,
    des: <>Principais serviços</>,

    users_data: [
        {
            id: 1, 
            users_count: <>3.5<i>m</i></>,
            users_status: <>Active Users</>,

        },
        {
            id: 2, 
            users_count: <>240<i>+</i></>,
            users_status: <>Trusted Companies</>,

        },
        {
            id: 3, 
            users_count: <>78<i>k</i></>,
            users_status: <>Customer care</>,

        },
    ],
    service_data: [
        {
            id: 1,
            color: "",
            title: "Rateio: Apuração e Implementação",
            img: "/assets/img/service/sv-icon-2-1.png",
        },
        {
            id: 2,
            color: "",
            title: "Análise Atuarial",
            img: "/assets/img/service/sv-icon-2-2.png",
        },
        {
            id: 3,
            color: "",
            title: "Análise Financeira",
            img: "/assets/img/service/sv-icon-2-3.png",
        }
    ],

    free_tools_title: "O que mais podemos oferecer:",
    free_tools: [
        <>Cálculo da contribuição mensal</>,
        <>Nota Técnica Atuarial</>,
        <>Plano de negócios</>,
        <>Precificação</>,
        <>Estudo de mercado</>,
        <>Análise de benefícios</>,
    ]

}
const {title, des, users_data, service_data , free_tools_title, free_tools}  = service_content 

const ServiceArea = () => {
    return (
        <>
            <div className="tp-service-2__area p-relative pt-70 pb-160">
               <div className="tp-service-2__shape">
                  <img src="/assets/img/service/sv-bg-2-1.jpg" alt="" />
               </div>
               <div className="container z-index-5">
                  <div className="row align-items-center mb-50">
                     <div className="col-12">
                        <div className="tp-service-2__section-box">
                           <h3 className="tp-section-title-lg pb-20">{title}</h3>
                           <p>{des}</p>
                        </div>
                     </div>
                  </div>
                  <div className="row gx-60">

                    {service_data.map((item, i)  => 
                        <div key={i} className="col-xl-3 col-lg-3 col-md-6 mb-40 wow tpfadeUp" 
                        data-wow-duration=".9s" data-wow-delay=".8s">
                        <div className="tp-service-2__item-wrapper p-relative">
                           <div className="tp-service-2__item d-flex justify-content-between flex-column">
                              <div className="tp-service-2__icon">
                                 <img src={item.img} alt="" />
                              </div>
                              <div className="tp-service-2__text">
                                 <h4 className="tp-service-2__title-sm"><Link href="/servico-entidades">{item.title}</Link></h4>
                                 <Link className="tp-service-2__link" href="/servico-entidades">Explore
                                    <i className="far fa-arrow-right"></i>
                                 </Link>
                              </div>
                           </div>
                           <div className={`tp-service-2__bg-shape tp-service-2__color-${item.color}`}></div>
                        </div>
                     </div>
                        
                        )
                    } 

                  </div>

                  <div className="row justify-content-center">
                     <div className="col-xl-10 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                        <div className="tp-service-2__bottom-wrapper p-relative mt-110">
                           <div className="tp-service-2__feature-item">
                              <h4 className="tp-service-2__feature-title">{free_tools_title}</h4>
                              <div className="tp-service-2__feature-box d-flex justify-content-between">
                                 <div className="tp-service-2__feature-list">
                                    <ul>
                                        {free_tools.map((list, i)  => <li key={i}>{list}</li> )}
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
        </>
    );
};

export default ServiceArea;