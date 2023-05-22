import { useEffect, useState } from "react";
import BtnAdd from "../UI/button/BtnAdd";
import Input from "../UI/Input/Input";
import "./commentsAbout.css";
import CommentsItem from "../commentsItem/CommentsItem";
import axios from "axios";

const CommentsAbout = () => {
  const [comment, setComment] = useState([]);
  const [aboutTitle, setAboutTitle] = useState("");
  const [aboutBody, setAboutBody] = useState("");
  console.log(comment);

  const urlComments = 'http://localhost:8080/api/comment'

  useEffect(()=>{
    axios.get(urlComments).then(response => {
      setComment(response.data, '- axios')
    })
  },[])

  function addComment(e) {
    if (aboutTitle != "" && aboutBody != "") {
      e.preventDefault();
      const newComment = {
        name: aboutTitle,
        review: aboutBody,
      };

      axios.post(urlComments, {
        name: aboutTitle,
        review: aboutBody,
      })

      console.log(aboutTitle);
      console.log(aboutBody);
      setAboutTitle("");
      setAboutBody("")
    }
  }
  return (
    <div className="about__container container">
      <form className="about__form" action="#">
        <strong>Оставьте отзыв:</strong>
        <Input
          placeholder="Введите имя"
          value={aboutTitle}
          onChange={(e) => setAboutTitle(e.target.value)}
          required
        />
        <textarea
          required
          className="input-add"
          placeholder="Отзыв"
          value={aboutBody}
          onChange={(e) => setAboutBody(e.target.value)}
          name=""
          id=""
          cols="30"
          rows="5"
        ></textarea>
        <BtnAdd onClick={addComment}>Отправить</BtnAdd>
      </form>
      <div className="comments__container">
        <h1>Отзывы</h1>
        {comment.map((comment) => (
          <CommentsItem comment={comment} key={comment.id} />
        ))}
      </div>
    </div>
  );
};

export default CommentsAbout;
