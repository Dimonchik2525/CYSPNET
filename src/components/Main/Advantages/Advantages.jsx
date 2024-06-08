import { SvgLightIcon, SvgMicroIcon, SvgMoneyIcon, SvgRewardIcon } from "../../SvgIcons";

export const Advantages = () => {
   let arrowArr = [
      'advantages__arrow__1',
      'advantages__arrow__2',
      'advantages__arrow__3',
      'advantages__arrow__4',
   ]
   return (
      <div className="advantages">
         <div className="advantages__container">
            <div className="advantages__block">
               <div className="advantages__item">
                  <div className="advantages__item__img">
                     <SvgMicroIcon />
                  </div>
                  <div className="advantages__item__title">Получите признание комьюнити</div>
                  <div className="advantages__item__text">Соберите фан-базу и делитесь своими достижениями! Расскажите о себе в постах и комментариях своего профиля.</div>
               </div>
               <div className="advantages__img">
                  <img src={`img/advantages/${arrowArr[0]}.png`} alt="" />
               </div>
               <div className="advantages__item">
                  <div className="advantages__item__img">
                     <SvgLightIcon />
                  </div>
                  <div className="advantages__item__title">Попадите в топ-пользователей</div>
                  <div className="advantages__item__text">Развивайте свои навыки и получайте оценки и отзывы других пользователей! Вы ведь хотите стать лучшим в своей отрасли?</div>
               </div>
               <div className="advantages__img">
                  <img src={`img/advantages/${arrowArr[1]}.png`} alt="" />
               </div>
               <div className="advantages__item">
                  <div className="advantages__item__img">
                     <SvgMoneyIcon />
                  </div>
                  <div className="advantages__item__title">Используйте возможности на максимум</div>
                  <div className="advantages__item__text">Попробуйте себя в роли тренера, аналитика и комментатора или организуйте свой собственный турнир!</div>
               </div>
               <div className="advantages__img">
                  <img src={`img/advantages/${arrowArr[2]}.png`} alt="" />
               </div>
               <div className="advantages__item">
                  <div className="advantages__item__img">
                     <SvgRewardIcon />
                  </div>
                  <div className="advantages__item__title">
                     Монетизируйте свои навыки
                  </div>
                  <div className="advantages__item__text">
                     Заработайте деньги за счёт своих навыков в разных отраслях киберспорта
                  </div>
               </div>
               <div className="advantages__img">
                  <img src={`img/advantages/${arrowArr[3]}.png`} alt="" />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Advantages;