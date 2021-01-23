import { useEffect, useState } from "react";
import axios from "axios";
import CoursePost from "../../component/CoursePost"

const baseURL = "https://dummyapi.io/data/api";
const appID = "600b933802fab9402963a47e";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseURL}/post`, { headers: { "app-id": appID } })
      .then((res) => {
        setPosts(res.data.data);
      });
  }, []);

  function renderPosts() {
    return posts.map((post) => {
      return (
          <CoursePost {...post} key={Math.random()}/>
      );
    });
  }
  if(posts.length){
      return (
        <>
          <div className="header">
            <h1 className="header-txt">ALL POSTS</h1>
          </div>
          <div className="news-feed-template">{renderPosts()}</div>
        </>
      );
  }
  else{
    return (
      <></>
    );
    }
};

export default Posts;
