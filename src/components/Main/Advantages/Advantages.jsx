import { SvgLightIcon, SvgMicroIcon, SvgMoneyIcon, SvgRewardIcon } from "../../SvgIcons";

export const Advantages = (props) => {
   let imgArr = []
   for (let i = 0; i < 5; i++) {
      imgArr.push(<div className="advantages__img">
         <img src={`img/advantages/advantages__arrow__${i + 1}.png`} alt="" />
      </div>)
   }
   if (props.size < 960) {
      imgArr = ''
   }
   return (
      <section id="advantages" className="advantages">
         <div className="advantages__container">
            <div className="advantages__block">
               <h2 className="advantages__title">Наши преимущества</h2>
               <div className="advantages__content">
                  <article className="advantages__item">
                     <div className="advantages__item__img">
                        <SvgMicroIcon />
                     </div>
                     <h3 className="advantages__item__title">Получите признание комьюнити</h3>
                     <div className="advantages__item__text">Соберите фан-базу и делитесь своими достижениями! Расскажите о себе в постах и комментариях своего профиля.</div>
                  </article>
                  {imgArr[0]}
                  <article className="advantages__item">
                     <div className="advantages__item__img">
                        <SvgRewardIcon />
                     </div>
                     <h3 className="advantages__item__title">Попадите в топ-пользователей</h3>
                     <div className="advantages__item__text">Развивайте свои навыки и получайте оценки и отзывы других пользователей! Вы ведь хотите стать лучшим в своей отрасли?</div>
                  </article>
                  {imgArr[1]}
                  {imgArr[2]}
                  <article className="advantages__item">
                     <div className="advantages__item__img">
                        <SvgLightIcon />
                     </div>
                     <h3 className="advantages__item__title">Используйте возможности на максимум</h3>
                     <div className="advantages__item__text">Попробуйте себя в роли тренера, аналитика и комментатора или организуйте свой собственный турнир!</div>
                  </article>
                  {imgArr[3]}
                  <article className="advantages__item">
                     <div className="advantages__item__img">
                        <SvgMoneyIcon />
                     </div>
                     <h3 className="advantages__item__title">
                        Монетизируйте свои навыки
                     </h3>
                     <div className="advantages__item__text">
                        Заработайте деньги за счёт своих навыков в разных отраслях киберспорта
                     </div>
                  </article>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Advantages;