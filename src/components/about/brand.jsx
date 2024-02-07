import Image from 'next/image';
import React from 'react';
import { ToolTip } from '../tooltip';

const brand_content = {
  titel: "Nosso grupo",
  description: <>Especialistas em proteção e seguradoras.</>,

  brand_img: [
    { title: "Brasil Benefícios", img: "https://brasilbeneficios.club/assets/images/landing/bb_logo.svg", delay: ".2s", imgSize: 150, link: 'https://brasilbeneficios.club' },
    { title: "Lua Films", img: "https://luafilms.com.br/public/assets/s_asset/images/favicon-luafilms.svg", delay: ".4s", imgSize: 60, link: 'https://luafilms.com.br' },
    { title: "Brasil All Time", img: "https://brasilalltime.com.br/assets/images/favicon.png", delay: ".8s", imgSize: 45, link: 'https://brasilalltime.com.br' },
    { title: "Data Science", img: "https://www.brasilatuarialds.com.br/assets/ds_assets/_img/favicon.png", delay: ".9s", imgSize: 45, link: 'https://www.brasilatuarialds.com.br' },
    { title: "Agência Brasil Digital", img: "https://agenciabrasildigital.com.br/assets/images/flecha.svg", delay: ".9s", imgSize: 45, link: 'https://agenciabrasildigital.com.br' }
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
                      <ToolTip text={item.title}>
                        <div className="mb-25 p-3">
                          <img width={item.imgSize} src={item.img} alt="" />
                        </div>
                      </ToolTip>
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