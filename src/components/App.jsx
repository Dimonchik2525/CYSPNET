import { useEffect, useState } from "react"
import Header from "./Header/Header"
import Main from "./Main/Main"
import Login from "./PopUps/Login"

export const App = () => {
   let [size, setSize] = useState(document.documentElement.clientWidth)
   let [usersArray, setUsersArray] = useState([
      {
         nickName: 'dima',
         mail: 'dima@gmail.com',
         password: '123',
         id: 1
      },
      {
         nickName: 'alina',
         mail: 'alina@gmail.com',
         password: '321',
         id: 2
      }
   ])

   function addNewUser(user) {
      let array = usersArray.slice(0)
      user.id = array.length + 1
      setUsersArray([...array, user])
   }
   console.log(usersArray);
   useEffect(() => {
      function handle() {
         return setSize(document.documentElement.clientWidth)
      }
      window.addEventListener('resize', handle);
      return () => {
         window.removeEventListener('resize', handle);
      };
   }, [])

   //console.log(usersArray);

   return (
      <div className="wrapper">
         <Header addNewUser={addNewUser} usersArray={usersArray} size={size} />
         <Main size={size} />
      </div>
   )
}

export default App
