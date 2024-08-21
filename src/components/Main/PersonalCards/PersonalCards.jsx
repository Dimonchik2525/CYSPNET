import { useEffect, useState } from "react";
import { SVGCardArrowIcon, SVGCardCommunityIcon, SVGCardDisciplineIcon, SVGCardIndustryIcon, SVGCardInfoIcon, SVGCardKPDIcon, SVGCardLeageIcon, SVGCardRatingIcon, SVGCardRoleIcon, SVGCardSwiperIcon, SVGCardWinRateIcon, SvgArrowIcon, SvgLogoIcon } from "../../SvgIcons";
import Card from './Card'
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import * as React from "react";
import Tooltip from "../../Common/Tooltip";
export let mainArray = [
   {
      logo: <SvgLogoIcon />,
      color: "img/cards/card__red.png",
      level: {
         img: 98,
         description: 'Уровень навыка',
         name: 'level'
      },
      discipline: {
         img: <SVGCardDisciplineIcon />,
         description: 'Дисциплина',
         name: 'discipline',
      },
      industry: {
         img: <SVGCardIndustryIcon />,
         description: 'Отрасль',
         name: 'industry',
      },
      leage: {
         img: <SVGCardLeageIcon />,
         description: 'Лига',
         name: 'leage',
      },
      kpd: {
         img: <SVGCardKPDIcon />,
         value: '3.3',
         description: 'Основные показатели',
         name: 'kpd'
      },
      winrate: {
         img: <SVGCardWinRateIcon />,
         value: '57%',
         description: 'Основные показатели',
         name: 'winrate'
      },
      rating: {
         img: <SVGCardRatingIcon />,
         value: '34',
         description: 'Основные показатели',
         name: 'rating',
      },
      nickname: {
         img: 'CYSPNET',
         description: 'Никнейм',
         name: 'nickname'
      },
      role: {
         img: <SVGCardRoleIcon />,
         description: 'Роль',
         name: 'role',
      },
      community: {
         img: <SVGCardCommunityIcon />,
         description: 'Команда или сообщество',
         name: 'community',
      },
      country: {
         img: 'img/cards/card__contry.png',
         description: 'Страна пользователя',
         name: 'country',
      }
   },
   {
      logo: <SvgLogoIcon />,
      color: "img/cards/card__silver.png",
      level: {
         img: 98,
         description: 'Уровень навыка',
         name: 'level'
      },
      discipline: {
         img: <SVGCardDisciplineIcon />,
         description: 'Дисциплина',
         name: 'discipline',
      },
      industry: {
         img: <SVGCardIndustryIcon />,
         description: 'Отрасль',
         name: 'industry',
      },
      leage: {
         img: <SVGCardLeageIcon />,
         description: 'Лига',
         name: 'leage',
      },
      kpd: {
         img: <SVGCardKPDIcon />,
         value: '3.3',
         description: 'Основные показатели',
         name: 'kpd'
      },
      winrate: {
         img: <SVGCardWinRateIcon />,
         value: '57%',
         description: 'Основные показатели',
         name: 'winrate'
      },
      rating: {
         img: <SVGCardRatingIcon />,
         value: '34',
         description: 'Основные показатели',
         name: 'rating',
      },
      nickname: {
         img: 'CYSPNET',
         description: 'Никнейм',
         name: 'nickname'
      },
      role: {
         img: <SVGCardRoleIcon />,
         description: 'Роль',
         name: 'role',
      },
      community: {
         img: <SVGCardCommunityIcon />,
         description: 'Команда или сообщество',
         name: 'community',
      },
      country: {
         img: 'img/cards/card__contry.png',
         description: 'Страна пользователя',
         name: 'country',
      }
   },
   {
      logo: <SvgLogoIcon />,
      color: "img/cards/card__red.png",
      level: {
         img: 98,
         description: 'Уровень навыка',
         name: 'level'
      },
      discipline: {
         img: <SVGCardDisciplineIcon />,
         description: 'Дисциплина',
         name: 'discipline',
      },
      industry: {
         img: <SVGCardIndustryIcon />,
         description: 'Отрасль',
         name: 'industry',
      },
      leage: {
         img: <SVGCardLeageIcon />,
         description: 'Лига',
         name: 'leage',
      },
      kpd: {
         img: <SVGCardKPDIcon />,
         value: '3.3',
         description: 'Основные показатели',
         name: 'kpd'
      },
      winrate: {
         img: <SVGCardWinRateIcon />,
         value: '57%',
         description: 'Основные показатели',
         name: 'winrate'
      },
      rating: {
         img: <SVGCardRatingIcon />,
         value: '34',
         description: 'Основные показатели',
         name: 'rating',
      },
      nickname: {
         img: 'CYSPNET',
         description: 'Никнейм',
         name: 'nickname'
      },
      role: {
         img: <SVGCardRoleIcon />,
         description: 'Роль',
         name: 'role',
      },
      community: {
         img: <SVGCardCommunityIcon />,
         description: 'Команда или сообщество',
         name: 'community',
      },
      country: {
         img: 'img/cards/card__contry.png',
         description: 'Страна пользователя',
         name: 'country',
      }
   },
   {
      logo: <SvgLogoIcon />,
      color: "img/cards/card__silver.png",
      level: {
         img: 98,
         description: 'Уровень навыка',
         name: 'level'
      },
      discipline: {
         img: <SVGCardDisciplineIcon />,
         description: 'Дисциплина',
         name: 'discipline',
      },
      industry: {
         img: <SVGCardIndustryIcon />,
         description: 'Отрасль',
         name: 'industry',
      },
      leage: {
         img: <SVGCardLeageIcon />,
         description: 'Лига',
         name: 'leage',
      },
      kpd: {
         img: <SVGCardKPDIcon />,
         value: '3.3',
         description: 'Основные показатели',
         name: 'kpd'
      },
      winrate: {
         img: <SVGCardWinRateIcon />,
         value: '57%',
         description: 'Основные показатели',
         name: 'winrate'
      },
      rating: {
         img: <SVGCardRatingIcon />,
         value: '34',
         description: 'Основные показатели',
         name: 'rating',
      },
      nickname: {
         img: 'CYSPNET',
         description: 'Никнейм',
         name: 'nickname'
      },
      role: {
         img: <SVGCardRoleIcon />,
         description: 'Роль',
         name: 'role',
      },
      community: {
         img: <SVGCardCommunityIcon />,
         description: 'Команда или сообщество',
         name: 'community',
      },
      country: {
         img: 'img/cards/card__contry.png',
         description: 'Страна пользователя',
         name: 'country',
      }
   },
   {
      logo: <SvgLogoIcon />,
      color: "img/cards/card__red.png",
      level: {
         img: 98,
         description: 'Уровень навыка',
         name: 'level'
      },
      discipline: {
         img: <SVGCardDisciplineIcon />,
         description: 'Дисциплина',
         name: 'discipline',
      },
      industry: {
         img: <SVGCardIndustryIcon />,
         description: 'Отрасль',
         name: 'industry',
      },
      leage: {
         img: <SVGCardLeageIcon />,
         description: 'Лига',
         name: 'leage',
      },
      kpd: {
         img: <SVGCardKPDIcon />,
         value: '3.3',
         description: 'Основные показатели',
         name: 'kpd'
      },
      winrate: {
         img: <SVGCardWinRateIcon />,
         value: '57%',
         description: 'Основные показатели',
         name: 'winrate'
      },
      rating: {
         img: <SVGCardRatingIcon />,
         value: '34',
         description: 'Основные показатели',
         name: 'rating',
      },
      nickname: {
         img: 'CYSPNET',
         description: 'Никнейм',
         name: 'nickname'
      },
      role: {
         img: <SVGCardRoleIcon />,
         description: 'Роль',
         name: 'role',
      },
      community: {
         img: <SVGCardCommunityIcon />,
         description: 'Команда или сообщество',
         name: 'community',
      },
      country: {
         img: 'img/cards/card__contry.png',
         description: 'Страна пользователя',
         name: 'country',
      }
   },
   {
      logo: <SvgLogoIcon />,
      color: "img/cards/card__silver.png",
      level: {
         img: 98,
         description: 'Уровень навыка',
         name: 'level'
      },
      discipline: {
         img: <SVGCardDisciplineIcon />,
         description: 'Дисциплина',
         name: 'discipline',
      },
      industry: {
         img: <SVGCardIndustryIcon />,
         description: 'Отрасль',
         name: 'industry',
      },
      leage: {
         img: <SVGCardLeageIcon />,
         description: 'Лига',
         name: 'leage',
      },
      kpd: {
         img: <SVGCardKPDIcon />,
         value: '3.3',
         description: 'Основные показатели',
         name: 'kpd'
      },
      winrate: {
         img: <SVGCardWinRateIcon />,
         value: '57%',
         description: 'Основные показатели',
         name: 'winrate'
      },
      rating: {
         img: <SVGCardRatingIcon />,
         value: '34',
         description: 'Основные показатели',
         name: 'rating',
      },
      nickname: {
         img: 'CYSPNET',
         description: 'Никнейм',
         name: 'nickname'
      },
      role: {
         img: <SVGCardRoleIcon />,
         description: 'Роль',
         name: 'role',
      },
      community: {
         img: <SVGCardCommunityIcon />,
         description: 'Команда или сообщество',
         name: 'community',
      },
      country: {
         img: 'img/cards/card__contry.png',
         description: 'Страна пользователя',
         name: 'country',
      }
   },
   {
      logo: <SvgLogoIcon />,
      color: "img/cards/card__red.png",
      level: {
         img: 98,
         description: 'Уровень навыка',
         name: 'level'
      },
      discipline: {
         img: <SVGCardDisciplineIcon />,
         description: 'Дисциплина',
         name: 'discipline',
      },
      industry: {
         img: <SVGCardIndustryIcon />,
         description: 'Отрасль',
         name: 'industry',
      },
      leage: {
         img: <SVGCardLeageIcon />,
         description: 'Лига',
         name: 'leage',
      },
      kpd: {
         img: <SVGCardKPDIcon />,
         value: '3.3',
         description: 'Основные показатели',
         name: 'kpd'
      },
      winrate: {
         img: <SVGCardWinRateIcon />,
         value: '57%',
         description: 'Основные показатели',
         name: 'winrate'
      },
      rating: {
         img: <SVGCardRatingIcon />,
         value: '34',
         description: 'Основные показатели',
         name: 'rating',
      },
      nickname: {
         img: 'CYSPNET',
         description: 'Никнейм',
         name: 'nickname'
      },
      role: {
         img: <SVGCardRoleIcon />,
         description: 'Роль',
         name: 'role',
      },
      community: {
         img: <SVGCardCommunityIcon />,
         description: 'Команда или сообщество',
         name: 'community',
      },
      country: {
         img: 'img/cards/card__contry.png',
         description: 'Страна пользователя',
         name: 'country',
      }
   },
   {
      logo: <SvgLogoIcon />,
      color: "img/cards/card__silver.png",
      level: {
         img: 98,
         description: 'Уровень навыка',
         name: 'level'
      },
      discipline: {
         img: <SVGCardDisciplineIcon />,
         description: 'Дисциплина',
         name: 'discipline',
      },
      industry: {
         img: <SVGCardIndustryIcon />,
         description: 'Отрасль',
         name: 'industry',
      },
      leage: {
         img: <SVGCardLeageIcon />,
         description: 'Лига',
         name: 'leage',
      },
      kpd: {
         img: <SVGCardKPDIcon />,
         value: '3.3',
         description: 'Основные показатели',
         name: 'kpd'
      },
      winrate: {
         img: <SVGCardWinRateIcon />,
         value: '57%',
         description: 'Основные показатели',
         name: 'winrate'
      },
      rating: {
         img: <SVGCardRatingIcon />,
         value: '34',
         description: 'Основные показатели',
         name: 'rating',
      },
      nickname: {
         img: 'CYSPNET',
         description: 'Никнейм',
         name: 'nickname'
      },
      role: {
         img: <SVGCardRoleIcon />,
         description: 'Роль',
         name: 'role',
      },
      community: {
         img: <SVGCardCommunityIcon />,
         description: 'Команда или сообщество',
         name: 'community',
      },
      country: {
         img: 'img/cards/card__contry.png',
         description: 'Страна пользователя',
         name: 'country',
      }
   }
]
let slides = []

mainArray.map((item, ind) => {
   slides.push(
      <Card key={Math.random()} item={item} />
   )
})

export const PersonalCards = (props) => {
   let [info, setInfo] = useState(false)
   useEffect(() => {
      let slider;

      function initSwiper() {
         let slideWrapper = document.querySelector('.personalCards__slider')
         slider = new Swiper('.personalCards__slider', {
            modules: [Navigation],
            observer: true,
            observeParents: true,
            slidesPerView: 3,
            spaceBetween: 20,
            slideToClickedSlide: true,
            //autoHeight: true,
            centeredSlides: true,
            loop: true,
            speed: 500,
            navigation: {
               prevEl: '.personalCards__slider__navigation__left',
               nextEl: '.personalCards__slider__navigation__right',
            },
            breakpoints: {
               320: {
                  slidesPerView: 3,
                  spaceBetween: -45
               },
               500: {
                  slidesPerView: 3,
                  spaceBetween: -45
               },
               770: {
                  slidesPerView: 3,
                  spaceBetween: 20
               },
               1350: {
                  slidesPerView: 3
               },
            },
         });
      }
      initSwiper();

      return () => {
         if (slider) {
            slider.destroy();
         }
      };
   }, [props.size]);
   return (
      <section id="cards" onClick={() => { info ? setInfo(false) : '' }} className="personalCards">
         <div className={`personalCards__blur ${info ? "blured" : ''}`}>
         </div>
         <div className={`personalCards__container ${info ? "blured" : ''}`}>
            <div className="personalCards__block">
               <div className="personalCards__slider swiper">
                  <div className={`personalCards__wrapper swiper-wrapper ${!info ? 'invisible' : 'visible'}`}>
                     {slides}
                  </div>
                  <div className="personalCards__slider__navigation">
                     <button className="personalCards__slider__navigation__left">
                        <SvgArrowIcon />
                     </button>
                     <button className="personalCards__slider__navigation__right">
                        <SvgArrowIcon />
                     </button>
                  </div>
               </div>
               <div className="personalCards__info">
                  <button data-tippy-content='additional information' onClick={() => setInfo(true)} className="personalCards__info__check">
                     <div className="personalCards__info__check__wrapper">
                        <SVGCardInfoIcon />
                     </div>
                  </button>
                  <div className="personalCards__info__swipe">
                     {props.size < 640 ?
                        <React.Fragment>
                           <div className="personalCards__info__swipe__arrow"><SVGCardArrowIcon /></div>
                           <div className="personalCards__info__swipe__hand"><SVGCardSwiperIcon /></div>
                        </React.Fragment>
                        : ''}
                  </div>
               </div>
               <h2 className="personalCards__title">Ваши персональные карточки</h2>
               <h3 className="personalCards__subtitle">У каждого пользователя, команды и даже сообщества есть личная карточка с рейтингом и информацией. Она упрощает поиск и общение между пользователями.</h3>
            </div>
         </div>
         {info ?
            <div onClick={(e) => e.stopPropagation()} className="personalCards__tip">
               Клик на подсвечиваемые элементы покажет подробную информацию
            </div>
            : ''
         }
         {props.size > 960 ? <Tooltip /> : ''}
      </section>
   );
}
export default PersonalCards;