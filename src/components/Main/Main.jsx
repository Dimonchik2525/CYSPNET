import Error from "../Error/Error";
import MainFooter from "../Footer/MainFooter";
import About from "./About/About";
import Advantages from "./Advantages/Advantages";
import Choice from "./Choice/Choice";
import Faq from "./Faq/Faq";
import Hero from "./Hero/Hero";
import Opportunities from "./Opportunities/Opportunities";
import Statistics from "./Statistics/Statistics";
import PersonalCards from "./PersonalCards/PersonalCards"
import * as React from "react";

export const Main = (props) => {
   return (
      <div>
         {props.error ? <Error size={props.size} />
            : <React.Fragment><Hero size={props.size} />
               <About size={props.size} />
               <Advantages size={props.size} />
               <Opportunities size={props.size} />
               <Choice size={props.size} />
               <PersonalCards size={props.size} />
               <Statistics size={props.size} />
               <Faq size={props.size} />
               <MainFooter size={props.size} /> </React.Fragment>}
      </div>
   );
}

export default Main;