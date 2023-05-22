import "./modalHeader.css"

const ModalHeader = ({active, setActive, children}) => {
    // console.log(active, setActive)
    // active(false) - модальное окно скрыто
    // active(true) - модальное окно открыто
    // setActive - изменяет переменную active
    // children - контент в модальном окне
    return ( 
        <div className={active? 'header__modal open': 'header__modal'} onClick={() => setActive(false)}>
            <div className="header__modal-content" onClick={(e) => e.stopPropagation() }>
                {children}
            </div>
        </div>
     );
}
 
export default ModalHeader;