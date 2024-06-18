import { useEffect, useState } from "react";
import Button from "../../Common/Button";
import { SVGAnaliticIcon, SVGCoachIcon, SVGComentatorIcon, SVGJudgeIcon, SVGManagerIcon, SVGMouseIcon, SVGSkautIcon, SvgArrowIcon } from "../../SvgIcons";
import Swiper from "swiper";
import { Navigation, Pagination, Controller } from "swiper/modules";
import * as React from "react";

export const Choice = (props) => {
   //let [activeItem, setActiveItem] = useState(null)

   let mainArray = [
      {
         img: <SVGMouseIcon />,
         title: 'Игрок',
         text: 'Выступает на турнирах, участвует в матчах и вступает в команды. У игроков есть уровень навыка и рейтинг, рассчитанный на основе статистики. Также они могут заключать контракты с командами и клубами.',
      },
      {
         img: <SVGCoachIcon />,
         title: 'Тренер',
         text: 'Занимается развитием игроков, клубов и команд. Его рейтинг растет вместе с показателями команды, к примеру, с получением подопечными трофеев и наград.',
      },
      {
         img: <SVGManagerIcon />,
         title: 'Организатор',
         text: 'Занимается проведением турниров и лиг. Может быть нанят аренами или пользователями, которые хотят провести интересный товарищеский матч.',
      },
      {
         img: <SVGJudgeIcon />,
         title: 'Судья',
         text: 'Судит и принимает важные решения в матчах и турнирах. Рейтинг судьи зависит от оценки его деятельности дргуими игроками и организаторами.',
      },
      {
         img: <SVGAnaliticIcon />,
         title: 'Аналитик',
         text: 'Оценивает пользователей и сообщества сайта. Этих участников могут нанять организаторы турниров для проведения предматчевой и послематчевой аналитики.',
      },
      {
         img: <SVGComentatorIcon />,
         title: 'Комментатор',
         text: 'Комментирует матчи и трансляции. Может быть приглашен на турниры. Статус комментатора растет за счет среднего количества просмотров трансляций с его комментированием и оценок пользователей.',
      },
      {
         img: <SVGSkautIcon />,
         title: 'Скаут',
         text: 'Занимается поиском пользователей для сообществ и наоборот. После нахождения, в зависимости от результатов статистических показателей найденных пользователей или сообществ будет меняться его рейтинг.',
      },
   ]
   let sliderArr = {
      mainSlider: [],
      textSlider: []
   }
   mainArray.map((item, index) => {
      sliderArr.mainSlider.push(
         <div key={index} className={`choice__content-main__slide  swiper-slide`}>
            <article className="choice__content-main__person">
               <div className="choice__content-main__person__img">{item.img}</div>
               <div className="choice__content-main__person__title">{item.title}</div>
            </article>
         </div>
      )
      sliderArr.textSlider.push(
         <article key={index * 2} className="choice__content-text__slide swiper-slide">
            <div className="choice__content-text__text">
               {item.text}
            </div>
         </article>
      )
   })

   useEffect(() => {
      let mainSlider;
      let textSlider;

      function initMainSlider() {
         mainSlider = new Swiper('.choice__content-main__slider', {
            modules: [Navigation, Pagination],
            observer: true,
            observeParents: true,
            slidesPerView: 7,
            spaceBetween: 25,
            autoHeight: true,
            speed: 800,
            slideToClickedSlide: false,
            breakpoints: {
               320: {
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
               },
            },
         });

         mainSlider.on('click', function (slider) {
            const clickedSlide = slider.clickedSlide;
            if (clickedSlide) {
               // Remove active class from all slides
               slider.slides.forEach(function (slide) {
                  slide.classList.remove('active');
               });

               // Add active class to the clicked slide
               clickedSlide.classList.add('active');

               // Get index of clicked slide
               const clickedIndex = slider.clickedIndex;

               // Slide text slider to the corresponding index
               textSlider.slideTo(clickedIndex);
            }
         });

         mainSlider.on('slideChange', function () {
            // Get the active index of the main slider
            const activeIndex = mainSlider.activeIndex;

            // Slide text slider to the corresponding index
            textSlider.slideTo(activeIndex);
         });
      }

      function initTextSlider() {
         textSlider = new Swiper('.choice__content-text__slider', {
            modules: [Navigation, Pagination],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 50,
            autoHeight: true,
            speed: 800,
            navigation: {
               prevEl: '.choice__content-text__navigation__left',
               nextEl: '.choice__content-text__navigation__right',
            },
         });

         textSlider.on('slideChange', function () {
            // Get the active index of the main slider
            const activeIndex = textSlider.activeIndex;

            // Slide text slider to the corresponding index
            mainSlider.slideTo(activeIndex);
            mainSlider.slides.forEach(function (slide) {
               slide.classList.remove('active');
            });

            // Add active class to the clicked slide
            mainSlider.slides[activeIndex].classList.add('active');
         });
      }

      initMainSlider();
      initTextSlider();

      return () => {
         if (mainSlider) {
            mainSlider.destroy();
         }
         if (textSlider) {
            textSlider.destroy();
         }
      };
   }, [props.size]);

   return (
      <div className="choice">
         <div className="choice__container">
            <div className="choice__block">
               <div className="choice__content">
                  <h2 className="choice__content__title">Выберите, кем хотите стать</h2>
                  <div className="choice__content-main__slider swiper">
                     <div className="choice__content-main__wrapper swiper-wrapper">
                        {sliderArr.mainSlider}
                     </div>
                  </div>
                  <div className="choice__content-text__main-wrapper">
                     <div className="choice__content-text__slider swiper">
                        <div className="choice__content-text__wrapper swiper-wrapper">
                           {sliderArr.textSlider}
                        </div>
                     </div>
                     {props.size > 640 ?
                        <div className="choice__content-text__navigation">
                           <button className="choice__content-text__navigation__left">
                              <SvgArrowIcon />
                           </button>
                           <button className="choice__content-text__navigation__right">
                              <SvgArrowIcon />
                           </button>
                        </div>
                        : ''}
                  </div>
               </div>
               <Button class={'choice__join'}>Присоединиться</Button>
               {props.size > 1000 ?
                  <React.Fragment>
                     <img className="choice__img-1" src="img/choice/choice__weapon__1.png" alt="" />
                     <img className="choice__img-2" src="img/choice/choice__weapon__2.png" alt="" />
                     <img className="choice__img-3" src="img/choice/choice__weapon__3.png" alt="" />
                     <img className="choice__img-4" src="img/choice/choice__weapon__4.png" alt="" />
                  </React.Fragment> : ''}
            </div>
         </div>
      </div>
   );
}

export default Choice;