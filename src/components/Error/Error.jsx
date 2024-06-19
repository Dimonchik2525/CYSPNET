import Button from "../Common/Button";
import Tooltip from "../Common/Tooltip";

export const Error = (props) => {
   return (
      <div className="error">
         <div className="error__container">
            <div className="error__block">
               <div className="error__content">
                  <div className="error__content__title">404</div>
                  <div className="error__content__text">Ошибка</div>
                  <Button class={"error__content__button"}>Перейти на главную страницу</Button>
               </div>
               <div className="error__img">
                  <img src="img/error/error__1.png" alt="" />
               </div>
            </div>
         </div>
         {props.size > 960 ? <Tooltip /> : ''}
      </div>
   );
}

export default Error;