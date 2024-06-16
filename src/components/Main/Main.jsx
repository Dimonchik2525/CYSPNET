import About from "./About/About";
import Advantages from "./Advantages/Advantages";
import Hero from "./Hero/Hero";
import Opportunities from "./Opportunities/Opportunities";

export const Main = (props) => {
   return (
      <div>
         <Hero size={props.size} />
         <About size={props.size} />
         <Advantages size={props.size} />
         <Opportunities size={props.size} />
      </div>
   );
}

export default Main;