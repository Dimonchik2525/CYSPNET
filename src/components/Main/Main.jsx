import About from "./About/About";
import Hero from "./Hero/Hero";

export const Main = (props) => {
   return (
      <div>
         <Hero size={props.size} />
         <About size={props.size} />
      </div>
   );
}

export default Main;