

export const Button = (props) => {
   return (
      <div className={`${props.class} button`}>
         <button>{props.children}</button>
      </div>
   );
}

export default Button;