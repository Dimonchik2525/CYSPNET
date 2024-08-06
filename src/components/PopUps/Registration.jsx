import { useState, useEffect } from "react";
import Button from "../Common/Button";
import { SVGLoginEyeIcon, SVGLoginGoogleIcon, SVGLoginSteamIcon, SVGSTwichIcon, SVGSTwitterIcon, SVGSVkIcon } from "../SvgIcons";
import * as React from "react";

export const Registration = (props) => {
   let [eye, setEye] = useState(false)
   let [login, setLogin] = useState(false)
   let [password, setPassword] = useState(false)
   let [init, setInit] = useState(false)

   useEffect(() => {
      setInit(false)
      setLogin(false)
      setPassword(false)
   }, [props.user])
   function checkLogin() {
      setInit(true)
      for (let item of props.usersArray) {
         console.log([item.login, props.user.login]);
         if (item.mail == props.user.login) {
            console.log('work');
            setLogin(true)
         }
      }
   }

   function checkPassword() {
      setInit(true)
      for (let item of props.usersArray) {
         if (item.password == props.user.password) {
            setPassword(true)
         }
      }

   }

   return (
      <section className={`login registration ${props.registrationActive ? 'login-open' : ''}`}>
         <div className="login__wrapper registration__wrapper">
            <div className="login__container registration__container">
               <div className="login__block registration__block">
                  <div className="login__services">
                     <h3 className="login__services__title">
                        Войти с помощью сервисов:
                     </h3>
                     <ul className="login__services__list">
                        <li className="login__services__item">
                           <a href="" className="login__services__link">
                              <SVGSTwichIcon />
                           </a>
                        </li>
                        <li className="login__servises__item">
                           <a href="" className="login__services__link">
                              <SVGLoginGoogleIcon />
                           </a>
                        </li>
                        <li className="login__servises__item">
                           <a href="" className="login__services__link">
                              <SVGSVkIcon />
                           </a>
                        </li>
                        <li className="login__servises__item">
                           <a href="" className="login__services__link">
                              <SVGLoginSteamIcon />
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div className="login__between">Или</div>
                  <div className="login__form-wrapper registration__form__wrapper">
                     <form onSubmit={(e) => {
                        e.preventDefault()
                     }} action="" className="login__form registration__form">
                        <div className="login__form__mail registration__form__nickname">
                           <h3 className="login__form__mail__title registration__form__mail__nickname">Никнейм</h3>
                           <input onInvalid={(e) => e.preventDefault()} onChange={(e) => {
                              props.setUser({ ...props.user, login: e.target.value })
                           }
                           } type="email" placeholder="Email" className="login__form__mail__input registration__form__mail__input"></input>
                           {!login && init ? <div className="login__form__login__invalid registration__form__invalid"><span>x</span>Никнейм должен содержать от 3 до 24 латинских символов. Разрешены "_" ".".</div> : ''}
                        </div>
                        <div className="login__form__mail registration__form__mail">
                           <h3 className="login__form__mail__title registration__form__mail__title">Электронная почта</h3>
                           <input onInvalid={(e) => e.preventDefault()} onChange={(e) => {
                              props.setUser({ ...props.user, login: e.target.value })
                           }
                           } type="email" placeholder="Email" className="login__form__mail__input registration__form__mail__input"></input>
                           {!login && init ? <div className="login__form__login__invalid registration__form__invalid"><span>x</span>Invalid login. Try again</div> : ''}
                        </div>
                        <div className="login__form__password registration__form__password">
                           <button type="button" onClick={() => setEye(!eye)} className="login__form__password__eye">
                              <SVGLoginEyeIcon />
                           </button>
                           <h3 className="login__form__mail__title registration__form__password__title">Пароль</h3>
                           <input onChange={(e) => {
                              props.setUser({ ...props.user, password: e.target.value })
                           }} type={eye ? 'password' : 'text'} placeholder="Пароль" className="login__form__password__input registration__form__password__input"></input>
                           {!password && init ? <div className="login__form__password__invalid registration__form__invalid"><span>x</span>Пароль должен состоять от 6 до 18 символов, используя строчный и заглавные буквы A-z</div> : ''}
                        </div>
                        <div className="login__form__anotherPC registration__form__anotherPC">
                           <div className=" login__form__anotherPC__checkboxcheckbox registration__form__anotherPC__checkboxcheckbox">
                              <input id="c_1" data-error="Ошибка" className="login__form__anotherPC__input checkbox__input" type="checkbox" value="1" name="form[]" />
                              <label htmlFor="c_1" className="checkbox__label"><span className="checkbox__text login__form__anotherPC__title"><span className="login__form__anotherPC__main">Я согласен </span>с правилами пользования и политикой конфиденциальности</span></label>
                           </div>
                        </div>
                        <Button checkPassword={checkPassword} checkLogin={checkLogin} class={'login__form__enterence-button registration__form__enterance-button'}>Войти</Button>
                     </form>
                  </div>
                  <div className="login__bottom">
                     <h4 className="login__bottom__title">Есть аккаунт?</h4>
                     <button className="login__bottom__button">Войти</button>
                  </div>
               </div>
            </div>
            <button onClick={() => {
               document.documentElement.classList.remove('lock')
               props.setRegistrationActive(false)
            }} className="login__cancel  menu__icon"></button>
         </div>
      </section>
   );
}

export default Registration;