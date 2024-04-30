import React from "react";

const ContactMeta = () => {
  const contactInfoList = [
    {
      title: "Service client totalement gratuit",
      phone: "+(216) 24 992 825",
      phoneLink: "tel:+21624992825", // Changed phoneLink to tel: URI
    },
    {
      title: "Besoin d'une assistance en direct ?",
      mail: "Algétun@gmail.com",
      mailLink: "chinidhia@gmail.com", // Changed mailLink to direct email address
    },
  ];

  return (
    <div className="row mb-4 mb-lg-5">
      {contactInfoList.map((contact, index) => (
        <div className="col-auto" key={index}>
          <div className="contact-info">
            <p className="info-title">{contact.title}</p>
            {contact.phone && (
              <h6 className="info-phone">
                <a href={contact.phoneLink}>{contact.phone}</a>
              </h6>
            )}
            {contact.mail && (
              <h6 className="info-mail">
                <a href={contact.mailLink}>{contact.mail}</a>
              </h6>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactMeta;
