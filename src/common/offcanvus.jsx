import Link from 'next/link';
import React from 'react';
import MobileMenus from '../layout/headers/mobile-menus';

const Offcanvus = ({ sidebarOpen, setSidebarOpen }) => {
    return (
        <>
            <div className="tpoffcanvas-area">
                <div className={`tpoffcanvas ${sidebarOpen && "opened"}`}>
                    <div className="tpoffcanvas__close-btn">
                        <button className="close-btn" onClick={() => setSidebarOpen(false)}><i class="fa-regular fa-circle-xmark"></i></button>
                    </div>
                    <div className="tpoffcanvas__logo text-center">
                        <Link href="/" onClick={() => setSidebarOpen(false)}>
                            <img src="/assets/img/logo-branca.svg" alt="" />
                        </Link>
                    </div>
                    <div className="mobile-menu mean-container">
                        <MobileMenus />
                    </div>
                </div>
            </div>
            <div className={`body-overlay ${sidebarOpen && "apply"}`} onClick={() => setSidebarOpen(false)}></div>
        </>
    );
};

export default Offcanvus;