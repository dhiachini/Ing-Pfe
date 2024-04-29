import React from "react";

const ContactMeta = () => {
  const contactInfoList = [
    {
      title: "Service client totalement gratuit",
      phone: "+(216) 24 992 825",
      phoneLink: "tel:+21624992825", // Use "tel" URI scheme for phone
    },
    {
      title: "Besoin d'une assistance en direct ?",
      mail: "Algetun@gmail.com",
      mailLink: "mailto:chinidhia@gmail.com",
    },
  ];

  return (
    <div className="row mb-12">
      {contactInfoList.map((contact, index) => (
        <div className="col-auto" key={index}>
          <div className="contact-info">
            <p className="text">{contact.title}</p>
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
