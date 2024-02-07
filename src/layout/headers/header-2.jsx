import useSticky from '@/src/hooks/use-sticky';
import Offcanvus from '@/src/common/offcanvus';
import Image from 'next/image';
import Link from 'next/link';
import React,{useState} from 'react';
import NavMenu from './nav-menu';

const hero_content = {
    sign_up_btn: "Conhecer",
}
const {sign_up_btn}  = hero_content

const HeaderTwo = () => {

  const  {sticky} =  useSticky()
 const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            <header className="tp-header-height">
               <div id="header-sticky" className={`"tp-header-2__area header-sticky-bg-2 tp-header-2__transparent tp-header-2__plr z-index-3 ${sticky && "header-sticky"}`}>
                  <div className="container g-0">
                     <div className="row g-0 align-items-center">
                        <div className="col-xl-2 col-lg-2 col-md-6 col-6">
                           <div className="tp-header-2__logo">
                              <Link className="white-logo" href="/"><img width={150} src="/assets/img/logo-branca.svg" alt="" /></Link>
                              <Link className="black-logo" href="/"><img width={150} src="/assets/img/logo.png" alt="" /></Link>
                           </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 d-none d-lg-block">
                           <div className="tp-header-2__main-menu text-center">
                              <nav id="mobile-menu">
                                 <NavMenu /> 
                              </nav>
                           </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-6">
                           <div className="tp-header-2__right d-flex align-items-center justify-content-end">
                              <Link className="tp-btn-green-sm d-none d-md-block" target='_blank' href="https://brasilatuarial.com.br/lp/">{sign_up_btn}</Link>
                              <a className="header-bottom__bar tp-menu-bar d-lg-none" 
                              onClick={() => setSidebarOpen(true)}
                              ><i className="fal fa-bars"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
            <Offcanvus sidebarOpen={sidebarOpen}  setSidebarOpen={setSidebarOpen} />
        </>
    );
};

export default HeaderTwo;