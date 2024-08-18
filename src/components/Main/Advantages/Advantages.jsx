import { useEffect, useState } from "react";
import { SvgLightIcon, SvgMicroIcon, SvgMoneyIcon, SvgRewardIcon } from "../../SvgIcons";

export const Advantages = (props) => {
   let [active, setActive] = useState(true)
   let imgArr = []
   for (let i = 0; i < 5; i++) {
      imgArr.push(<div className="advantages__img">
         <img className={`${active ? 'advantages__img-animation' : ''}`} src={`img/advantages/advantages__arrow__${i + 1}.png`} alt="" />
      </div>)
   }
   let [arr, setArr] = useState([...imgArr])
   useEffect(() => {
      if (props.size < 961) {
         setArr('')
      }
      else {
         setArr([...imgArr])
      }
   }, [props.size])
   useEffect(() => {
      let images = document.querySelectorAll('.advantages__img-animation')
      let wrapper = document.querySelector('.advantages')
      function clear() {
         for (let img of images) {
            setTimeout(() => img.classList.remove('advantages__img-animation'), 1000)
         }
         setActive(false)
         console.log('work');
      }
      if (active) {
         wrapper.addEventListener('mouseenter', clear)
      }
      return () => {
         wrapper.removeEventListener('mouseenter', clear)
      };
   }, [])
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
                  {arr[0]}
                  <article className="advantages__item">
                     <div className="advantages__item__img">
                        <SvgRewardIcon />
                     </div>
                     <h3 className="advantages__item__title">Попадите в топ-пользователей</h3>
                     <div className="advantages__item__text">Развивайте свои навыки и получайте оценки и отзывы других пользователей! Вы ведь хотите стать лучшим в своей отрасли?</div>
                  </article>
                  {arr[1]}
                  {arr[2]}
                  <article className="advantages__item">
                     <div className="advantages__item__img">
                        <SvgLightIcon />
                     </div>
                     <h3 className="advantages__item__title">Используйте возможности на максимум</h3>
                     <div className="advantages__item__text">Попробуйте себя в роли тренера, аналитика и комментатора или организуйте свой собственный турнир!</div>
                  </article>
                  {arr[3]}
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