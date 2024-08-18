import { SVGCardCommunityIcon, SVGCardDisciplineIcon, SVGCardIndustryIcon, SVGCardKPDIcon, SVGCardLeageIcon, SVGCardRatingIcon, SVGCardRoleIcon, SVGCardWinRateIcon } from "../../SvgIcons";
export const Card = (props) => {
   return (
      <div className="card card__slide swiper-slide">
         <div className="card__img">
            <img src={props.item.color} alt="" />
         </div>
         <ul className="card__others">
            <li onClick={(e) => e.stopPropagation()} className="card__item card__logo">
               <img src="img/cards/card__logo__bg.png" alt="" />
               {props.item.logo}
            </li>
            <li onClick={(e) => e.stopPropagation()} data-tippy-content={props.item.level.description} className={`card__item card__level`}>
               {props.item.level.img}
            </li>
            <li onClick={(e) => e.stopPropagation()} data-tippy-content={props.item.community.description} className="card__item card__community">
               {props.item.community.img}
            </li>
            <li onClick={(e) => e.stopPropagation()} data-tippy-content={props.item.discipline.description} className="card__item card__discipline">
               {props.item.discipline.img}
            </li>
            <li onClick={(e) => e.stopPropagation()} data-tippy-content={props.item.industry.description} className="card__item card__industry">
               {props.item.industry.img}
            </li>
            <li onClick={(e) => e.stopPropagation()} data-tippy-content={props.item.kpd.description} className="card__item card__kpd">
               <div className="card__kpd__logo">
                  <div className="card__kpd__logo__oxygen">{props.item.kpd.img}</div>
                  <div className="card__kpd__logo__oxygen-border"></div>
               </div>
               <div className="card__kpd__text">{props.item.kpd.value}</div>
            </li>
            <li onClick={(e) => e.stopPropagation()} data-tippy-content={props.item.leage.description} className="card__item card__leage">
               <div className="card__leage__shield"> {props.item.leage.img}</div>
               <div className="card__leage__shield-border">
                  <img src="img/cards/cards__leage__bg.png" alt="" />
               </div>
            </li>
            <li onClick={(e) => e.stopPropagation()} data-tippy-content={props.item.rating.description} className="card__item card__rating">
               <div className="card__rating__logo">
                  <div className="card__rating__logo__oxygen">{props.item.rating.img}</div>
                  <div className="card__rating__logo__oxygen-border"></div>
               </div>
               <div className="card__rating__text">{props.item.rating.value}</div>
            </li>
            <li onClick={(e) => e.stopPropagation()} data-tippy-content={props.item.role.description} className="card__item card__role">
               {props.item.role.img}
            </li>
            <li onClick={(e) => e.stopPropagation()} data-tippy-content={props.item.winrate.description} className="card__item card__winrate">
               <div className="card__winrate__logo">
                  <div className="card__winrate__logo__oxygen">{props.item.winrate.img}</div>
                  <div className="card__winrate__logo__oxygen-border"></div>
               </div>
               <div className="card__winrate__text">{props.item.winrate.value}</div>
            </li>
            <li onClick={(e) => e.stopPropagation()} data-tippy-content={props.item.nickname.description} className="card__item card__nickname">
               {props.item.nickname.img}
            </li>
            <li onClick={(e) => e.stopPropagation()} data-tippy-content={props.item.country.description} className="card__item card__country">
               <img src={props.item.country.img} alt="" />
            </li>
         </ul>
      </div>
   );
}

export default Card;