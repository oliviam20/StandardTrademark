import React, { memo } from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Contact.scss';

const Contact = () => {
  const addresses = [
    {
      label: 'Address:',
      addresses: [
        'Room 503, Tower 2, Lippo Centre, Queensway, Hong Kong',
        'Room D, 9/F, MegaCube, 8 Wang Kwong Road, Kowloon Bay, Kowloon',
        '(all correspondences should be posted to our address in Queensway, Hong Kong)'
      ]
    }
  ]
  return (
    <div className="contactWrapper">
      <SubHeading text="Contact us 聯絡我們" />
      <div className="contactInfoWrapper">
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
      </div>

      <div className="contactInfoWrapper">
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
      </div>

      <div className="contactInfoWrapper">
        <a className="label" href="mailto:info@standardmark.net">ENQUIRY 查詢</a>
      </div>
    </div>
  )
};

export default memo(Contact);
