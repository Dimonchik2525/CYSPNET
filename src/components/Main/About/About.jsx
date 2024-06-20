import Button from "../../Common/Button";
import Tooltip from "../../Common/Tooltip";

export const About = (props) => {
   return (
      <section id="about" className="about">
         <div className="about__container">
            <div className="about__block">
               <div className="about__img">
                  <img className="about__img__main" src="img/about/about__img.png" alt="" />
                  <img className="about__img__patern" src="img/about/about__patern.png" alt="" />
               </div>
               <article className="about__content">
                  <h3 className="about__content__title">О платформе</h3>
                  <div className="about__content__text">Новый формат киберспортивной платформы. Игроки и тренеры, комментаторы и аналитики, команды и клубы, арены и организаторы — здесь каждый может раскрыть свой потенциал, зарабатывать в любимой игре и просто весело проводить время с друзьями.</div>
                  <Button class={'about__content__button'}>Вступить</Button>
               </article>
            </div>
         </div>
         {props.size > 960 ? <Tooltip /> : ''}
      </section>
   )
}

export default About;