import StartIcon from '@/src/svg/start-icon';
import React, {useRef} from 'react';
import Slider from 'react-slick'; 

const slider_data = [
    {
      id: 1,
      name: 'Roney',
      job: 'CEO LIONS',
      info: 'Nós da Lions parabenizamos a todo time da Brasil Atuarial pelo belíssimo trabalho, e meu agradecimento em especial ao Enrico pela presteza e atenção sempre que precisamos. Já se passaram alguns anos e a parceria se fortalece ano após ano, resultado de um trabalho dedicado e com propósitos. Conte sempre conosco e que venham novos desafios. Forte abraço Enrico e todo seu time da Brasil Atuarial.',
      img: 'https://brasilatuarial.com.br/assets/img/gallery/lions-min.webp',
    },
    {
      id: 2,
      name: 'Rodrigo Felipe',
      job: 'CEO AGV Brasil',
      info: 'Ter a Brasil Atuarial como parceira é certeza de tranquilidade. Profissionais competentes e dinâmicos, que conseguem através do vasto conhecimento nos trazer clareza e direcionamento nas operações. Agradecemos a toda equipe representada pelo Enrico, toda dedicação, presteza e descrição em nossa caminhada. Sucesso. Que continuem brilhando em todo território nacional!',
      img: 'https://brasilatuarial.com.br/assets/img/gallery/rodrigo-min.webp',
    },
    {
      id: 3,
      name: 'Alexandre Scarpelli',
      job: 'CEO APVS Brasil',
      info: 'A APVS Brasil desde de 2014 parceira da Brasil Atuarial, onde criamos um relacionamento profissional de sucesso, ao qual resultaram em grandes projetos e resultado extraordinário. Esperamos sinceramente podermos continuar lado a lado e por muito tempo, desenvolvendo novos projetos e estratégias cada vez mais ousadas.',
      img: 'https://brasilatuarial.com.br/assets/img/gallery/alexandre-scarpelli-min.webp',
    },
    {
      id: 4,
      name: 'André Saliba',
      job: 'COO GETRACK',
      info: 'A Brasil Atuarial é uma empresa parceira a mais de 5 anos, prezamos muito por relações de longo prazo e encontramos nesta parceria uma relação de extrema confiança, onde indicamos nossos clientes que sempre nos retornam com feedbacks positivos em relação a qualidade dos serviços e do atendimento.',
      img: 'https://brasilatuarial.com.br/assets/img/gallery/andre-saliba-min.webp',
    }
  ]


// slider setting 
const setting = {	
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    dots:true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
        
    ]
}


const testimonial_content = {
    bg_img: "/atuarial/assets/img/fundo2.png",
    title: <>O que nossos clientes dizem</>
}
const {bg_img, title}  = testimonial_content
const TestimonialArea = () => {
    const sliderRef = useRef()
    return (
        <>
            <div className="tp-testimonial-2-area pt-110 pb-120" 
            style={{backgroundImage: `url(${bg_img})`}}
            >
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col-12">
                        <div className="tp-testimonial-2-section-box mb-15 text-center">
                           <h3 className="tp-section-title-lg text-white">{title}</h3>
                        </div>
                     </div>
                  </div>
                  <div className="row">

                     <div className="col-12">
                        <div className="tp-testimonial-2-section">

                           <Slider
                           {...setting} 
                           ref={sliderRef} 
                            className="tp-testimonial-2-slider-active">
                            {slider_data.map((item, i)  => 
                                 <div key={i} className="tp-testimonial-2-item p-relative wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                                    <div className="tp-testimonial-2-border-shape"></div>
                                    <div className="tp-testimonial-2-star">
                                       <span>
                                        <StartIcon />
                                        <StartIcon />
                                        <StartIcon />
                                        <StartIcon />
                                        <StartIcon /> 
                                       </span> 
                                    </div>
                                    <div className="tp-testimonial-2-content">
                                       <p>{item.info}</p>
                                    </div>
                                    <div className="tp-testimonial-2-author d-flex align-items-center">
                                       <div className="tp-testimonial-2-img">
                                          <img src={item.img} alt="theme-pure" />
                                       </div>
                                       <div className="tp-testimonial-2-author-info">
                                          <h5>{item.name}</h5>
                                          <span>{item.job}</span>
                                       </div>
                                    </div>
                                 </div> 
                                )
                            } 
                           </Slider>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default TestimonialArea;