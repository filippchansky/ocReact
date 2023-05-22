import "./BtnAdd.css"

const BtnAdd = ({children, ...props}) => {
    return (
        <button className="btn-add" {...props}>
            {children}
        </button>
      );
}
 
export default BtnAdd;