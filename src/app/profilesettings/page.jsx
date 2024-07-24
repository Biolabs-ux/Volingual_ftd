"use client";
import React, { useState } from 'react';
import styles from './page.module.css';
import Sidebar from '@/components/Sidebar/Sidebar';
import Image from 'next/image';

const Page = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={styles.full}>
      <div className={`${styles.sidebar} ${sidebarOpen ? styles.active : ''}`}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <div className={styles.topnav}>
          <div className={styles.left}>
            <input type="search" name="search" id="search" placeholder="Search" />
          </div>
          <div className={styles.right}>
            <i className="fa-regular fa-bell"></i>
            <div className={styles.profile}>
              <Image width={1000} height={1000} src="/images/image.png" alt="" />
            </div>
            <div className={styles.hamburgerMenu} onClick={toggleSidebar}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className={styles.main}>
          <nav className={styles.nav}>
            <ul>
              <h1>Account Settings</h1>
              <button className={styles.btn2}>My profile</button>
            </ul>
          </nav>
          <div className={styles.main2}>
            <h3>Edit Profile</h3>
            <h5>Remove</h5>
            <div className={styles.main3}>
              <div className={styles.mainleft}>
                <p>Avatar</p>
                <p>Cover photo</p>
              </div>
              <div className={styles.mainright}>
                <div className={styles.mainright1}>
                  <Image width={1000} height={1000} src="/images/image.png" alt="Avatar" />
                  <button>Change</button>
                  <button className={styles.removeButton}>Remove</button>
                </div>
                <div className={styles.mainright2}>
                  <input type="file" name="coverPhoto" id="coverPhoto" />
                  <label htmlFor="coverPhoto">Drag image here or <span> Browse files </span></label>
                  <button>Change</button>
                </div>
                <div className={styles.basicInformation}>
                  <h2>Basic information</h2>
                  <p>Update some personal information. Your address will never be publicly available.</p>
                  <div className={styles.basic}>
                    <div className={styles.mainleft3}>
                      <h2>Full name</h2>
                    </div>
                    <div className={styles.mainright3}>
                      <input type="text" placeholder="First name" />
                      <input type="text" placeholder="Last name" />
                    </div>
                  </div>
                  <div className={styles.basic}>
                    <div className={styles.mainleft3}>
                      <h2>Email</h2>
                    </div>
                    <div className={styles.mainright3}>
                      <input type="email" placeholder="Email" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
