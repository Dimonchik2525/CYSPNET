import { SVGSInstaIcon, SVGSTwichIcon, SVGSTwitterIcon, SVGSVkIcon, SVGYoutubeIcon } from "../../SvgIcons";

export const FooterContacts = () => {
   return (
      <div className="footerContacts">
         <div className="footerContacts__container">
            <div className="footerContacts__block">
               <h2 className="footerContacts__title">Контакты</h2>
               <div className="footerContacts__content">
                  <div className="footerContacts__content__mail">
                     <h3 className="footerContacts__content__mail__title">Email:</h3>
                     <a href="mailto:ceo@cyspnet.com" className="footerContacts__content__mail__link">ceo@cyspnet.com</a>
                  </div>
                  <div className="footerContacts__content__socials">
                     <h3 className="footerContacts__content__socials__title">Социальные сети</h3>
                     <ul className="footerContacts__content__socials__list">
                        <li className="footerContacts__content__socials__item">
                           <a href="#" className="footerContacts__content__socials__link">
                              <SVGSVkIcon />
                           </a>
                        </li>
                        <li className="footerContacts__content__socials__item">
                           <a href="#" className="footerContacts__content__socials__link">
                              <SVGYoutubeIcon />
                           </a>
                        </li>
                        <li className="footerContacts__content__socials__item">
                           <a href="#" className="footerContacts__content__socials__link">
                              <SVGSInstaIcon />
                           </a>
                        </li>
                        <li className="footerContacts__content__socials__item">
                           <a href="#" className="footerContacts__content__socials__link">
                              <SVGSTwitterIcon />
                           </a>
                        </li>
                        <li className="footerContacts__content__socials__item">
                           <a href="#" className="footerContacts__content__socials__link">
                              <SVGSTwichIcon />
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default FooterContacts;