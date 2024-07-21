import { useEffect } from "react";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import { SvgArrowIcon } from "../../SvgIcons";

export const FooterAknowledge = (props) => {
   let mainArray = [
      ' Виктория Золотова',
      'Денис Савченко',
      'Виталий Беленький',
      'Азат Мужипов',
      'Алёна Антонова',
      'Павел Сидоров',
      'Виктория Бекстер',
      'Женя Раевский',
      'Левон Давтян',
      'Вадим Кульнов',
      'Владислав Пинчук',
      'Даниил Пасечник',
      'Никита Птицын',
      'Пётр Король',
      'Александр Листванович',
      'Axel Rockets',
      'Дмитрий Авданин',
      'Павел Седой',
      'Артём Кудрявец',
      'Геннадий Зозуля',
      'Anomidae',
      'Кирилл Weblucker',
      'Юркив Марьяна',
      'Axel Rockets',
      'Дмитрий Авданин',
      'Павел Седой',
      'Артём Кудрявец',
      'Геннадий Зозуля',
      'Anomidae',
      'Кирилл Weblucker',
      'Юркив Марьяна',
      'Axel Rockets',
      'Дмитрий Авданин',
      'Павел Седой',
      'Артём Кудрявец',
      'Геннадий Зозуля',
      'Anomidae',
      'Кирилл Weblucker',
      'Юркив Марьяна',
   ]
   let mainSlider = []
   function chunkArray(array, chunkSize) {
      const result = [];
      for (let i = 0; i < array.length; i += chunkSize) {
         const chunk = array.slice(i, i + chunkSize);
         mainSlider.push(
            <div key={Math.random()} className="footerAknowledge__slide swiper-slide">
               <div className="footerAknowledge__slide__wrapper">
                  {chunk.map((item, index) => {
                     return <div key={i + index} className="footerAknowledge__slide__item">
                        {item}
                     </div>
                  })}
               </div>
            </div>
         )
      }
   }

   chunkArray(mainArray, 6);
   console.log(mainSlider);

   useEffect(() => {
      let mainSlider;

      function initMainSlider() {
         mainSlider = new Swiper('.footerAknowledge__slider', {
            modules: [Navigation],
            observer: true,
            observeParents: true,
            slidesPerView: 4,
            spaceBetween: 30,
            autoHeight: true,
            speed: 800,
            slideToClickedSlide: false,
            navigation: {
               prevEl: '.footerAknowledge__navigation__left',
               nextEl: '.footerAknowledge__navigation__right',
            },
            breakpoints: {
               320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
               },
               430: {
                  slidesPerView: 2,
                  spaceBetween: 50,
               },
               700: {
                  slidesPerView: 3,
                  spaceBetween: 20,
               },
               960: {
                  slidesPerView: 4,
               },
               1345: {
                  slidesPerView: 4
               }
            },
         });
      }
      initMainSlider();

      return () => {
         if (mainSlider) {
            mainSlider.destroy();
         }
      };
   }, [props.size]);


   return (
      <div className="footerAknowledge">
         <div className="footerAknowledge__container">
            <div className="footerAknowledge__block">
               <h2 className="footerAknowledge__title">Страница благодарностей</h2>
               <h3 className="footerAknowledge__subtitle">На этой странице отображются имена или никнеймы людей, которые вложили свой вклад в развитие проекта</h3>
               <div className="footerAknowledge__slider swiper">
                  <div className="footerAknowledge__wrapper swiper-wrapper">
                     {mainSlider}
                  </div>
                  <div className="footerAknowledge__navigation">
                     <button className="footerAknowledge__navigation__left">
                        <SvgArrowIcon />
                     </button>
                     <button className="footerAknowledge__navigation__right">
                        <SvgArrowIcon />
                     </button>
                  </div>
               </div>
               <div className="footerAknowledge__howToGet">
                  <div className="footerAknowledge__howToGet__title">Как сюда попасть:</div>
                  <ul className="footerAknowledge__howToGet__varieties">
                     <li className="footerAknowledge__howToGet__varieties__item">
                        <a className="footerAknowledge__howToGet__varieties__link" href="">Пожертвования на разных платформах</a>
                     </li>
                     <li className="footerAknowledge__howToGet__varieties__item">
                        Предложения и идеи
                     </li>
                     <li className="footerAknowledge__howToGet__varieties__item">
                        Нахождение багов и ошибок
                     </li>
                     <li className="footerAknowledge__howToGet__varieties__item">
                        Любая другая помощь
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
}

export default FooterAknowledge;