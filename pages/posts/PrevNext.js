import Link from "next/link";
import { useEffect,useState } from "react";

export default function PrevNext(props) {

  const [len,setLen]=useState(0)

  useEffect(()=>{
    setLen(localStorage.getItem("posts_len"))
    console.log("記事データ総数")
  },[])

  return (
    <div>
      <p>現在の記事：{props.id} / 最大記事{len}</p>
      <nav className="nav-pn">
        <Link href={`/posts/${props.prev}`}>
          <a>Prev</a>
        </Link>
        <Link href={`/posts/${props.next}`}>
          <a>Next</a>
        </Link>
      </nav>
      <p>
        <Link href={`/`}>
          <a>一覧へ戻る</a>
        </Link>
      </p>
    </div>
  );
}
