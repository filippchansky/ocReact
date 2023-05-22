import { useState } from "react";
import Postlist from "../../components/PostList/postList";
import BtnAdd from "../../components/UI/button/BtnAdd";
import "./catalog.css";
import axios from "axios";
import { useEffect } from "react";


const Catalog = () => {
  const urlPosts = 'http://localhost:8080/api/post' // api постов
  const postsArr = [] // массив постов


  // получаем посты через axios и записываем в переменную postArr
  useEffect(() => { 
    axios.get(urlPosts).then(response => {
      setPost(response.data)
    })
  }, postsArr) 
  
  // console.log(, '- контент')
  // console.log('посты из postData ', posts);
  const [post, setPost] = useState(postsArr); // переменная post хранит массив постов из postArr, функция setPost добавляет посты

  return <Postlist setPost={setPost} post={post} />;
  
};

export default Catalog;
