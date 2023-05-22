import { useState } from "react";
import ModalHeader from "../UI/modalHeader/ModalHeader";
import "./postItem.css"

const PostItem = (props) => {
    const [postActive, setPostActive] = useState(false) //управляем состоянием модального окна для постов
    console.log( 'props = ', props) 
    return ( 
        <div className="post" onClick={() => setPostActive(!postActive)}>
            <ModalHeader active={postActive} setActive = {setPostActive}>
                <div className="modal__post">
                    <div className="modal__post-title">
                        <strong>{props.post.post_title}</strong>
                        <img className="modal__post-img" src={props.post.post_imgmodal} alt="" />
                    </div>
                    <div className="modal__post-info">
                        <p>{props.post.post_description}</p>
                    </div>
                </div>
            </ModalHeader>
            <div className="post__content">
                    <strong>{props.post.post_title}</strong>
                    <img src={props.post.post_img} alt="" />
            </div>
        </div>
     );
}
 
export default PostItem;