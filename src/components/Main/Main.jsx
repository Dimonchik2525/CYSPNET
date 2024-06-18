import About from "./About/About";
import Advantages from "./Advantages/Advantages";
import Choice from "./Choice/Choice";
import Hero from "./Hero/Hero";
import Opportunities from "./Opportunities/Opportunities";

export const Main = (props) => {
   return (
      <div>
         <Error size={props.size} />
         <Hero size={props.size} />
         <About size={props.size} />
         <Advantages size={props.size} />
         <Opportunities size={props.size} />
         <Choice size={props.size} />
      </div>
   );
}

export default Main;