import Button from "../../Common/Button";
import Tooltip from "../../Common/Tooltip";

export const About = (props) => {
   return (
      <div className="about">
         <div className="about__container">
            <div className="about__block">
               <div className="about__img">
                  <img src="img/about/about__img.png" alt="" />
               </div>
               <div className="about__content">
                  <div className="about__content__title">О платформе</div>
                  <div className="about__content__text">Новый формат киберспортивной платформы. Игроки и тренеры, комментаторы и аналитики, команды и клубы, арены и организаторы — здесь каждый может раскрыть свой потенциал, зарабатывать в любимой игре и просто весело проводить время с друзьями.</div>
                  <Button class={'about__content__button'}>Вступить</Button>
               </div>
            </div>
         </div>
         {props.size > 960 ? <Tooltip /> : ''}
      </div>
   )
}

export default About;