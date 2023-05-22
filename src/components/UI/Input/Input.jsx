import "./Input.css"

const Input = ({children, ...props}) => {
    return (
        <input {...props} className="input-add" />
      );
}
 
export default Input;