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
        <Image width={100} height={100}
        src="/images/Open Envelope.png" alt=""
        />
        <div className={style.con}>
          <h2>Password reset</h2>
          <p>We sent a code to <span>johncleo@gmail.com</span></p>
          <form action="">
            <div>
                <input type="" name="" id="" />
                <input type="" name="" id="" />
                <input type="" name="" id="" />
                <input type="" name="" id="" />
                <input type="" name="" id="" />
                <input type="" name="" id="" />
            </div>
            <button>Continue</button>
          </form>
            <div className={style.exist}>
          <p className={style.click}>Didn&#39;t receive the email? <Link href={""}>CLick to resend</Link></p>
            <p>Go back to <Link href={"/signin"}>Sign in</Link></p>
            </div>
          </div>
        </div>
    </section>
  );
}

export default page;
