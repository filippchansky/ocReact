import FormAddPosts from "../form_addPosts/FormAddPosts";
import PostItem from "../postItem/PostItem";

const Postlist = ({ post, setPost }) => {
  // console.log(setPost)

  return (
    <div className="catalog__container container">
      <div className="catalog__btn-add">
         <FormAddPosts/> {/*компонент для добавления постов} */}
      </div>
      <div className="posts__container">
        
        {/* отрисовываем список постов */}

        {post.map((post) => (
          <PostItem post={post} key={post.post_id} />
        ))}
      </div>
    </div>
  );
};

export default Postlist;
