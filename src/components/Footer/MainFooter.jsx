import FooterContacts from "./footerContacts/FooterContacts";
import FooterNav from "./footerNav/FooterNav";
import FooterSupport from "./footerSupport/FooterSupport";

export const MainFooter = () => {
   return (
      <footer className="MainFooter">
         <FooterNav />
         <FooterSupport />
         <FooterContacts />
      </footer>
   );
}

export default MainFooter;