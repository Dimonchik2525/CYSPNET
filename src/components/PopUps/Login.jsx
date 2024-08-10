import { useState, useEffect } from "react";
import Button from "../Common/Button";
import { SVGLoginEyeIcon, SVGLoginGoogleIcon, SVGLoginSteamIcon, SVGSTwichIcon, SVGSTwitterIcon, SVGSVkIcon } from "../SvgIcons";
import * as React from "react";

export const Login = (props) => {
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
   useEffect(() => {
      let inputArray = document.querySelectorAll('.popUp__input')
      for (let input of inputArray) {
         let title = input.previousElementSibling
         input.onfocus = function () {
            title.style.color = '#fff'
         }
         input.onblur = function () {
            title.style.color = 'rgba(255, 255, 255, 0.5)'
         }
      }
   }, [])
   return (
      <section className={`login ${props.loginActive ? 'login-open' : ''}`}>
         <div className="login__wrapper">
            <div className="login__container">
               <div className="login__block">
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
                  <div className="login__form-wrapper">
                     <form onSubmit={(e) => {
                        e.preventDefault()
                     }} action="" className="login__form">
                        <div className="login__form__mail">
                           <h3 className="login__form__mail__title">Электронная почта</h3>
                           <input onInvalid={(e) => e.preventDefault()} onChange={(e) => {
                              props.setUser({ ...props.user, login: e.target.value })
                           }
                           } type="email" placeholder="Email" className=" popUp__input login__form__mail__input"></input>
                           {!login && init ? <div className="login__invalid"><span>x</span>Invalid login. Try again</div> : ''}
                        </div>
                        <div className="login__form__password">
                           <button type="button" onClick={() => setEye(!eye)} className="login__form__password__eye">
                              <SVGLoginEyeIcon />
                           </button>
                           <input onChange={(e) => {
                              props.setUser({ ...props.user, password: e.target.value })
                           }} type={eye ? 'password' : 'text'} placeholder="Пароль" className=" popUp__input login__form__password__input"></input>
                           {!password && init ? <div className="login__invalid"><span>x</span>Invalid password. Try again</div> : ''}
                           <button onClick={() => {
                              props.setPasswordActive(true)
                           }} className="login__form__password__forgot">Забыли пароль?</button>
                        </div>
                        <div className="login__form__anotherPC">
                           <div className=" login__form__anotherPC__checkboxcheckbox">
                              <input id="a_1" data-error="Ошибка" className="login__form__anotherPC__input checkbox__input" type="checkbox" value="1" name="form[]" />
                              <label htmlFor="a_1" className="checkbox__label"><span className="checkbox__text login__form__anotherPC__title">Чужой компьютер</span></label>
                           </div>
                        </div>
                        <Button checkPassword={checkPassword} checkLogin={checkLogin} class={'login__form__enterence-button'}>Войти</Button>
                     </form>
                  </div>
                  <div className="login__bottom">
                     <h4 className="login__bottom__title">Нет аккаунта?</h4>
                     <button className="login__bottom__button">Создать</button>
                  </div>
               </div>
            </div>
            <button onClick={() => {
               document.documentElement.classList.remove('lock')
               props.setLoginActive(false)
            }} className="login__cancel  menu__icon"></button>
         </div>
      </section>
   );
}

export default Login;