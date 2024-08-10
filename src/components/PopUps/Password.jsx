import Button from "../Common/Button";

export const Password = (props) => {
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
                     }} action="" className="login__form">
                        <div className="login__form__mail">
                           <input onInvalid={(e) => e.preventDefault()} onChange={(e) => {
                              //props.setUser({ ...props.user, login: e.target.value })
                           }
                           } type="email" placeholder="Электронная почта" className=" popUp__input login__form__mail__input"></input>
                        </div>
                        <Button class={'login__form__enterence-button password__form__enterence-button'}>Продолжить</Button>
                        <Button class={'login__form__enterence-button password__form__cancel-button'}>Отменить</Button>
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