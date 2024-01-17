import Link from 'next/link';
import React from 'react';

const services = [
   {
      id:1,
      title: 'RATEIO: APURAÇÃO E IMPLEMENTAÇÃO',
      description: 'Apuração refinada afim de identificar a metodologia de rateio aderente às características da base através de testes de adequação, pesquisa de mercado e simulações do modelo. Após definida a metodologia, a Brasil Atuarial oferece todo o suporte técnico e operacional na implementação do rateio e acompanhamento mensal.'
   },
   {
      id:2,
      title: 'ANÁLISE FINANCEIRA',
      description: 'Realização de análises financeiras da carteira afim de verificar e acompanhar a evolução dos custos com base no plano de contas padrão, seguindo as boas práticas de gestão. A análise financeira, além de apurar o resultado da operação, possibilita melhor entendimento a cerca da participação de cada centro de custos e, consequentemente, auxilia na formação do valor da contribuição mensal do plano. A análise financeira é de suma importância para análise de liquidez e solvência da Entidade.'
   },
   {
      id:3,
      title: 'ANÁLISE ATUARIAL',
      description: 'Consiste na análise técnica-atuarial da carteira, através da análise de exposição e apuração de diversos indicadores essenciais para auxiliar na tomada de decisões estratégicas para obter melhoria contínua de resultado operacional e performance.'
   },
   {
      id:4,
      title: 'PLANEJAMENTO ORÇAMENTÁRIO',
      description: 'Análise da situação financeira atual para construção de orçamento baseado em metodologia de trabalho previamente implantada e metas do planejamento estratégico definidas.'
   },
   {
      id:5,
      title: 'CÁLCULO DA CONTRIBUIÇÃO MENSAL',
      description: 'Apuração do valor mensal do plano para adequação dos valores praticados da carteira existente ou para distribuição de novos planos com diferentes características.'
   },
   {
      id:6,
      title: 'ESTUDOS DE VIABILIDADE',
      description: 'Avaliação da viabilidade e sustentabilidade de determinada operação relacionada diretamente com os serviços oferecidos pela Entidade, análises de mercado e planejamentos financeiros.'
   },
   {
      id:7,
      title: 'APURAÇÃO DA RESERVA DE RUÍNA',
      description: 'Apuração da modelagem de cálculo para a constituição de reserva aplicada às entidades de autogestão. A reserva de ruína é constituída previamente para resguardar o momento que os eventos ocorridos superem as contribuições mensais.'
   },
   {
      id:8,
      title: 'ALIENAÇÃO DA CARTEIRA',
      description: 'Estudos e avaliações para a aquisição ou a transferência de carteiras.'
   },
   {
      id:9,
      title: 'NOTA TÉCNICA ATUARIAL',
      description: 'Elaboração de nota técnica atuarial para demonstração da viabilidade econômico-financeira dos planos e serviços. Este documento tem por objetivo descrever as características gerais do plano de benefícios, a formulação de cálculo do rateio e da reserva técnica, bem como as bases técnicas e premissas utilizadas.'
   },
   {
      id:10,
      title: 'INDICADORES MERCADOLÓGICOS',
      description: 'Relatório com detalhamento amplo do mercado de planos de autogestão e seguros de Automóvel, contemplando informações abrangentes relacionadas à frota nacional de veículos, frota segura, perfil, região, indicadores sociais regionalizados e reserva de mercado.'
   },
   {
      id:11,
      title: 'ELABORAÇÃO DE NOVOS PRODUTOS',
      description: 'Elaboração de produtos que observem a realidade e a tendência do mercado, com desenvolvimento de um plano de ação que atenda o planejamento estratégico da Entidade.'
   },
   {
      id:12,
      title: 'PLANEJAMENTO ESTRATÉGICO DE DISTRIBUIÇÃO',
      description: 'Avaliação e reestruturação das principais políticas de distribuição da Entidade, tais como: remuneração, inadimplência, retenção e manutenção dos contratos de adesão.'
   }
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