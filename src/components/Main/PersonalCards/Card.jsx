import { SVGCardCommunityIcon, SVGCardDisciplineIcon, SVGCardIndustryIcon, SVGCardKPDIcon, SVGCardLeageIcon, SVGCardRatingIcon, SVGCardRoleIcon, SVGCardWinRateIcon } from "../../SvgIcons";
export const Card = (props) => {
   return (
      <div className="card">
         <div className="card__img">
            <img src={props.item.color} alt="" />
         </div>
         <ul className="card__others">
            <li className="card__item card__community">
               {props.item.community}
            </li>
            <li className="card__item card__discipline">
               {props.item.descipline}
            </li>
            <li className="card__item card__industry">
               {props.item.industry}
            </li>
            <li className="card__item card__kpd">
               {props.item.kpd}
            </li>
            <li className="card__item card__leage">
               {props.item.leage}
            </li>
            <li className="card__item card__rating">
               {props.item.rating}
            </li>
            <li className="card__item card__role">
               {props.item.role}
            </li>
            <li className="card__item card__winrate">
               {props.item.winrate}
            </li>
            <li className="card__item card__nickname">
               {props.item.nickname}
            </li>
         </ul>
      </div>
   );
}

export default Card;