import { SvgArenatIcon, SvgClubIcon, SvgOrganizationIcon, SvgUserIcon } from "../../SvgIcons";

export const OpportunitiesSlider = (props) => {
   return (
      <div className="opportunities-mini__slider swiper">
         <div className="opportunities-mini__wrapper swiper-wrapper">
            <div className="opportunities-mini__slide swiper-slide">
               <div className="opportunities-mini__img">
                  <SvgUserIcon />
               </div>
               <div className="opportunities-mini__title">Пользователям</div>
               <div className="opportunities-mini__text">Выступления на турнирах с призовым фондом</div>
            </div>
         </div>
      </div>
   );
}

export default OpportunitiesSlider;