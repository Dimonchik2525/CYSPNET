import { SvgArrowIcon, SvgQuestionIcon } from "../SvgIcons";

export const Tooltip = () => {
   return (
      <div className="tooltip">
         <div className="tooltip__scroll">
            <div className="tooltip__scroll__text">Скролль чтобы увидеть больше</div>
            <div className="tooltip__scroll__arrow">
               <SvgArrowIcon />
            </div>
         </div>
         <div id="data-tippy-content" className="tooltip__beta__wrapper">
            <a href="#" className="tooltip__beta">
               <div className="tooltip__beta__text">Бета-версия</div>
               <div className="tooltip__beta__img">
                  <SvgQuestionIcon />
               </div>
            </a>
         </div>
      </div>
   );
}

export default Tooltip;