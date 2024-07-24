import React from 'react';
import styles from './page.module.css';

function page() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.navbar}>
          <nav>
            <ul className={styles.navList}>
              <li className={styles.navItem}><a href="#home" className={styles.navLink}>Home</a></li>
              <li className={styles.navItem}><a href="#about" className={styles.navLink}>About</a></li>
              <li className={styles.navItem}><a href="#services" className={styles.navLink}>Services</a></li>
              <li className={styles.navItem}><a href="#why-us" className={styles.navLink}>Why Us</a></li>
              <li className={styles.navItem}><a href="#testimonials" className={styles.navLink}>Testimonials</a></li>
              <li className={styles.navItem}><a href="#contact" className={styles.navLink}>Contact</a></li>
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