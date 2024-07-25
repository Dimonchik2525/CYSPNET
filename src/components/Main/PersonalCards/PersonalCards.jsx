import { SVGCardCommunityIcon, SVGCardDisciplineIcon, SVGCardIndustryIcon, SVGCardKPDIcon, SVGCardLeageIcon, SVGCardRatingIcon, SVGCardRoleIcon, SVGCardWinRateIcon } from "../../SvgIcons";
import Card from './Card'
export const PersonalCards = () => {
   let mainArray = [
      {
         color: "img/cards/card__red.png",
         level: 98,
         discipline: <SVGCardDisciplineIcon />,
         industry: <SVGCardIndustryIcon />,
         contry: '',
         leage: <SVGCardLeageIcon />,
         kpd: <SVGCardKPDIcon />,
         winrate: <SVGCardWinRateIcon />,
         rating: <SVGCardRatingIcon />,
         nickname: 'CYSPNET',
         role: <SVGCardRoleIcon />,
         community: <SVGCardCommunityIcon />,
      }
   ]
   let slide = []
   mainArray.map((item, ind) => {
      slide.push(
         <Card key={ind} item={item} />
      )
   })

   return (
      <section className="personalCards">
         <div className="personalCards__container">
            <div className="personalCards__block">
               {slide}
               <h2 className="personalCards__title">Ваши персональные карточки</h2>
               <h3 className="personalCards__subtitle">У каждого пользователя, команды и даже сообщества есть личная карточка с рейтингом и информацией. Она упрощает поиск и общение между пользователями.</h3>
            </div>
         </div>
      </section>
   );
}

export default PersonalCards;