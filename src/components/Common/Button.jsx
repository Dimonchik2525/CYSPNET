

export const Button = (props) => {
   return (
      <div className="button">
         <button className={`${props.class} button`}>{props.children}</button>
      </div>
   );
}

export default Button;