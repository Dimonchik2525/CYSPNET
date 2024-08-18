import { useState, useEffect, useRef } from "react";
import Button from "../Common/Button";
import { SVGLoginEyeClosedIcon, SVGLoginEyeIcon, SVGLoginGoogleIcon, SVGLoginSteamIcon, SVGSTwichIcon, SVGSTwitterIcon, SVGSVkIcon } from "../SvgIcons";
import * as React from "react";

export const Registration = (props) => {
   let [eyeMain, setEyeMain] = useState(false)
   let [eyeSecond, setEyeSecond] = useState(false)
   let [login, setLogin] = useState(false)
   let [password, setPassword] = useState(false)
   let [mail, setMail] = useState(false)
   let [init, setInit] = useState(false)
   let [newUser, setNewUser] = useState({ nickname: '', mail: '', password: '', repeatPassword: '', id: '' })
   let mailApprovementRef = useRef()

   let mailApprovement = <div ref={mailApprovementRef} className="registration__mailAprovement">
      <h3 className="registration__mailAprovement__title">На указанный адрес отправлено письмо с подтверждением</h3>
      <h4 className="registration__mailAprovement__subtitle">Перейдите по ссылке в письме, чтобы привязать адрес к вашему аккаунту</h4>
   </div>

   useEffect(() => {
      setInit(false)
      setLogin(false)
      setPassword(false)
      setMail(false)
   }, [newUser])
   function checkLogin() {
      setInit(true)
      let string = newUser.nickname
      for (let item of props.usersArray) {
         if (item.nickName == string) return false
      }
      const regex = /^[a-zA-Z0-9_-]+$/;
      if (regex.test(string) && string.length > 2) {
         setLogin(true)
         return true
      }
   }
   function checkPassword() {
      setInit(true)
      let string = newUser.password
      const regex = /^[a-zA-Z0-9]+$/;
      if (regex.test(string) && string.length > 5) {
         setPassword(true)
         return true
      }
   }
   function checkMail() {
      setInit(true)
      let string = newUser.mail
      for (let item of props.usersArray) {
         if (item.mail == string) return false
      }
      if (string.includes('@')) {
         setMail(true)
         return true
      }
   }
   function comparePasswords() {
      //if (newUser.password == newUser.repeatPassword) return true
      return newUser.password !== newUser.repeatPassword ? false : true
   }

   return (
      <section className={`login registration ${props.registrationActive ? 'login-open' : ''}`}>
         <div className="login__wrapper registration__wrapper">
            {mailApprovement}
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
                              setNewUser({ ...newUser, nickname: e.target.value })
                           }
                           } type="email" placeholder="Nickname" className=" popUp__input login__form__mail__input registration__form__mail__input"></input>
                           {!login && init ? <div className="login__invalid registration__form__invalid"><span>x</span>Никнейм должен содержать от 3 до 24 латинских символов. Разрешены "_" ".".</div> : ''}
                        </div>
                        <div className="login__form__mail registration__form__mail">
                           <h3 className="login__form__mail__title registration__form__mail__title">Электронная почта</h3>
                           <input onInvalid={(e) => e.preventDefault()} onChange={(e) => {
                              setNewUser({ ...newUser, mail: e.target.value })
                           }
                           } type="email" placeholder="Email" className=" popUp__input login__form__mail__input registration__form__mail__input"></input>
                           {!mail && init ? <div className="login__invalid registration__form__invalid"><span>x</span>Invalid mail. Try again</div> : ''}
                        </div>
                        <div className="login__form__password registration__form__password">
                           <button type="button" onClick={() => setEyeMain(!eyeMain)} className="login__form__password__eye">
                              {!eyeMain ? <SVGLoginEyeIcon /> : <SVGLoginEyeClosedIcon />}
                           </button>
                           <h3 className="login__form__mail__title registration__form__password__title">Пароль</h3>
                           <input onChange={(e) => {
                              setNewUser({ ...newUser, password: e.target.value })
                           }} type={eyeMain ? 'password' : 'text'} placeholder="Пароль" className=" popUp__input login__form__password__input registration__form__password__input"></input>
                           {!password && init ? <div className="login__invalid registration__form__invalid"><span>x</span>Пароль должен состоять от 6 до 18 символов, используя строчный и заглавные буквы A-z</div> : ''}
                        </div>
                        <div className="login__form__password registration__form__password">
                           <button type="button" onClick={() => setEyeSecond(!eyeSecond)} className="login__form__password__eye">
                              {!eyeSecond ? <SVGLoginEyeIcon /> : <SVGLoginEyeClosedIcon />}
                           </button>
                           <h3 className="login__form__mail__title registration__form__password__title">Повтор пароля</h3>
                           <input onChange={(e) => {
                              setNewUser({ ...newUser, repeatPassword: e.target.value })
                           }} type={eyeSecond ? 'password' : 'text'} placeholder="Повтор пароля" className=" popUp__input login__form__password__input registration__form__password__input"></input>
                           {newUser.password !== newUser.repeatPassword && init ? <div className="login__invalid registration__form__invalid"><span>x</span>Пароли не совпадают</div> : ''}
                        </div>
                        <div className="login__form__anotherPC registration__form__anotherPC">
                           <div className=" login__form__anotherPC__checkboxcheckbox registration__form__anotherPC__checkboxcheckbox">
                              <input id="c_1" data-error="Ошибка" className="login__form__anotherPC__input checkbox__input" type="checkbox" value="1" name="form[]" />
                              <label htmlFor="c_1" className="checkbox__label"><span className="checkbox__text login__form__anotherPC__title"><span className="login__form__anotherPC__main">Я согласен </span>с правилами пользования и политикой конфиденциальности</span></label>
                           </div>
                        </div>
                        <Button mailApprovementRef={mailApprovementRef} addNewUser={props.addNewUser} checkPassword={checkPassword} checkLogin={checkLogin} checkMail={checkMail} comparePasswords={comparePasswords} newUser={newUser} setNewUser={setNewUser} class={'registration__form__enterance-button'}>Зарегистрироваться</Button>
                     </form>
                  </div>
                  <div className="login__bottom">
                     <h4 className="login__bottom__title">Есть аккаунт?</h4>
                     <button onClick={() => {
                        props.setRegistrationActive(false)
                        props.setLoginActive(true)
                     }} className="login__bottom__button">Войти</button>
                  </div>
               </div>
            </div>
            <button onClick={() => {
               if (!document.documentElement.classList.contains('menu-open')) {
                  document.documentElement.classList.remove('lock')
               }
               props.setRegistrationActive(false)
            }} className="login__cancel  menu__icon"></button>
         </div>
      </section>
   );
}

export default Registration;