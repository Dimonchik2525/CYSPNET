import FooterAknowledge from "./footerAknowledge/FooterAknowledge";
import FooterContacts from "./footerContacts/FooterContacts";
import FooterNav from "./footerNav/FooterNav";
import FooterSupport from "./footerSupport/FooterSupport";

export const MainFooter = (props) => {
   return (
      <footer className="MainFooter">
         <FooterNav />
         <FooterSupport />
         <FooterContacts />
         <FooterAknowledge size={props.size} />
      </footer>
   );
}

export default MainFooter;