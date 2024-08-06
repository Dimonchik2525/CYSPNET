
import { useState } from "react";
import Button from "../Common/Button";
import { SvgArrowIcon, SvgLogoIcon, SvgQuestionIcon } from "../SvgIcons";
import Login from "../PopUps/Login";
import * as React from "react";

export const Header = (props) => {
   let [loginActive, setLoginActive] = useState(false)
   let [user, setUser] = useState({ login: '', password: '' })
   //console.log(user);

   let access = <div className="menu__access">
      <div onClick={() => {
         document.documentElement.classList.add('lock')
         setLoginActive(true)
      }} className="menu__access__login">
         <button>Войти</button>
      </div>
      <Button class={'menu__access__registration'}>Регистрация</Button>
   </div>
   let beta = <div className="menu__beta__wrapper">
      <a href="#" className="menu__beta">
         <div className="menu__beta__text">Бета-версия</div>
         <div className="menu__beta__img">
            <SvgQuestionIcon />
         </div>
      </a>
   </div>

   return (
      <React.Fragment>
         <header id="header" data-scroll="112" className="header">
            <div className="header__container">
               <div className="header__block">
                  <div className="menu__logo">
                     <a href="#" className="menu__logo__img">
                        <SvgLogoIcon />
                     </a>
                     <a href="" className="menu__logo__text">CYSPNET</a>
                  </div>
                  <div onClick={() => {
                     document.documentElement.classList.toggle('menu-open')
                     document.documentElement.classList.toggle('lock')
                  }} className="header__menu menu">
                     <nav onClick={(e) => {
                        if (!e.target.closest('a')) {
                           e.stopPropagation()
                        }
                     }} className="menu__body">
                        <ul className="menu__list">
                           <li className="menu__item"><a href="#" data-goto='#main' className="menu__link">Главная</a></li>
                           <li className="menu__item"><a href="#" data-goto='#about' className="menu__link">О проекте</a></li>
                           <li className="menu__item"><a href="#" data-goto='#opportunities' className="menu__link">Возможности</a></li>
                           <li className="menu__item"><a href="#" data-goto='#cards' className="menu__link">Карточки</a></li>
                           <li className="menu__item"><a href="#" data-goto='#statistics' className="menu__link">Статистика</a></li>
                           <li className="menu__item"><a href="#" data-goto='#faq' className="menu__link">FAQ</a></li>
                        </ul>
                        {props.size < 640 ? access : ''}
                        {props.size < 1250 ? beta : ''}
                     </nav>
                  </div>
                  {props.size > 640 ? access : ''}
                  <button type="button" className="menu__icon icon-menu"><span></span></button>
               </div>
            </div>
         </header>
         <Login usersArray={props.usersArray} user={user} setUser={setUser} loginActive={loginActive} setLoginActive={setLoginActive} />
      </React.Fragment>
   );
}

export default Header;