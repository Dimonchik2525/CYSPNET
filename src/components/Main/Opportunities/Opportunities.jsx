import { useEffect } from "react";
import OpportunitiesSlider from "./OpportunitiesSlider";
import { Navigation, Pagination } from "swiper/modules";
import Swiper from 'swiper'
import { SVGRubIcon, SVGSettingsIcon, SvgArena1tIcon, SvgArena2tIcon, SvgArena3tIcon, SvgArena5tIcon, SvgArena6tIcon, SvgArenatIcon, SvgClub1tIcon, SvgClub2tIcon, SvgClub3tIcon, SvgClub4tIcon, SvgClubIcon, SvgOrganization2tIcon, SvgOrganization3tIcon, SvgOrganizationIcon, SvgUser2tIcon, SvgUser3tIcon, SvgUser4tIcon, SvgUser5tIcon, SvgUser6tIcon, SvgUserIcon } from "../../SvgIcons";
import Tooltip from "../../Common/Tooltip";

export const Opportunities = (props) => {
   let mainArray = [
      {
         img: <SvgUserIcon />,
         name: 'Пользователям',
         text: 'Выступления на турнирах с призовым фондом',
         id: 'slider1',
         slider: null,
         slide: [
            {
               content: 'Выступления на турнирах с призовым фондом',
               img: <SVGRubIcon />
            },
            {
               content: 'Формула расчета навыка основанная на личных показателях',
               img: <SvgUser2tIcon />
            },
            {
               content: 'Уникальные карточки профиля для пользователей',
               img: <SvgUser3tIcon />
            },
            {
               content: 'Публикация постов и новостей на своей странице',
               img: <SvgUser4tIcon />
            },
            {
               content: 'Создание клуба, команды или организации',
               img: <SvgUser5tIcon />
            },
            {
               content: 'Развитие в одной или нескольких отраслях киберспорта',
               img: <SvgUser6tIcon />
            },
         ],
         color: '#331d21',
         itemColor: '#ff4654',
         fill: 'red'
      },
      {
         img: <SvgOrganizationIcon />,
         name: 'Организациям',
         text: 'Автоматизированная система проведения мероприятий',
         id: 'slider2',
         slider: null,
         slide: [
            {
               content: 'Автоматизированная система проведения мероприятий',
               img: <SVGSettingsIcon />
            },
            {
               content: 'Огромное количество возможностей для настройки турниров',
               img: <SvgOrganization2tIcon />
            },
            {
               content: 'Найм пользователей из разных отраслей для проведения турниров',
               img: <SvgOrganization3tIcon />
            },
            {
               content: 'Возможность проведения платных мероприятий',
               img: <SVGRubIcon />
            },
         ],
         color: '#332306',
         itemColor: '#fabc45',
         fill: 'yellow'
      },
      {
         img: <SvgClubIcon />,
         name: 'Клубам и командам',
         text: 'Гарантированная выплата выигранных призов',
         id: 'slider3',
         slider: null,
         slide: [
            {
               content: 'Гарантированная выплата выигранных призов',
               img: <SvgClub1tIcon />
            },
            {
               content: 'Подписание контрактов с пользователями из разных отраслей',
               img: <SvgClub2tIcon />
            },
            {
               content: 'Просмотр демо матчей для тренировок и разбора игры',
               img: <SvgClub3tIcon />
            },
            {
               content: 'Проведение товарищеских матчей с другими командами',
               img: <SvgClub4tIcon />
            },
         ],
         color: '#0d3331',
         itemColor: '#2ea69f',
         fill: 'green'
      },
      {
         img: <SvgArenatIcon />,
         name: 'Аренам',
         text: 'Удобный и информационный профиль',
         id: 'slider4',
         slider: null,
         slide: [
            {
               content: 'Удобный и информационный профиль',
               img: <SvgArena1tIcon />
            },
            {
               content: 'Система рекомендаций позволит привлечь новых клиентов',
               img: <SvgArena2tIcon />
            },
            {
               content: 'Онлайн бронирование компьютеров через наш сайт',
               img: <SvgArena3tIcon />
            },
            {
               content: 'Автоматизированная система проведения LAN мероприятий',
               img: <SVGSettingsIcon />
            },
            {
               content: 'Найм организаторов для проведения масштабных мероприятий',
               img: <SvgArena5tIcon />
            },
            {
               content: 'Возможность стать домашней ареной клуба или команды',
               img: <SvgArena6tIcon />
            },
         ],
         color: '#06364a',
         itemColor: '#33c0fb',
         fill: 'blue'
      },
   ]

   useEffect(() => {
      let slider;

      function initSwiper() {
         slider = new Swiper('.opportunities__slider', {
            modules: [Navigation],
            observer: true,
            observeParents: true,
            slidesPerView: 4,
            spaceBetween: 25,
            autoHeight: true,
            speed: 800,
            breakpoints: {
               320: {
                  slidesPerView: 1,
               },
               610: {
                  slidesPerView: 2,
               },
               910: {
                  slidesPerView: 3,
               },
               1350: {
                  slidesPerView: 4
               },
            }
         });
      }

      initSwiper();

      return () => {
         if (slider) {
            slider.destroy();
         }
      };
   }, []);
   useEffect(() => {

      function initSwiper(slider, id) {
         slider.slider = new Swiper(`.opportunities-mini__slider${id}`, {
            modules: [Navigation, Pagination],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 20,
            autoHeight: true,
            speed: 800,
            pagination: {
               el: '.opportunities-mini__pagination',
               clickable: true,
            },
            navigation: {
               prevEl: '.opportunities-mini__navigation__left',
               nextEl: '.opportunities-mini__navigation__right',
            },
         });
      }

      mainArray.map((item, ind) => {
         initSwiper(item, ind);
      })

      return () => {
         mainArray.forEach((item) => {
            if (item.slider) {
               item.slider.destroy()
            }
         })
      };
   }, []);
   return (
      <section id="opportunities" className="opportunities">
         <div className="opportunities__container">
            <div className="opportunities__block">
               <div className="opportunities__title">Предоставляем массу возможностей</div>
               <div className="opportunities__slider swiper">
                  <div className="opportunities__wrapper swiper-wrapper">
                     <div className="opportunities__slide swiper-slide">
                        <div className="opportunities__slide__wrapper">
                           <OpportunitiesSlider mainArray={mainArray} class={0} />
                        </div>
                     </div>
                     <div className="opportunities__slide swiper-slide">
                        <div className="opportunities__slide__wrapper">
                           <OpportunitiesSlider mainArray={mainArray} class={1} />
                        </div>
                     </div>
                     <div className="opportunities__slide swiper-slide">
                        <div className="opportunities__slide__wrapper">
                           <OpportunitiesSlider mainArray={mainArray} class={2} />
                        </div>
                     </div>
                     <div className="opportunities__slide swiper-slide">
                        <div className="opportunities__slide__wrapper">
                           <OpportunitiesSlider mainArray={mainArray} class={3} />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {props.size > 960 ? <Tooltip /> : ''}
      </section>
   );
}

export default Opportunities;