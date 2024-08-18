
import { useState, useEffect } from "react";
import Button from "../Common/Button";
import { SvgArrowIcon, SvgLogoIcon, SvgQuestionIcon } from "../SvgIcons";
import Login from "../PopUps/Login";
import Registration from '../PopUps/Registration'
import * as React from "react";
import Password from "../PopUps/Password";

export const Header = (props) => {
   let [loginActive, setLoginActive] = useState(false)
   let [registrationActive, setRegistrationActive] = useState(false)
   let [passwordActive, setPasswordActive] = useState(false)
   let [user, setUser] = useState({ login: '', password: '' })
   let [logged, setLogged] = useState('Войти')

   let access = <div className="menu__access">
      <div onClick={() => {
         if (logged !== 'Войти') {
            return false
         }
         document.documentElement.classList.add('lock')
         setLoginActive(true)
      }} className={`menu__access__login`}>
         <div data-spollers className={`spollers ${logged !== 'Войти' ? '' : 'invisible'}`}>
            <div className="spollers__item" >
               <button style={{ cursor: 'pointer' }} type="button" data-spoller className="menu__access__login__name spollers__title">{logged}</button>
               <div onClick={() => {
                  setLogged('Войти')
               }} className="spollers__body menu__access__login__exit">Exit</div>
            </div >
         </div >
         <button className={`${logged == 'Войти' ? 'menu__access__login__button' : 'invisible'}`}>{logged}</button>
      </div>
      <Button setRegistrationActive={setRegistrationActive} class={'menu__access__registration'}>Регистрация</Button>
   </div >
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
         <header id="header" data-scroll="82" className="header">
            <div className="header__container">
               <div className="header__block">
                  <div className="menu__logo">
                     <a href="#" className="menu__logo__img">
                        <SvgLogoIcon />
                     </a>
                     <a href="" className="menu__logo__text">CYSPNET</a>
                  </div>
                  <div onClick={() => {
                     document.documentElement.classList.toggle('lock')
                     document.documentElement.classList.toggle('menu-open')
                  }} className="header__menu menu">
                     <nav onClick={(e) => {
                        if (!e.target.closest('a')) {
                           e.stopPropagation()
                        }
                     }} className="menu__body">
                        <ul className="menu__list">
                           <li className="menu__item"><a onClick={(e) => { document.documentElement.classList.remove('menu-open') }} href="#" data-goto='#main' className="menu__link">Главная</a></li>
                           <li className="menu__item"><a href="#" onClick={(e) => { document.documentElement.classList.remove('menu-open') }} data-goto='#about' className="menu__link">О проекте</a></li>
                           <li className="menu__item"><a href="#" onClick={(e) => { document.documentElement.classList.remove('menu-open') }} data-goto='#opportunities' className="menu__link">Возможности</a></li>
                           <li className="menu__item"><a href="#" onClick={(e) => { document.documentElement.classList.remove('menu-open') }} data-goto='#cards' className="menu__link">Карточки</a></li>
                           <li className="menu__item"><a href="#" onClick={(e) => { document.documentElement.classList.remove('menu-open') }} data-goto='#statistics' className="menu__link">Статистика</a></li>
                           <li className="menu__item"><a href="#" onClick={(e) => { document.documentElement.classList.remove('menu-open') }} data-goto='#faq' className="menu__link">FAQ</a></li>
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
         <Login logged={logged} setLogged={setLogged} setPasswordActive={setPasswordActive} usersArray={props.usersArray} user={user} setUser={setUser} loginActive={loginActive} setLoginActive={setLoginActive} setRegistrationActive={setRegistrationActive} />
         <Registration setLoginActive={setLoginActive} addNewUser={props.addNewUser} usersArray={props.usersArray} user={user} setUser={setUser} registrationActive={registrationActive} setRegistrationActive={setRegistrationActive}></Registration>
         <Password setLoginActive={setLoginActive} passwordActive={passwordActive} setPasswordActive={setPasswordActive} usersArray={props.usersArray} />
      </React.Fragment>
   );
}

export default Header;