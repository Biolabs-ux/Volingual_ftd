import React from "react";
import style from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
function page() {
  return (
    <section className={style.form}>
      <div className={style.left}>
        <div className={style.content}>
          <h1>VOLINGUAL</h1>
          <p>The most popular peer to peer lending at SEA</p>
        </div>
        <div className={style.circle}></div>
        <div className={style.circle1}></div>
      </div>
      <div className={style.right}>
        <Image width={100} height={100} src="/images/Verified Account.png" alt="" />
        <div className={style.con}>
          <h2>Password reset</h2>
          <p>Your password has been reset. You are been redirected to the <span>login screen</span></p>         
            <button><Link href={"/login"}>Return to the login screen</Link></button>
          </div>
        </div>
    </section>
  );
}

export default page;
