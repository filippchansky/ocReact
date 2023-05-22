import "./commentsItem.css";

const CommentsItem = (props) => {
  console.log(props.comment.name);
  return (
      <div className="comments__item">
        <strong>{props.comment.name}</strong>
        <p>{props.comment.review}</p>
      </div>
  );
};

export default CommentsItem;
