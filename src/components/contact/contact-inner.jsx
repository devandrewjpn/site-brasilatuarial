import Link from "next/link";
import React from "react";

const inner_content = {

  contact_data: [
    {
      id: 1,
      icon: "/assets/img/contact/contact-icon-sm-1.png",
      title: "contato@brasilatuarial.com.br",
      link: "mailto:contato@brasilatuarial.com.br",
    },
    {
      id: 2,
      icon: "/assets/img/contact/contact-icon-sm-2.png",
      title: "(31) 2510 8536",
      link: "tel:+553125108536",
    },
    {
      id: 3,
      icon: "/assets/img/contact/contact-icon-sm-3.png",
      title: "Rua Batista Santiago, 81 - BH/MG",
      link: "https://www.google.com/maps/place/R.+Batista+Santiago,+81+-+Liberdade,+Belo+Horizonte+-+MG,+31270-230/@-19.897802,-44.0103913,15z/data=!4m6!3m5!1s0xa6907b548e9d1b:0xd79cdda9523ab965!8m2!3d-19.8636133!4d-43.9531032!16s%2Fg%2F11c5h_07yr?entry=ttu",
    },
  ],
};
const { contact_data } = inner_content;

const ContactInner = () => {
  return (
    <>
      <div className="contact-inner-area pb-130">
        <div className="container">
          <div className="contact-inner-wrapper">
            <div className="row gx-0">
              {contact_data.map((item, i) => (
                <div key={i} className="col-xl-4 col-lg-4">
                  <div className="contact-inner-item d-flex align-items-center justify-content-center">
                    <div className="contact-inner-img contact-img-1">
                      <img src={item.icon} alt="" />
                    </div>
                    <div className="contact-inner-link">
                      <Link href={`${item.link}`}>{item.title}</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> 
    </>
  );
};

export default ContactInner;
