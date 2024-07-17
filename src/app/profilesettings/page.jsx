import React from 'react';
import styles from './page.module.css';
import Sidebar from '@/components/Sidebar/Sidebar';
import Image from 'next/image';

function Page() {
  return (
    <div className={styles.container}>
      <Sidebar className={styles.sidebar} />
      <div className={styles.main}>
        <div className={styles.topnav}>
          <div className={styles.left}>
            <input type="search" name="search" id="search" placeholder='Search' />
          </div>
          <div className={styles.right}>
            <i className="fa-regular fa-bell"></i>
            <div className={styles.profile}><Image width={1000} height={1000} src="/images/image.png" alt="Profile" /></div>
          </div>
        </div>
        <nav className={styles.nav}>
          <h1>Profile Settings</h1>
          <ul>
            <li><button className={styles.btn2}>My profile</button></li>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
