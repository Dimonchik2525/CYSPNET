import Hero from "./Hero/Hero";

export const Main = (props) => {
   return (
      <div>
         <Hero size={props.size} />
      </div>
   );
}

export default Main;