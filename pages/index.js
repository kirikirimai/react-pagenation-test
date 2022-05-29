import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useEffect } from "react";

export default function Home(data) {
  console.log(data.posts_len)
  useEffect(()=>{
    localStorage.setItem("posts_len",data.posts_len)
  },[])

  return (
    <div className={styles.container}>
      <h1>【Next.js】getServerSidePropsでクエリパラメータを取得する方法</h1>
      <h2>記事の総数：{data.posts_len}</h2>
      <ul>
        {data.posts.map((item)=>{
          return(
            <li key={item.id}>
              <Link href={`/posts/${item.id}`}>
                <a>{item.title}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export const getServerSideProps=async ()=>{
  const res=await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts=await res.json()
  const posts_len=posts.length

  
  return{
    props:{
      posts,
      posts_len
    }
  }
}