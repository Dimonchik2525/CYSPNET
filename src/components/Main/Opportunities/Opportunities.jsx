import OpportunitiesSlider from "./OpportunitiesSlider";

export const Opportunities = () => {
   return (
      <div className="opportunities">
         <div className="opportunities__container">
            <div className="opportunities__block">
               <div className="opportunities__title">Предоставляем массу возможностей</div>
               <div className="opportunities__slider swiper">
                  <div className="opportunities__wrapper swiper-wrapper">
                     <div className="opportunities__slide swiper-slide">
                        <OpportunitiesSlider />
                     </div>
                     <div className="opportunities__slide swiper-slide">
                        <OpportunitiesSlider />
                     </div>
                     <div className="opportunities__slide swiper-slide">
                        <OpportunitiesSlider />
                     </div>
                     <div className="opportunities__slide swiper-slide">
                        <OpportunitiesSlider />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Opportunities;