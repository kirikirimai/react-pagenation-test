import Link from "next/link";
import { useEffect } from "react";

export default function Users(data) {

  useEffect(()=>{
    localStorage.setItem("user_len",parseInt(data.user_len))
  },[])

  return (
    <div className="wrapper">
      <h1>【Next.js】getStaticPropsでJSONファイルを一覧表示</h1>
      <p>ユーザーの総数：{data.user_len}</p>
      <ul>
        {data.users.map((user) => {
          return (
            <li className="userlist" key={user.id}>
              <Link href={`/users/user/${user.id}`}>
                <a>
                  <p>名前：{user.name}</p>
                  <p>E-MAIL:{user.email}</p>
                  <p>住んでる街：{user.address.city}</p>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}


export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  const user_len = users.length;
  return {
    props: {
      users,
      user_len,
    },
  };
};

