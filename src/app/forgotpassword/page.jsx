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
        <Image width={1000} height={1000} src="/images/Touch ID.png" alt="" />
        <div className={style.con}>
          <h2>Forgot password</h2>
          <p>No worries. We&#39;ll send you a reset instruction.</p>
          <form action="">
            <div>
            <i class="fa-regular fa-envelope" aria-hidden="true"></i>
            <input type="email" placeholder="Email" />
            </div>
            <button>Reset password</button>
          </form>
            <div className={style.exist}>
            <p>Go back to <Link href={"/signin"}>Sign in</Link></p>
            </div>
          </div>
        </div>
    </section>
  );
}

export default page;
