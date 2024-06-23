import { SVGSInstaIcon, SVGSTwichIcon, SVGSTwitterIcon, SVGSVkIcon, SVGYoutubeIcon, SvgLogoIcon } from "../../SvgIcons";

export const FooterNav = (props) => {
   return (
      <div className="footerNav">
         <div className="footerNav__container">
            <div className="footerNav__block">
               <nav className="footerNav__main">
                  <article className="footerNav__image">
                     <SvgLogoIcon />
                     <div className="footerNav__image__text">CYSPNET</div>
                  </article>
                  <article className="footerNav__navigation">
                     <h3 className="footerNav__navigation__title">Навигация</h3>
                     <ul className="footerNav__navigation__list">
                        <li className="footerNav__navigation__item">
                           <a href="" className="footerNav__navigation__link">Главная</a>
                        </li>
                        <li className="footerNav__navigation__item">
                           <a href="" className="footerNav__navigation__link">О проекте</a>
                        </li>
                        <li className="footerNav__navigation__item">
                           <a href="" className="footerNav__navigation__link">Возможности</a>
                        </li>
                        <li className="footerNav__navigation__item">
                           <a href="" className="footerNav__navigation__link">Карточки</a>
                        </li>
                        <li className="footerNav__navigation__item">
                           <a href="" className="footerNav__navigation__link">Статистика</a>
                        </li>
                        <li className="footerNav__navigation__item">
                           <a href="" className="footerNav__navigation__link">FAQ</a>
                        </li>
                     </ul>
                  </article>
                  <article className="footerNav__others">
                     <h3 className="footerNav__others__title">Разное</h3>
                     <ul className="footerNav__others__list">
                        <li className="footerNav__others__item">
                           <a href="" className="footerNav__others__link">Поддержать проект</a>
                        </li>
                        <li className="footerNav__others__item">
                           <a href="" className="footerNav__others__link">Благодарности</a>
                        </li>
                        <li className="footerNav__others__item">
                           <a href="" className="footerNav__others__link">Контакты</a>
                        </li>
                     </ul>
                  </article>
                  <article className="footerNav__socials">
                     <h3 className="footerNav__socials__title">Соц. сети</h3>
                     <ul className="footerNav__socials__list">
                        <li className="footerNav__socials__item">
                           <a href="" className="footerNav__socials__link">
                              <SVGSVkIcon />
                           </a>
                        </li>
                        <li className="footerNav__socials__item">
                           <a href="" className="footerNav__socials__link">
                              <SVGYoutubeIcon />
                           </a>
                        </li>
                        <li className="footerNav__socials__item">
                           <a href="" className="footerNav__socials__link">
                              <SVGSInstaIcon />
                           </a>
                        </li>
                        <li className="footerNav__socials__item">
                           <a href="" className="footerNav__socials__link">
                              <SVGSTwitterIcon />
                           </a>
                        </li>
                        <li className="footerNav__socials__item">
                           <a href="" className="footerNav__socials__link">
                              <SVGSTwichIcon />
                           </a>
                        </li>
                     </ul>
                  </article>
                  <div className="footerNav__chicken">
                     <img src="@img/footerNav/footerNav__chicken.png" alt="" />
                  </div>
               </nav>
               <article className="footerNav__bottom">
                  <p className="footerNav__bottom__copyright">© 2021 Все права защищены</p>
                  <a className="footerNav__bottom__rules" href='#'>Правила пользования</a>
                  <a className="footerNav__bottom__policy" href="#">Политика конфиденциальности</a>
               </article>
            </div>
         </div>
      </div>
   );
}

export default FooterNav;