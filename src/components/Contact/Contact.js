import React, { memo } from "react";
import SubHeading from "../SubHeading/SubHeading";
import "./Contact.scss";

const Contact = () => {
  const addressesArr = [
    {
      label: "Address:",
      addresses: [
        "Room 503, Tower 2, Lippo Centre, Queensway, Hong Kong",
        "Room D, 9/F, MegaCube, 8 Wang Kwong Road, Kowloon Bay, Kowloon",
        "(all correspondences should be posted to our address in Queensway, Hong Kong)",
      ],
    },
    {
      label: "地址:",
      addresses: [
        "香港: 香港金鐘力寶中心2座5樓503室",
        "九龍: 九龍灣宏光道8號創豪坊9樓D室",
        "(所有信件請寄往金鐘地址)",
      ],
    },
  ];

  const addresses = addressesArr.map((add, index) => (
    <div key={index} className="contactInfoWrapper">
      <p className="label">{add.label}</p>
      <div>
        {add.addresses.map((location, index) => (
          <p key={index}>{location}</p>
        ))}
      </div>
    </div>
  ));

  const contactsArr = [
    {
      label: "Tel 電話:",
      info: "(852) 25 668 123",
    },
    {
      label: "Facimile 傳真:",
      info: "(852) 3007 1961",
    },
    {
      label: "Whatsapp:",
      info: "852 5325 8834",
    },
    {
      label: "Email 電郵:",
      info: "info@standardmark.net",
    },
  ];

  function renderContactInfo(contact) {
    if (contact.label === "Email 電郵:") {
      return <a href={`mailto:${contact.info}`}>{contact.info}</a>;
    } else if (contact.label === "Whatsapp:") {
      const number = contact.info.replace(/\s+/g, "");
      return (
        <a href={`https://wa.me/${number}`} rel="noreferrer" target="_blank">
          + {contact.info}
        </a>
      );
    }
    return <p>{contact.info}</p>;
  }

  const contacts = contactsArr.map((contact, index) => {
    return (
      <div key={index} className="contactInfoWrapper">
        <p className="label">{contact.label}</p>
        <div>{renderContactInfo(contact)}</div>
      </div>
    );
  });

  return (
    <div className="contactWrapper">
      <SubHeading text="Contact us 聯絡我們" />
      {addresses}
      {contacts}

      <div className="contactInfoWrapper">
        <a className="label" href="mailto:info@standardmark.net">
          ENQUIRY 查詢
        </a>
      </div>

      <div className="contactInfoWrapper">
        <a
          href="https://www.facebook.com/standardmark"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-3x fa-facebook-official" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
};

export default memo(Contact);
