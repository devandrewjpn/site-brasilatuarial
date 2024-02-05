import Link from 'next/link';
import React from 'react';

const services = [
   {
      id:1,
      title: 'AVALIAÇÃO ATUARIAL',
      description: 'Responsabilidade técnica junto à SUSEP, nota técnica de registro de produto e de provisões técnicas, tarifação de seguro, cálculo e análise da sinistralidade, cálculo e acompanhamento das garantias financeiras, avaliação do equilíbrio atuarial da seguradora e de seus planos de seguros, elaboração e manutenção da política de subscrição de risco.'
   },
   {
      id:2,
      title: 'ELABORAÇÃO DE NOVOS PRODUTOS',
      description: 'Elaboração de produtos que observem a realidade e a tendência do mercado, com desenvolvimento de um plano de ação que atenda o planejamento estratégico da organização.'
   },
   {
      id:3,
      title: 'OTIMIZAÇÃO DE PRICING',
      description: 'Consiste na utilização de algoritmos capazes de melhorar a rentabilidade de uma carteira de seguros adotando diferentes componentes para que o processo funcione corretamente. Bem como, objetiva adequar o prêmio do seguro às características de risco do segurado.'
   },
   {
      id:4,
      title: 'PORTIFÓLIO DE PRODUTOS',
      description: 'Avaliação dos produtos comercializados versus mercado em que a seguradora está inserida, com possíveis adequações de acordo com a necessidade observada.'
   },
   {
      id:5,
      title: 'ALIENAÇÃO DA CARTEIRA',
      description: 'Estudos e avaliações para a aquisição ou transferência de carteira de seguros.'
   },
]


const EntidadeService = () => {
   return (
      <>
         <div className="tp-service-area pb-120 z-index">
            <div className="container">
               <div className="row">

                  {services.map((item, i) =>
                     <div key={i} className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-service-sm-item mb-30 d-flex flex-column justify-content-between" style={{minHeight: '520px'}}>
                           <div className="tp-service-sm-content">
                              <span>Serviço</span>
                              <h3 className="tp-service-sm-title"><Link href="">{item.title}</Link></h3>
                              <p style={{textAlign: 'justify'}}>{item.description}</p>
                           </div>
                        </div>
                     </div>
                  )
                  }
               </div>
            </div>
         </div>
      </>
   );
};

export default EntidadeService;