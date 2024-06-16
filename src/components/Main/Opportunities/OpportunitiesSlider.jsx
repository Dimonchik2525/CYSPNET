import * as React from "react";
import { useState } from "react";
import { SvgArenatIcon, SvgArrowIcon, SvgClubIcon, SvgOrganizationIcon, SvgUserIcon } from "../../SvgIcons";
// active ?
/* <div key={ind} className="opportunities-mini__slide swiper-slide">
    <div className="opportunities-mini__title active">{mainSlide.name}</div>
    <div style={{ backgroundColor: [mainSlide.color] }} className={`opportunities-mini__img ${mainSlide.fill}`}>
       {item.img}
    </div>
    <div className="opportunities-mini__text active">{item.content}</div>
 </div> :
 <div onMouseEnter={(e) => setActive(true)} key={ind} className="opportunities-mini__slide swiper-slide">
    <div className={`opportunities-mini__img`}>
       {mainSlide.img}
    </div>
    <div className="opportunities-mini__title">{mainSlide.name}</div>
    <div className="opportunities-mini__text">{item.content}</div>
 </div>*/
export const OpportunitiesSlider = (props) => {
   let [active, setActive] = useState(false)

   let number = props.class
   let mainSlide = props.mainArray[number]
   let miniSliders = []
   props.mainArray[number].slide.map((item, ind) => {
      miniSliders.push(
         <div onPointerDown={(e) => setActive(true)} key={ind} className="opportunities-mini__slide swiper-slide">
            {active ? <React.Fragment><div className={`opportunities-mini__title ${active ? 'active' : ''}`}>{mainSlide.name}</div>
               <div style={active ? { backgroundColor: [mainSlide.color] } : {}} className={`opportunities-mini__img ${active ? mainSlide.fill : ''}`}>
                  {active ? item.img : mainSlide.img}
               </div></React.Fragment> : <React.Fragment><div className={`opportunities-mini__img`}>
                  {mainSlide.img}
               </div>
               <div className="opportunities-mini__title">{mainSlide.name}</div></React.Fragment>}
            <div className={`opportunities-mini__text ${active ? 'active' : ''}`}>{item.content}</div>
         </div>
      )
   })

   return (
      <div className={`opportunities-mini__slider${number} opportunities-mini__slider swiper`}>
         <div className="opportunities-mini__wrapper swiper-wrapper">
            {miniSliders}
         </div>
         <div onPointerDown={(e) => setActive(true)} className={`opportunities-mini__pagination ${active ? mainSlide.fill : ''}`}></div>
         <div onPointerDown={(e) => setActive(true)} className={`opportunities-mini__navigation ${active ? 'active' : ''}`}>
            <button className="opportunities-mini__navigation__left">
               <SvgArrowIcon />
            </button>
            <button className="opportunities-mini__navigation__right">
               <SvgArrowIcon />
            </button>
         </div>
      </div>
   );
}

export default OpportunitiesSlider;