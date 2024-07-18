import FooterNav from "./footerNav/FooterNav";
import FooterSupport from "./footerSupport/FooterSupport";

export const MainFooter = () => {
   return (
      <footer className="MainFooter">
         <FooterNav />
         <FooterSupport />
      </footer>
   );
}

export default MainFooter;