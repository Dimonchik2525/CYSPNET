import Button from "../Common/Button";
import { SVGLoginEyeIcon, SVGLoginGoogleIcon, SVGLoginSteamIcon, SVGSTwichIcon, SVGSTwitterIcon, SVGSVkIcon } from "../SvgIcons";

export const Login = () => {
   return (
      <section className="login">
         <div className="login__container">
            <div className="login__block">
               <div className="login__services">
                  <h3 className="login__servises__title">
                     Войти с помощью сервисов:
                  </h3>
                  <ul className="login__servises__list">
                     <li className="login__servises__item">
                        <a href="" className="login__servises__link">
                           <SVGSTwichIcon />
                        </a>
                     </li>
                     <li className="login__servises__item">
                        <a href="" className="login__servises__link">
                           <SVGLoginGoogleIcon />
                        </a>
                     </li>
                     <li className="login__servises__item">
                        <a href="" className="login__servises__link">
                           <SVGSVkIcon />
                        </a>
                     </li>
                     <li className="login__servises__item">
                        <a href="" className="login__servises__link">
                           <SVGLoginSteamIcon />
                        </a>
                     </li>
                  </ul>
               </div>
               <div className="login__form-wrapper">
                  <form action="" className="login__form">
                     <div className="login__form__mail">
                        <h3 className="login__form__mail__title">Электронная почта</h3>
                        <input type="email" placeholder="Email" className="login__form__mail__input"></input>
                     </div>
                     <div className="login__form__password">
                        <div className="login__form__password__eye">
                           <SVGLoginEyeIcon />
                        </div>
                        <input type="password" placeholder="Пароль" className="login__form__password__input"></input>
                        <div className="login__form__password__forgot">Забыли пароль?</div>
                     </div>
                     <div className="login__form__anotherPC">
                        <h3 className="login__form__anotherPC__title">Чужой компьютер</h3>
                        <input type="checkbox" className="login__form__anotherPC__checkbox"></input>
                     </div>
                     <Button class={'login__form__enterence-button'}>Войти</Button>
                  </form>
               </div>
               <div className="login__bottom">
                  <h4 className="login__bottom__title">Нет аккаунта?</h4>
                  <button className="login__bottom__button">Создать</button>
               </div>
            </div>
            <button className="login__cancel"></button>
         </div>
      </section>
   );
}

export default Login;