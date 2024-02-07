import Link from "next/link";
import React from "react";
import SEO from "../common/seo";

// error shape import here 
import error_shape_1 from "../../public/assets/img/login/error-shape.png";
import error_shape_2 from "../../public/assets/img/login/text-404.png";
import FooterTwo from "../layout/footers/footer-2";


const index = () => {
  return (
    <>
    <SEO pageTitle={"Oops.! Vai aonde?"} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div className="tp-error-area tp-error-ptb p-relative">
              <div className="tp-error-left-shape">
                <img src={error_shape_1} alt="" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-error-content-box text-center mb-40">
                      <img src={error_shape_2} alt=""
                      />
                    </div>
                    <div className="tp-error-text-box text-center">
                      <h4 className="error-title-sm">Página não encontrada!</h4>
                      <p>Talvez seja melhor voltar para o começo.</p>
                      <Link
                        className="tp-btn-inner tp-btn-hover alt-color-black"
                        href="/"
                      >
                        <span> Início</span>
                        <b></b>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <FooterTwo />
        </div>
      </div>
    </>
  );
};

export default index;
