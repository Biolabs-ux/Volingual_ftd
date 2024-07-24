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
        <Image width={100} height={100} src="/images/Pin Code.png" alt="" />
        <div className={style.con}>
          <h2>Set a new password</h2>
          <p>Must be atleast 8 characters</p>
          <form action="">
            <div>
            <i class="fa fa-lock" aria-hidden="true"></i>
            <input type="password" placeholder="Password" />
            </div>
            <div>
              <i class="fa fa-lock" aria-hidden="true"></i>
              <input type="password" placeholder="Confirm password" />
            </div>
            <button>Reset password</button>
          </form>
            <div className={style.exist}>
            <p>Go back to <Link href={"/login"}>Sign in</Link></p>
            </div>
          </div>
        </div>
    </section>
  );
}

export default page;
