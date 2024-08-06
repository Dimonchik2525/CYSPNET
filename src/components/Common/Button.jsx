

export const Button = (props) => {
   return (
      <div onClick={() => {
         if (props.class == 'login__form__enterence-button') {
            props.checkLogin()
            props.checkPassword()
         }
      }} className={`${props.class} button`}>
         <button>{props.children}</button>
      </div>
   );
}

export default Button;