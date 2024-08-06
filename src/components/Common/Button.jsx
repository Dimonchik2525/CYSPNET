

export const Button = (props) => {
   return (
      <div onClick={() => {
         if (props.class == 'login__form__enterence-button') {
            props.checkLogin()
            props.checkPassword()
         }
         if (props.class == 'menu__access__registration') {
            document.documentElement.classList.add('lock')
            props.setRegistrationActive(true)
         }
      }} className={`${props.class} button`}>
         <button>{props.children}</button>
      </div>
   );
}

export default Button;