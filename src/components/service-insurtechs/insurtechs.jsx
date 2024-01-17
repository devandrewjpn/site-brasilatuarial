import Link from 'next/link';
import React from 'react';

const services = [
   {
      id:1,
      title: 'PLANO DE NEGÓCIOS',
      description: 'Elaboração de um plano de negócios estruturado para determinar os objetivos do negócio, testar ideias e a viabilidade operacional, mercadológica e financeira do projeto.'
   },
   {
      id:2,
      title: 'CONDIÇÕES GERAIS DO PLANO DE SEGURO',
      description: 'Elaboração das condições gerais de acordo com os planos de seguros a serem comercializados, contendo minimamente as obrigações e direitos da seguradora, dos segurados e dos beneficiários.'
   },
   {
      id:3,
      title: 'NOTA TÉCNICA ATUARIAL DO PLANO DE SEGURO',
      description: 'Elaboração de nota técnica atuarial para demonstração da viabilidade econômico-financeira dos planos de seguros. Este documento tem por objetivo descrever as características gerais do plano, a formulação de cálculo dos prêmios e das provisões técnicas.'
   },
   {
      id:4,
      title: 'PLANO FINANCEIRO',
      description: 'Elaboração do planejamento financeiro a partir das três principais demonstrações financeiras projetadas para o futuro, são elas: a Demonstração de Resultados, o Fluxo de Caixa e o Balanço Patrimonial. Essas demonstrações são necessárias para avaliar o potencial do negócio. O plano financeiro também incluem a apuração dos indicadores de desempenho, análise de break-even e outras informações financeiras relevantes para o negócio.'
   },
   {
      id:5,
      title: 'CÁLCULOS DAS PROVISÕES TÉCNICAS OBRIGATÓRIAS',
      description: 'Apuração dos valores exigidos pela SUSEP, utilizando informações contábeis, referente aos Recursos Próprios Mínimos e Provisões Técnicas.'
   },
   {
      id:6,
      title: 'PLANO DE DESCONTINUEDADE DAS ATIVIDADES',
      description: 'Consiste na elaboração do planejamento quando do encerramento das atividades.'
   },
   {
      id:7,
      title: 'APURAÇÃO DO CAPITAL DE RISCO',
      description: 'Apuração do montante variável de capital que a seguradora deverá manter, a qualquer tempo, para garantir os riscos inerentes à operação.'
   },
   {
      id:8,
      title: 'AUTORIZAÇÃO PARA FUNCIONAMENTO',
      description: 'Assessoria e condução de processo junto à SUSEP – Superintendência de Seguros Privados, no registro dos produtos a serem comercializados pela operadora e na autorização temporária de funcionamento.'
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