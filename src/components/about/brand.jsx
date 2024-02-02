import Image from 'next/image';
import React from 'react';

const brand_content = {
  titel: "Nosso grupo",
  description: <>Especialistas em proteção e seguradoras.</>,

  brand_img: [
    { img: "https://brasilbeneficios.club/assets/images/landing/bb_logo.svg", delay: ".2s", imgSize: 150, link: 'https://brasilbeneficios.club' },
    { img: "https://luafilms.com.br/public/assets/s_asset/images/favicon-luafilms.svg", delay: ".4s", imgSize: 60, link: 'https://luafilms.com.br' },
    { img: "https://dygo.com.br/assets/site/img/dygo/LogoDygo_Catho.png", delay: ".6s", imgSize: 150, link: 'https://dygo.com.br' },
    { img: "https://brasilalltime.com.br/assets/images/favicon.png", delay: ".8s", imgSize: 45, link: 'https://brasilalltime.com.br' },
    { img: "https://www.brasilatuarialds.com.br/assets/ds_assets/_img/favicon.png", delay: ".9s", imgSize: 45, link: 'https://www.brasilatuarialds.com.br' },
    { img: "https://agenciabrasildigital.com.br/assets/images/flecha.svg", delay: ".9s", imgSize: 45, link: 'https://agenciabrasildigital.com.br' }

  ]
}
const { titel, description, brand_img } = brand_content


const Brand = () => {
  return (
    <>
      <div className="ab-brand-area pt-50">
        <div className="container">
          <div className="ab-brand-border-bottom pb-90">
            <div className="row">
              <div className="col-12">
                <div className="ab-brand-section-box text-center mb-50">
                  <h4 className="ab-brand-title">{titel}</h4>
                  <p>{description}</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 justify-content-center">
                  {brand_img.map((item, i) => (
                    <a
                      key={i}
                      className="col-lg-2 wow tpfadeUp"
                      data-wow-duration=".9s"
                      href={item.link}
                      target='_blank'
                      data-wow-delay={item.delay}
                    >
                      <div className="mb-25 p-3">
                        <img width={item.imgSize} src={item.img} alt="theme-pure" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;