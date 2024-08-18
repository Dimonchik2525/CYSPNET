import { useEffect, useState } from "react";
import Button from "../Common/Button";

export const Password = (props) => {
   let [loginForPass, setLoginForPass] = useState('')
   let [codeSent, setCodeSent] = useState(false)
   let [again, setAgain] = useState(false)
   let [timer, setTimer] = useState(38)
   let [number, setNumber] = useState(Math.round(Math.random() * 10000))
   let [inputCode, setinputCode] = useState('')

   useEffect(() => {
      const generator = () => {
         let num = 0;
         while (num.toString().length < 4) {
            num = Math.round(Math.random() * 10000);
         }
         return num
      }
      setNumber(generator())
   }, [again, props.passwordActive])
   useEffect(() => {
      setLoginForPass('')
      setCodeSent(false)
      setinputCode('')
   }, [props.passwordActive])
   useEffect(() => {
      setAgain(false)
      setinputCode('')
      let timerID = setInterval(() => {
         setTimer(prevTimer => {
            const newTime = prevTimer - 1;
            if (newTime == 0) clearInterval(timerID)
            return newTime < 10 ? `0${newTime}` : newTime;
         });
      }, 1000);
      setTimer(38);
      return () => clearInterval(timerID);
   }, [codeSent, again])

   function isCodeCorrect() {
      return inputCode == number ? true : false
   }

   return (
      <section className={`login password ${props.passwordActive ? 'login-open' : ''}`}>
         <div className="login__wrapper password__wrapper">
            <div className="login__container password__container">
               <div className="login__block password__block">
                  <h3 className="password__title">Сброс пароля</h3>
                  <h4 className="password__subtitle">Введите адрес электронной почты связанный с вашим аккаунтом</h4>
                  <div className="login__form-wrapper">
                     <form onSubmit={(e) => {
                        e.preventDefault()
                     }} action="" className="login__form password__form">
                        <div className="login__form__mail">
                           <input value={loginForPass} onInvalid={(e) => e.preventDefault()} onChange={(e) => {
                              setLoginForPass(e.target.value)
                           }
                           } type="email" placeholder="Электронная почта" className="  login__form__mail__input"></input>
                        </div>
                        {codeSent ? <article className="password__code">
                           <h4 className="password__code__title">
                              На почту <span>{loginForPass}</span> отправлен код для восстановления пароля
                           </h4>
                           <div className="password__code__number">your code is <span>{number}</span></div>
                           <div className="password__code__access">
                              <h4 className="password__code__access__title">Введите 4-x значный код:</h4>
                              <ul className={`password__code__access__enter ${isCodeCorrect() ? 'green' : ''}`}>
                                 <li className="password__code__access__item">
                                 </li>
                                 <li className="password__code__access__item">
                                 </li>
                                 <li tabIndex={1} className="password__code__access__item">
                                 </li>
                                 <li tabIndex={1} className="password__code__access__item">
                                    <input value={inputCode} onChange={(e) => setinputCode(e.target.value)} onInput={(e) => {
                                       e.target.value.length === 4 ? e.target.blur() : '';
                                    }} maxLength="4" type=" number" />
                                 </li>
                              </ul>
                              <div className={`password__code__access__again ${timer < 1 ? '-basic' : ''}`}><button onClick={() => timer == 0 ? setAgain(true) : ''}>Запросить снова</button>{timer > 0 ? `00:${timer}` : ''}</div>
                           </div>
                           <div className="password__code__bottom">{isCodeCorrect() ? 'Code is correct' : 'Неверный код!'}</div>
                        </article> : ''}
                        <div className="password__buttons">
                           <Button setCodeSent={setCodeSent} loginForPass={loginForPass} usersArray={props.usersArray} class={'password__form__enterence-button'}>Продолжить</Button>
                           <Button setCodeSent={setCodeSent} setPasswordActive={props.setPasswordActive} setLoginActive={props.setLoginActive} class={'password__form__cancel-button'}>Отменить</Button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
            <button onClick={() => {
               document.documentElement.classList.remove('lock')
               props.setPasswordActive(false)
            }} className="login__cancel  menu__icon"></button>
         </div>
      </section>
   );
}

export default Password;