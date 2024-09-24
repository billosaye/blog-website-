import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://d27fp5ulgfd7w2.cloudfront.net/wp-content/uploads/2019/01/08160759/tech-blogs-1.jpg"
        alt=""
      />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Life</span>
          <span className="postCat">Music</span>
        </div>

        <span className="postTitle">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
        <p className="postDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          aperiam quaerat soluta reiciendis aspernatur ipsum laborum provident,
          nesciunt natus laboriosam delectus porro tenetur dicta eaque
          consequatur pariatur harum culpa voluptas?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          aperiam quaerat soluta reiciendis aspernatur ipsum laborum provident,
          nesciunt natus laboriosam delectus porro tenetur dicta eaque
          consequatur pariatur harum culpa voluptas?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          aperiam quaerat soluta reiciendis aspernatur ipsum laborum provident,
          nesciunt natus laboriosam delectus porro tenetur dicta eaque
          consequatur pariatur harum culpa voluptas?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          aperiam quaerat soluta reiciendis aspernatur ipsum laborum provident,
          nesciunt natus laboriosam delectus porro tenetur dicta eaque
          consequatur pariatur harum culpa voluptas?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          aperiam quaerat soluta reiciendis aspernatur ipsum laborum provident,
          nesciunt natus laboriosam delectus porro tenetur dicta eaque
          consequatur pariatur harum culpa voluptas?
        </p>
      </div>
    </div>
  );
}
