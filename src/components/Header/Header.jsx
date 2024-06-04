import Button from "../Common/Button";
import { SvgArrowIcon, SvgLogoIcon, SvgQuestionIcon } from "../SvgIcons";

export const Header = () => {
   return (
      <div className="header">
         <div className="header__container">
            <div className="header__menu menu">
               <nav className="menu__body">
                  <div className="menu__logo">
                     <a href="#" className="menu__logo__img">
                        <SvgLogoIcon />
                     </a>
                     <a href="" className="menu__logo__text">CYSPNET</a>
                  </div>
                  <ul className="menu__list">
                     <li className="menu__item"><a href="" className="menu__link">Главная</a></li>
                     <li className="menu__item"><a href="" className="menu__link">О проекте</a></li>
                     <li className="menu__item"><a href="" className="menu__link">Возможности</a></li>
                     <li className="menu__item"><a href="" className="menu__link">Карточки</a></li>
                     <li className="menu__item"><a href="" className="menu__link">Статистика</a></li>
                     <li className="menu__item"><a href="" className="menu__link">FAQ</a></li>
                  </ul>
                  <div className="menu__access">
                     <button className="menu__access__logIn">Войти</button>
                     <Button class={'menu__access__registration'}>Регистрация</Button>
                  </div>
               </nav>
               <button type="button" className="menu__icon icon-menu"><span></span></button>
            </div>
         </div>
      </div>
   );
}

export default Header;