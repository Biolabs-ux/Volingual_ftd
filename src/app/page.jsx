import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

function page() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.navbar}>
          <nav>
            <ul className={styles.navList}>
              <li className={styles.navItem}><Link href={"signup"} className={styles.navLink}>Sign UP</Link></li>
              <li className={styles.navItem}><Link href={"login"} className={styles.navLink}>Login</Link></li>
            </ul>
          </nav>
        </div>
        <div className={styles.logo}>VOLINGUAL</div>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>
            Our Native<br />
            Languages<br />
            Matter
          </h1>
          <button className={styles.heroButton}>Learn More</button>
        </div>
      </header>
    </div>
  );
};

export default page