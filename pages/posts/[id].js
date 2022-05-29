import PrevNext from "./PrevNext";
import { useEffect,useState } from "react";

export default function Post({ post, prev, next }) {


  return (
    <div className="wrapper">
      <h1>POST(投稿IDは){post.id}</h1>
      <h2>タイトル：{post.title}</h2>
      <div>
        <p>本文</p>
        {post.body}
      </div>
      <PrevNext prev={prev} next={next} id={post.id} />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  console.log(context);
  const id = context.query.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  const prev = parseInt(id) - 1;
  const next = parseInt(id) + 1;

  return {
    props: {
      post,
      prev,
      next,
    },
  };
};
