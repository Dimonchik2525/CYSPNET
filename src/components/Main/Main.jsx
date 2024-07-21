import Error from "../Error/Error";
import MainFooter from "../Footer/MainFooter";
import About from "./About/About";
import Advantages from "./Advantages/Advantages";
import Choice from "./Choice/Choice";
import Faq from "./Faq/Faq";
import Hero from "./Hero/Hero";
import Opportunities from "./Opportunities/Opportunities";
import Statistics from "./Statistics/Statistics";

export const Main = (props) => {
   return (
      <div>
         {/* <Error size={props.size} /> */}
         <Hero size={props.size} />
         {/* <About size={props.size} />
         <Advantages size={props.size} />
         <Opportunities size={props.size} />
         <Choice size={props.size} />
         <Statistics size={props.size} />
         <Faq size={props.size} /> */}
         <MainFooter size={props.size} />
      </div>
   );
}

export default Main;