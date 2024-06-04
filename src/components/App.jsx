import { useEffect, useState } from "react"
import Header from "./Header/Header"

export const App = () => {
   let [size, setSize] = useState(document.documentElement.clientWidth)
   useEffect(() => {
      function handle() {
         return setSize(document.documentElement.clientWidth)
      }
      window.addEventListener('resize', handle);
      return () => {
         window.removeEventListener('resize', handle);
      };
   }, [])

   return (
      <div className="wrapper">
         <Header size={size} />
      </div>
   )
}

export default App
