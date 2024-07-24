"use client";
import React, {useState } from "react";
import styles from "./page.module.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import Image from 'next/image';

const Page = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={styles.container}>
       <div className={`${styles.sidebar} ${sidebarOpen ? styles.active : ''}`}>
        <Sidebar/>
        </div>
      <div className={styles.main}>
        <div className={styles.topnav}>
          <div className={styles.left}>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
            />
          </div>
          <div className={styles.right}>
            <i className="fa-regular fa-bell"></i>
            <div className={styles.profile}>
              <Image width={1000} height={1000} src="/images/image.png" alt="Profile" />
            </div>
            <div className={styles.hamburgerMenu} onClick={toggleSidebar}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <nav className={styles.nav}>
          <h1>Volingual Translate</h1>
        </nav>
        <div className={styles.container1}>
      <header className={styles.header1}>
        <div className={styles.languageSelector}>
          <select className={styles.dropdown}>
            <option>ENGLISH</option>
            <option>NWEH</option>
          </select>
          <div className={styles.exchange}><i class="fa-solid fa-arrow-right-arrow-left" style={{color: "#000000" }}></i></div>
          <select className={styles.dropdown}>
            <option>NWEH</option>
            <option>ENGLISH</option>
          </select>
        </div>
      </header>
      <div className={styles.maincontent}>
      <div className={styles.content}>
        <textarea className={styles.textArea} placeholder="Enter text..........."></textarea>
      </div>
      <button className={styles.translateButton1}>Translate</button>
        <div className={styles.outputContainer}>
          <textarea className={styles.textArea} ></textarea>
          <button className={styles.copyButton}>Copy</button>
        </div>
      </div>
      <button className={styles.translateButton}>Translate</button>
    </div>
    <div className={styles.icons}>
    <i class="fa-regular fa-copy" style={{color: "#000000" }}></i>
    <i class="fa-solid fa-share-nodes" style={{color: "#000000" }}></i>

    </div>
      </div>
    </div>
  );
}

export default Page;
