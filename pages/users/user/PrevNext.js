import Link from "next/link";
import { useEffect,useState } from "react";

export default function PrevNext(props) {

  const [len,setLen]=useState(0)

  useEffect(()=>{
    setLen(localStorage.getItem("user_len"))
    console.log("ユーザーのデータ総数")
  },[])

  return (
    <div>
      <p>現在の記事：{props.id} / 最大記事{len}</p>
      <nav className="nav-pn">
        {0<props.prev &&   
        <Link href={`/users/user/${props.prev}`}>
          <a>前の記事</a>
        </Link>
        }

        {len>=props.next &&
        
        <Link href={`/users/user/${props.next}`}>
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
  );
}
