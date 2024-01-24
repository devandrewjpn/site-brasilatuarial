import Link from 'next/link';
import React from "react";
import ArrowLine from '@/src/svg/arrow-line';
import RoundLine from '@/src/svg/round-line';
import useCharAnimation from '@/src/hooks/useCharAnimation';

const hero_content = {
  scroll_btn: "Scroll Down",
  title: <><i><i className="child-1">Um risco continua arriscado quando se pode prevê-lo?</i> </i>{" "}
  </>,
  btn_text: "Saiba mais",
  sub_title: <>Mais de<span>10+ Mil</span> clientes</>,
  
}
const {
  bg_img, 
  scroll_btn,
  title,
  btn_text,
  sub_title, 
} = hero_content;


const HeroArea = () => {
  useCharAnimation('.tp-hero-2__title i.child-1');
  return (
    <>
      <div
        className="tp-hero-2__area tp-hero-2__ptb tp-hero-2__plr z-index fix p-relative"
        style={{ backgroundImage: `url("/atuarial/assets/img/fundo3.jpg")` }}
      >
        <div className="scroll-bg d-none d-sm-block">
          <img src="/atuarial/assets/img/hero/scroll-down.png" alt="theme-pure" />
        </div>
        <div className="tp-hero-2__mouse-scroll smooth d-none d-sm-block">
          <a className="mouse-scroll-btn" href="#payment-method"></a>
          <span>{scroll_btn}</span>
        </div>
        <div className="tp-hero-2__shape-img-1 d-none d-sm-block">
          <ArrowLine />
        </div>
        <div className="container-fluid g-0">
          <div className="row g-0 align-items-end">
            <div className="col-xl-8 col-lg-8">
              <div className="tp-hero-2__title-box">

                <h3 className="tp-hero-2__title">
                  {title}
                </h3>

              </div>
              <div className="tp-hero-2__btn">
                <Link
                  className="tp-btn-green wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s"
                  href="#payment-method"
                >
                  {btn_text}
                </Link>
              </div>
              <div className="tp-hero-2__user p-relative">
                <h4>{sub_title}</h4>
                <div className="tp-hero-2__user-img">
                  <img src="/atuarial/assets/img/hero/hero-user.jpg" alt="theme-pure" />
                </div>
                <div className="tp-hero-2__shape-1">
                  <RoundLine />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroArea;