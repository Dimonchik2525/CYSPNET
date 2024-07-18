import { SVGSupport1Icon, SVGSupport2Icon, SVGSupportVKIcon } from "../../SvgIcons";

export const FooterSupport = () => {
   return (
      <section className="footerSupport">
         <div className="footerSupport__container">
            <div className="footerSupport__block">
               <h3 className="footerSupport__title">Поддержка</h3>
               <div className="footerSupport__ideas">
                  <div className="footerSupport__ideas__title">Предложения и идеи</div>
                  <div className="footerSupport__ideas__subtitle">Вы можете написать нам на почту или в личные сообщения Вконтакте</div>
                  <ul className="footerSupport__ideas__list">
                     <li className="footerSupport__ideas__item">
                        <h4 className="footerSupport__ideas__item__title">Вконтакте:</h4>
                        <a href="#" className="footerSupport__ideas__item__link">vk.com/cyspnet</a>
                     </li>
                     <li className="footerSupport__ideas__item">
                        <h4 className="footerSupport__ideas__item__title">Email:</h4>
                        <a href="#" className="footerSupport__ideas__item__link">ceo@cyspnet.com</a>
                     </li>
                  </ul>
               </div>
               <div className="footerSupport__crowdfunding">
                  <h3 className="footerSupport__crowdfunding__title">Краудфандинг</h3>
                  <ul className="footerSupport__crowdfunding__list">
                     <li className="footerSupport__crowdfunding__item">
                        <a href="" className="footerSupport__crowdfunding__link">
                           <SVGSupport1Icon />
                        </a>
                        <a href="" className="footerSupport__crowdfunding__link">
                           <SVGSupport2Icon />
                        </a>
                        <a href="" className="footerSupport__crowdfunding__link">
                           <SVGSupportVKIcon />
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </section>
   );
}

export default FooterSupport;