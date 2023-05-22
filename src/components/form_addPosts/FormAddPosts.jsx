import BtnAdd from "../UI/button/BtnAdd";
import Input from "../UI/Input/Input";
import ModalHeader from "../UI/modalHeader/ModalHeader";
import { useState } from "react";
import axios from "axios";

const FormAddPosts = (props) => {
  console.log("propsiki", props);
  // модальное окно добавления постов
  const [postAdd, setPostAdd] = useState(false);
  // управляемые инпуты
  const [postTitle, setPostTitle] = useState("");
  const [postImage, setPostImage] = useState("");
  const [postModalImage, setPostModalImage] = useState("");
  const [postDescription, setPostDescription] = useState("");

  // вводим пароль для добавления поста
  function setPostsLogin() {
    const passwordToSetPost = prompt("Введите пароль");

    if (passwordToSetPost == "123") {
      setPostAdd(!postAdd);
    } else return;
  }

  // функция для отправки данных на сервер
  function addNewPost(e) {
    // проверка на пустые поля
    if (
      postTitle != "" &&
      postImage != "" &&
      postModalImage != "" &&
      postDescription != ""
    ) {
      e.preventDefault(); // страница не обновляется при отправке формы

      const newPost = {
        post_title: postTitle,
        post_img: postImage,
        post_imgmodal: postModalImage,
        post_description: postDescription,
      };

      // отправляем форму постов в базу данных
      axios
        .post("http://localhost:8080/api/post", {
          post_title: postTitle,
          post_img: postImage,
          post_imgmodal: postModalImage,
          post_description: postDescription,
        })
        .then((response) => {
          console.log("axios - ", response.data);
        });
      console.log(newPost);

      // обнуляем поля
      setPostTitle("");
      setPostImage("");
      setPostImage("");
      setPostModalImage("");
      setPostDescription("");

      // закрываем модальное окно добавления постов
      setPostAdd(false);
    }
  }

  return (
    <>
      <BtnAdd onClick={() => setPostsLogin()}>Добавить товар</BtnAdd>
      <ModalHeader active={postAdd} setActive={setPostAdd}>
        <form className="form__add-posts" action="#">
          <strong>Форма для добавления</strong>
          <Input
            placeholder="Введите название"
            required
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
          <Input
            required
            placeholder="картинка"
            value={postImage}
            onChange={(e) => setPostImage(e.target.value)}
          />
          <Input
            required
            placeholder="картинка в модальном"
            value={postModalImage}
            onChange={(e) => setPostModalImage(e.target.value)}
          />
          <textarea
            className="input-add"
            placeholder="Введите описание"
            value={postDescription}
            onChange={(e) => setPostDescription(e.target.value)}
            name=""
            id=""
            cols="30"
            rows="5"
            required
          ></textarea>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <BtnAdd onClick={addNewPost}>Ок</BtnAdd>
            <BtnAdd type="button" onClick={() => setPostAdd(false)}>
              Отмена
            </BtnAdd>
          </div>
        </form>
      </ModalHeader>
    </>
  );
};

export default FormAddPosts;
