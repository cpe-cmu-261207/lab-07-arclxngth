import Link from "next/link";

const CoursePost = (props) => {
  return (
    <>
      <div className="postTemplate">
            <Link href={`./post/${props.id}`}><p className="link-topic">{props.text}</p></Link>
            <img className="picture" src={props.image}></img>
            <p className="like">Likes : {props.likes}</p>
            {/* <Link href={`./post/${post.id}`}>
              <button className="survey_btn">GO TO THIS PAGE</button>
            </Link> */}
      </div>
    </>
  );
};

export default CoursePost;
