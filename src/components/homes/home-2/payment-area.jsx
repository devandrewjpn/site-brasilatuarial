import Link from 'next/link';
import React from 'react';

const payment_content = {
    title: <>Nós somos uma empresa de prestação de serviços Atuariais</>,
    sub_title: <>O que oferecemos</>,
    box_1: [
        {
            id: 1,
            col: "md-6",
            cls: "2 tpfadeLeft",
            delay: ".3s",
            title: "O que fazemos",
            des: <>O que fazemos é trazer soluções em gestão de risco e gestão financeira para as entidades mutualistas, realizando trabalhos com base na própria experiência estatística da entidade ou na experiência do mercado.</>,
            img: "/assets/img/lupa.png"

        },
        {
            id: 2,
            col: "md-6",
            cls: "3 tpfadeRight",
            delay: ".5s",
            title: "Propósito",
            des: <>Nosso propósito é, através de consultorias pontuais e customizadas, difundir conhecimento e aprimorar aculturamento técnico no mercado. Tudo isso com entrega e apresentação de estudo de caso, com consultorias educativas, com acompanhamento, treinamento e preparação de equipe.</>,
            img: "/assets/img/missao.png"

        },



    ],
    box_3_title: <>A Brasil</>,
    box_3_des: <>A Brasil Atuarial é uma empresa especializada na prestação de serviços de assessoria e de Consultoria Atuarial. Fundada em 2014, com o propósito bem definido de oferecer soluções estratégicas e customizadas à necessidade de cada um dos nossos clientes, bem como objetiva suprir as demandas atuariais nas áreas de seguros e de entidades de autogestão de planos contra riscos patrimoniais, oferecendo todo o suporte técnico-atuarial e operacional necessários.</>,
    box_3_btn: "Saiba mais",

}
const { title, sub_title, box_1, box_3_title, box_3_des, box_3_btn } = payment_content

const PaymentArea = () => {
    return (
        <>
            <div id="payment-method" className="tp-payment__area pt-110 pb-110">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7">
                            <div className="tp-payment__title-box text-center mb-55">
                                <h3 className="tp-section-title-lg">{title}</h3>
                                <p>{sub_title}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">

                        <div className="col-xl-12">
                            <div className="row">

                                {box_1.map((item, i) =>
                                    <div key={i} className="col-md-6 mb-30">
                                        <div className={`tp-payment__item tp-payment__bg-color-${item.cls} p-relative z-index wow `}
                                            data-wow-duration=".9s"
                                            data-wow-delay={item.delay}>

                                            <div className="tp-payment__content">
                                                <h3 className="tp-payment__title">{item.title}</h3>
                                                <p> {item.des}</p>
                                            </div>
                                            <img className='card_img__icon' width={200} src={item.img} alt="" />

                                        </div>
                                    </div>
                                )
                                }
                            </div>
                        </div>

                        <div className="col-xl-12 mb-30">
                            <div className="company__card__bg tp-payment__item p-relative z-index wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                                <div className="tp-payment__shape-1">
                                    <img src="/assets/img/payment/background.png" alt="" />
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="tp-payment__content tp-payment__content-space">
                                            <h3 className="tp-payment__title">{box_3_title}</h3>
                                            <p>{box_3_des}</p>
                                            <Link href="/about">{box_3_btn}<i class="fa-solid fa-chevron-right"></i></Link>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="tp-payment__shape-2">
                                            {/* <img src={payment_img_1} alt="" /> */}
                                        </div>
                                        <div className="tp-payment__shape-3 d-none d-sm-block">
                                            {/* <img src={payment_img_2} alt="" /> */}
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

export default PaymentArea;