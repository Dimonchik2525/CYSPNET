

export const Button = (props) => {

   return (
      <div onClick={() => {
         if (props.class == 'login__form__enterence-button') {
            props.checkLogin()
            props.checkPassword()
            if (props.checkLogin() && props.checkPassword()) {
               props.setLoginActive(false)
               if (!document.documentElement.classList.contains('menu-open')) {
                  document.documentElement.classList.remove('lock')
               }
               //document.documentElement.classList.contains('lock') ? '' : document.documentElement.classList.contains('lock')
            }
         }
         if (props.class == 'menu__access__registration') {
            document.documentElement.classList.add('lock')
            props.setRegistrationActive(true)
         }
         if (props.class == 'registration__form__enterance-button') {
            props.checkLogin()
            props.checkPassword()
            props.checkMail()
            if (props.checkLogin() && props.checkPassword() && props.checkMail() && props.comparePasswords()) {
               props.addNewUser({
                  nickName: props.newUser.nickname,
                  mail: props.newUser.mail,
                  password: props.newUser.password,
               })
               props.mailApprovementRef.current.style.opacity = 1;
               setTimeout(() => props.mailApprovementRef.current.style.opacity = 0, 5000)
            }
         }
         if (props.class == 'password__form__cancel-button') {
            props.setPasswordActive(false)
            props.setLoginActive(true)
            props.setCodeSent(false)
         }
         if (props.class == 'password__form__enterence-button') {
            for (let item of props.usersArray) {
               if (item.mail == props.loginForPass) {
                  props.setCodeSent(true)
               }
            }
         }
      }} className={`${props.class} button`}>
         <button>{props.children}</button>
      </div>
   );
}

export default Button;