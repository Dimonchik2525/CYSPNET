import Error from "../Error/Error";
import MainFooter from "../Footer/MainFooter";
import About from "./About/About";
import Advantages from "./Advantages/Advantages";
import Choice from "./Choice/Choice";
import Faq from "./Faq/Faq";
import Hero from "./Hero/Hero";
import Opportunities from "./Opportunities/Opportunities";
import Statistics from "./Statistics/Statistics";
import PersonalCards from "./PersonalCards/PersonalCards"
import * as React from "react";
import { useState, useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import Tooltip from "../Common/Tooltip";
import { addTippy } from "../../js/files/tippy";
import { spollers } from "../../js/functions/functions";

export const Main = (props) => {
   let [sliderMode, setSliderMode] = useState('off')

   useEffect(() => {
      if (sliderMode == 'on') {
         document.documentElement.classList.add('slider-mode')
      }
      else {
         document.documentElement.classList.remove('slider-mode')
      }
      let slider;
      if (props.size < 1550) {
         setSliderMode('off')
      }

      function initSwiper() {
         slider = new Swiper('.major__slider', {
            direction: 'vertical',
            modules: [Navigation, Pagination],
            observer: true,
            observeParents: true,
            slidesPerView: 'auto',
            spaceBetween: 0,
            //autoHeight: true,
            speed: 800,
            pagination: {
               el: '.major__slider__pagination',
               clickable: true,
            },
            navigation: {
               nextEl: '.tooltip'
            }
         });
      }

      initSwiper();

      return () => {
         if (slider) {
            slider.destroy();
         }
      };
   }, [sliderMode, props.size]);
   useEffect(() => {
      let links = document.querySelectorAll('[data-goto]')
      for (let elem of links) {
         sliderMode == 'on' ? elem.style.pointerEvents = 'none' : elem.style.pointerEvents = 'auto'
      }
      addTippy()
      spollers()
   }, [sliderMode])
   return (
      <div>
         {props.error ? <Error size={props.size} />
            : <React.Fragment>
               {props.size < 1550 ? '' :
                  <div className="switcher">
                     <h4 className={`switcher__title`}>Slider mode:</h4>
                     <div className="switch">
                        <input onChange={(e) => setSliderMode(sliderMode == 'on' ? 'off' : 'on')} type="checkbox" id="toggle" />
                        <label htmlFor="toggle" className="switch__label"></label>
                        <p className={`switch__mode ${sliderMode == 'on' ? 'green' : 'red'}`}>{sliderMode}</p>
                     </div>
                  </div>}
               {sliderMode == 'on'
                  ?
                  <div className="major__slider swiper">
                     <div className="major__wrapper swiper-wrapper">
                        <div className="major__slide  swiper-slide"><Hero size={props.size} /></div>
                        <div className="major__slide  swiper-slide"><About size={props.size} /></div>
                        <div className="major__slide  swiper-slide"><Advantages size={props.size} /></div>
                        <div className="major__slide  swiper-slide"><Opportunities size={props.size} /></div>
                        <div className="major__slide  swiper-slide"><Choice size={props.size} /></div>
                        <div className="major__slide  swiper-slide"><PersonalCards size={props.size} /></div>
                        <div className="major__slide  swiper-slide"><Statistics size={props.size} /></div>
                        <div className="major__slide  swiper-slide"><Faq size={props.size} /></div>
                        <div className="major__slide  swiper-slide"><MainFooter size={props.size} /></div>
                     </div>
                     {props.size > 960 ? <Tooltip /> : ''}
                     <div className="major__slider__pagination"></div>
                  </div>
                  :
                  <React.Fragment>
                     <Hero size={props.size} />
                     <About size={props.size} />
                     <Advantages size={props.size} />
                     <Opportunities size={props.size} />
                     <Choice size={props.size} />
                     <PersonalCards size={props.size} />
                     <Statistics size={props.size} />
                     <Faq sliderMode={sliderMode} size={props.size} />
                     <MainFooter size={props.size} />
                  </React.Fragment>}
            </React.Fragment>}
      </div >
   );
}

export default Main;