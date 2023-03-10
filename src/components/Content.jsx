import React, { useEffect, useState } from "react";
import SinglePost from "./SinglePost";

const Content = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://content-post.vercel.app/content")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.data);
        // console.log(data.data);
      });
  }, [posts]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {posts?.map((post) => (
        <SinglePost post={post} key={post._id} />
      ))}
    </div>
  );
};

export default Content;
