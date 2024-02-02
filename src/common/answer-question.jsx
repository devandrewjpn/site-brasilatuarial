import React,{useState} from "react";

const questions = [
  {
     id: 1,
     show: true,
     accordion_id: "headingOne",
     collapsed: "",
     data_bs_target: "#collapseOne",
      aria_controls: "collapseOne", 
     answer: 'Qual é a função desempenhada por um atuário?',
     question: <>O atuário desempenha um papel crucial na proteção financeira e na gestão de riscos.<br /><br />A função do atuário é lidar com riscos financeiros, identificando, analisando e quantificando eventos que possam afetar negativamente pessoas, empresas ou entidades. Além de atuar nas áreas tradicionais de seguros e previdência, o atuário é também um gestor de riscos, capaz de trabalhar em diversas instâncias da gestão de riscos. Esse profissional desenvolve estratégias para diagnosticar problemas financeiros e criar modelos de ação em diferentes segmentos do mercado.</>,
     actice: "",
  },
  {
     id: 2,
     accordion_id: "headingTwo",
     collapsed: "collapsed",
     data_bs_target: "#collapseTwo",
    aria_controls: "collapseTwo", 
     answer: 'Quais são as competências e experiências da Brasil Atuarial no segmento de proteção patrimonial oferecida pelas entidades mutualistas de autogestão?',
     question: <>Estamos há 10 atendendo entidades mutualista, seguradoras e Insurtechs atuantes no mercado de proteção patrimonial do Brasil.<br /><br />
      A Brasil Atuarial é uma empresa especializada na prestação de serviços de assessoria e de consultoria atuarial. Nosso o propósito é oferecer soluções estratégicas e customizadas de acordo com necessidade de cada um dos nossos clientes, 
      bem como objetiva suprir as demandas atuariais nas áreas de seguros e de entidades de autogestão de planos contra riscos patrimoniais, oferecendo todo o suporte técnico-atuarial e operacional necessários.<br /><br /><br /><br />
      O que fazemos é trazer soluções em gestão de risco e gestão financeira para as entidades mutualistas, realizando trabalhos com base na própria experiência da entidade ou na experiência do mercado.
      Nosso objetivo é, através de consultorias pontuais e customizadas, difundir conhecimento e aprimorar aculturamento técnico no mercado. Para Insurtechs,
      trazemos soluções de regulamenta-las assessorando no atendimento das exigências do Sandbox Regulatório da SUSEP e da autorização para operar como seguradora no mercado de seguros brasileiro.
      Plano de Negócios, Condições Gerais e Nota Técnica Atuarial são alguns dos documentos bases que desenvolvemos nesse processo consultivo. Para Seguradoras, realizamos avaliação Atuarial, cálculos de provisões técnicas,
      teste de adequação de passivo, bem como elaboramos novos produtos e modelos de otimização de pricing.<br /><br />
      Todo trabalho é desenvolvido dentro das melhores práticas atuariais de mercado.
     </>,
     actice: "",
  },
  {
    id: 3,
    accordion_id: "headingThree",
    collapsed: "",
    data_bs_target: "#collapseThree",
     aria_controls: "collapseThree", 
    answer: 'Quais são os serviços abrangidos pelas práticas atuariais oferecidas pela Brasil Atuarial?',
    question: <>Os Serviços Atuariais da Brasil Atuarial incluem diversos serviços direcionados principalmente à solvência da operação e ao crescimento sustentável. Aqui estão algumas coisas que eles fazem:<br /><br />
      1. Avaliação Atuarial com acompanhamento mensal: Avalia e monitora os dados para entender melhor as tendências e os riscos relacionados à operação.<br /><br />
      2. Avaliação Financeira: Além do aspecto atuarial, realizamos a apuração de resultado para entender e acompanhar o resultado gerado pela gestão e pelo gerenciamento de risco.<br /><br />
      3. Apuração do valor técnico para cobrir as despesas de sinistro: Apuração refinada afim de identificar a metodologia de rateio aderente às características da base através de testes de adequação, pesquisa de mercado e simulações do modelo.<br /><br />
      4. Apuração do valor da contribuição mensal: Apuração do valor mensal do plano para adequação dos valores praticados ou para distribuição de novos planos com diferentes características.<br /><br />
      5. Revisão e Reestruturação dos planos: Consolidação das avaliações atuarial e financeira para avaliar a necessidade de revisão dos planos, valores e benefícios disponíveis.<br /><br />
      6. Estudos de Viabilidade: Avaliação da viabilidade e sustentabilidade de determinada operação relacionada diretamente com os serviços oferecidos pela Entidade, análises de mercado e planejamentos financeiros.<br /><br />
      7. Planejamento orçamentário: Análise da situação financeira atual para construção de orçamento baseado em metodologia de trabalho previamente implantada e metas do planejamento estratégico definidas.<br /><br />
      8. Planejamento estratégico de distribuição: Avaliação e reestruturação das principais políticas de distribuição da Entidade, tais como: remuneração, inadimplência, retenção e manutenção dos contratos de adesão.<br /><br />
      9. Pesquisa de Mercado: Relatório com detalhamento amplo do mercado de planos de autogestão e seguros de Automóvel, contemplando informações abrangentes relacionadas à frota nacional de veículos, frota segura, perfil, região, indicadores sociais regionalizados e reserva de mercado.<br /><br />
      10. Elaboração de pesquisa e publicação de artigos: Produzimos conteúdo informativo e pesquisas de mercado com o objetivo de compartilhar conhecimento e insights relevantes sobre o mercado.<br /><br />
      11. Planejamento Estratégico: Colaboram no desenvolvimento de ações estratégicas alinhadas com o objetivo da entidade.<br /><br />
    </>,
    actice: "",
  },
  {
    id: 4,
    accordion_id: "headingFour",
    collapsed: "",
    data_bs_target: "#collapseFour",
     aria_controls: "collapseFour", 
    answer: 'Qual o papel e a importância da gestão de risco atuarial em entidades de autogestão de planos que cobrem riscos patrimoniais automotivos.',
    question: <>A gestão de risco atuarial nas entidades de autogestão de planos contra riscos patrimoniais automotivos envolve o acompanhamento técnico na definição mensal do rateio e a constituição de um fundo mútuo para proteger essas entidades de possíveis desvios e oscilações de eventos que poderiam afetar sua saúde financeira.</>,
    actice: "",
 },
 {
  id: 5,
  accordion_id: "headingFive",
  collapsed: "",
  data_bs_target: "#collapseFive",
   aria_controls: "collapseFive", 
  answer: 'Como as entidades mutualistas de autogestão minimizam impactos financeiros causados por sazonalidades ou eventos de grande magnitude?',
  question: <>Elas minimizam esses impactos realizando estudos específicos, atualizando constantemente os dados, e, se possível, criando um fundo mútuo. Estas práticas ajudam a manter a estabilidade financeira da entidade e a preservar a relação entre a entidade e seus associados ou cooperados.</>,
  actice: "",
},
]

const AnswerQuestion = ({style}) => {
  const [shadow , setShadow ] = useState(2) 
  
  return (
    <>
      <div className="tp-custom-accordion">
        <div className={`accordion ${style && "tp-inner-font"}`} id="accordionExample">
          {questions.map((item) => (
            <div onClick={() => setShadow(item.id)} key={item.id} 
                 className={`accordion-items ${item.show} ${shadow === item.id && "tp-faq-active"}`}>
              <h2 className="accordion-header" id={item.accordion_id}>
                <button
                  className={`accordion-buttons ${item.collapsed}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={item.data_bs_target}
                  aria-expanded={item.aria_expanded}
                  aria-controls={item.aria_controls}
                >
                  {item.answer}
                  <span className="accordion-btn"></span>
                </button>
              </h2>
              <div
                id={item.aria_controls}
                className={`accordion-collapse collapse ${item.show ? "show" : ""}`}
                aria-labelledby={item.accordion_id}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-content">
                  <p>{item.question}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AnswerQuestion;
