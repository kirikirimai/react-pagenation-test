import Link from "next/link";
import { useEffect,useState } from "react";

export default function User({user,prev,next }) {

  const [len,setLen]=useState(0)

  useEffect(()=>{
    setLen(localStorage.getItem("user_len"))
    console.log("ユーザーのデータ総数")
  },[])

  return (
    <div className="wrapper">
      <h1>ユーザーID：{user.id}</h1>
      <p>名前：{user.name}</p>
      <p>E-MAIL：{user.email}</p>
      <p>住んでる街：{user.address.city}</p>

      <div>
      <p>現在の記事：{user.id} / 最大記事{len}</p>
      <nav className="nav-pn">
        {0<prev &&   
        <Link href={`/users/user/${prev}`}>
          <a>前の記事</a>
        </Link>
        }

        {len>=next &&
        
        <Link href={`/users/user/${next}`}>
          <a>次の記事</a>
        </Link>
        }
      </nav>
      <p>
        <Link href={`/users/`}>
          <a>一覧へ戻る</a>
        </Link>
      </p>
    </div>

    </div>
  )
}

export const getStaticProps = async (context) => {
  console.log(context)
  const id = context.params.id
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const user = await res.json()
  const prev=parseInt(id)-1;
  const next=parseInt(id)+1;

  return {
    props: { 
      user,
      prev,
      next
     }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await res.json()
  const paths = users.map((user) => ({
    params: {
      id: user.id.toString()
    },
  }))


  return {
    paths,
    fallback: false
  }
}
