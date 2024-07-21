import { useEffect } from "react";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

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
   ]
   let mainSlider = []
   mainArray.map((item, ind) => {
      mainSlider.push(
         <div className="footerAknowledge__slide swiper-slide">

         </div>
      )
   })

   useEffect(() => {
      let mainSlider;

      function initMainSlider() {
         mainSlider = new Swiper('.footerAknowledge__slider', {
            modules: [Navigation],
            observer: true,
            observeParents: true,
            slidesPerView: 4,
            spaceBetween: 25,
            autoHeight: true,
            speed: 800,
            slideToClickedSlide: false,
            breakpoints: {
               /*320: {
                  slidesPerView: 2,
                  spaceBetween: 20,
               },
               470: {
                  slidesPerView: 3,
                  spaceBetween: 20,
               },
               600: {
                  slidesPerView: 4,
                  spaceBetween: 20,
               },
               640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
               },
               680: {
                  slidesPerView: 4,
                  spaceBetween: 20,
               },
               820: {
                  slidesPerView: 5,
                  spaceBetween: 20,
               },
               1060: {
                  slidesPerView: 7,
                  spaceBetween: 25,
               },
               1060: {
                  slidesPerView: 7,
                  spaceBetween: 25,
               },*/
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