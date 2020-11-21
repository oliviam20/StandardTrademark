import React, { memo } from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Contact.scss';

const Contact = () => {
  const addressesArr = [
    {
      label: 'Address:',
      addresses: [
        'Room 503, Tower 2, Lippo Centre, Queensway, Hong Kong',
        'Room D, 9/F, MegaCube, 8 Wang Kwong Road, Kowloon Bay, Kowloon',
        '(all correspondences should be posted to our address in Queensway, Hong Kong)'
      ]
    },
    {
      label: '地址::',
      addresses: [
        '香港: 香港金鐘力寶中心2座5樓503室',
        '九龍: 九龍灣宏光道8號創豪坊9樓D室',
        '(所有信件請寄往金鐘地址)'
      ]
    }
  ];

  const addresses = addressesArr.map((add, index) => (
    <div key={index} className="contactInfoWrapper">
        <p className="label">{add.label}</p>
        <div>
          {add.addresses.map((loc, index) => <p key={index}>{loc}</p>)}
        </div>
      </div>
  ));

  const contactsArr = [
    {
      label: 'Tel 電話:',
      info: '(852) 25 668 123'
    },
    {
      label: 'Facimile 傳真:',
      info: '(852) 3007 1961'
    },
    {
      label: 'Whatsapp:',
      info: '+852 5325 8834'
    },
    {
      label: 'Email 電郵:',
      info: 'info@standardmark.net'
    }
  ];

  const contacts = contactsArr.map((contact, index) => {
    // if (contact.label === 'Email 電郵:') {
    //   return (<a href="mailto:info@standardmark.net">info@standardmark.net</a>)
    // }
    const info = contact.label === 'Email 電郵:' ? <a href={`mailto:${contact.info}`}>{contact.info}</a> : <p>{contact.info}</p>
    return (
      <div key={index} className="contactInfoWrapper">
        <p className="label">{contact.label}</p>
        <div>
          {info}
        </div>
      </div>
    )
  })

  return (
    <div className="contactWrapper">
      <SubHeading text="Contact us 聯絡我們" />
      {addresses}
      {/* <div className="contactInfoWrapper">
        <p className="label">Address:</p>
        <div>
          <p>Room 503, Tower 2, Lippo Centre, Queensway, Hong Kong</p>
          <p>Room D, 9/F, MegaCube, 8 Wang Kwong Road, Kowloon Bay, Kowloon</p>
          <p>(all correspondences should be posted to our address in Queensway, Hong Kong)</p>
        </div>
      </div>

      <div className="contactInfoWrapper">
        <p className="label">地址:</p>
        <div>
          <p>香港: 香港金鐘力寶中心2座5樓503室</p>
          <p>九龍: 九龍灣宏光道8號創豪坊9樓D室</p>
          <p>(所有信件請寄往金鐘地址)</p>
        </div>
      </div> */}

      {contacts}
      {/* <div className="contactInfoWrapper">
        <p className="label">Tel 電話:</p>
        <div>
          <p>(852) 25 668 123</p>
        </div>
      </div>

      <div className="contactInfoWrapper">
        <p className="label">Facimile 傳真:</p>
        <div>
          <p>(852) 3007 1961</p>
        </div>
      </div>

      <div className="contactInfoWrapper">
        <p className="label">Whatsapp:</p>
        <div>
          <p>+852 5325 8834</p>
        </div>
      </div>

      <div className="contactInfoWrapper">
        <p className="label">Email 電郵:</p>
        <div>
          <a href="mailto:info@standardmark.net">info@standardmark.net</a>
        </div>
      </div> */}

      <div className="contactInfoWrapper">
        <a className="label" href="mailto:info@standardmark.net">ENQUIRY 查詢</a>
      </div>
    </div>
  )
};

export default memo(Contact);
