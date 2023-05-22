import { useState } from "react";
import { Link } from "react-router-dom";
import ModalHeader from "../UI/modalHeader/ModalHeader";
import "./header.css"
import HeaderInfo from "../headerInfo/HeaderInfo";

const Header = () => {
    const [modalActive, setModalActive] = useState(false)
    return ( 
        <header className="header">
            <div className="header__container container">
                <div className="header__logo">
                    <Link to="/"><img src="https://placeholder.com/50" alt="" /></Link>
                </div>
                <nav className="header__nav">
                    <ul className="nav-menu">
                        <li className="nav-item"><Link to="/catalog">Каталог</Link></li>
                        <li className="nav-item"><Link to="/about">Отзывы</Link></li>
                        <li className="nav-item"><Link to="">Преимущество</Link></li>
                    </ul>
                </nav>
                <button onClick={() => setModalActive(true)} className="header__btn">Связаться</button>
                <ModalHeader active={modalActive} setActive={setModalActive}>
                    <form action="">
                    
                        <div className="header__submit">
                            <h3>Оставьте ваши данные</h3>
                            <input placeholder="Введите имя" type="text" required />
                            <input placeholder="Telegram, Номер телефона" type="text" required />
                            <button type="submit">Отправить</button>
                        </div>
                    </form>
                </ModalHeader>
            </div>
            
        </header>
     );
}
 
export default Header;