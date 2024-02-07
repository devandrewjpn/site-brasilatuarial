import { SocialLinksTwo } from '@/src/common/social-links';
import team_data from '@/src/data/team-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const team_content = {
    title: "Responsáveis pelo projeto",
    des: <>Our clients are the companies and startups who <br /> make the world go round,!</>,
}
const {sub_title, title, des}  = team_content

const TeamArea = ({bg_style}) => {
    return (
        <>
           <div className={`tp-team-area ${bg_style ? "grey-bg pt-120" : "blue-bg"} pb-95`}>   
               <div className="container">
                  <div className={`tp-team-section-wrapper ${bg_style && "tp-team-inner-section"} mb-70`}>
                     <div className="row align-items-end">
                        <div className="col-12">
                           <div className={`tp-team-section-box text-center`}>
                              <h3 className={`${bg_style ? "tp-section-title mb-0 text-black" : "tp-section-title-4"}`}>{title}</h3>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="row justify-content-center">
                    {team_data.slice(0, 4).map((item, i)  => 
                        <div key={i} 
                          className={`col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50 
                                      tp-team-border-right tp-border-after-${item.cls} 
                                      ${bg_style && "team-inner-border-right"}`}
                                      >                             
                           <div className={`tp-team-item text-center ${bg_style && "tp-team-inner-title-color"} z-index`}>    
                              <div className="tp-team-img">
                                 <img src={item.img} alt="" />
                              </div>
                              <div className="tp-team-content">
                                 <h4 className="tp-team-title-sm"><Link href="">{item.name}</Link></h4>
                                 <span style={{display: 'block',margin: '20px 0'}}>{item.job_title}</span>
                                 <p style={{textAlign: 'justify'}}>{item.description}</p>
                                 <p style={{textAlign: 'justify'}}>{item.description2}</p>
                              </div>
                           </div>
                        </div>
                     )} 
                  </div>
               </div>
            </div> 
        </>
    );
};

export default TeamArea;