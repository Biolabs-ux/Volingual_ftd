import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

function Page() {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.navbar}>
            <nav>
              <ul className={styles.navList}>
                <li className={styles.navItem}><Link href="/signup" className={styles.navLink}>Sign Up</Link></li>
                <li className={styles.navItem}><Link href="/login" className={styles.navLink}>Login</Link></li>
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
      <div className={styles.container1}>
        <header className={styles.header1}>
          <h1>
            GENERATE LIFELIKE VOICES <br />
            AND NARRATE STORIES, <br />
            AND INSTANTLY WITH VOLINGUAL&#39;S <br />
            AI TEXT-TO-SPEECH TOOL.
          </h1>
        </header>
        <h3>FEATURES</h3>
        <section className={styles.features}>
          <div className={styles.featureItem}>
            <div className={styles.featureImage}>
              <Image width={100} height={100} layout="responsive" src="/images/gettyimages-917744754-612x612.jpg" alt="AI Text-to-Speech" />
            </div>
            <div className={styles.featureText}>
              <h2>Online AI text-to-speech</h2>
              <p>Use Volingual&#39;s text-to-speech tool in your browser. Paste text, and AI voices or avatars will read it. Realistic sound, no robots. Make engaging content easily!</p>
            </div>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureImage}>
              <Image width={100} height={100} layout="responsive" src="/images/gettyimages-2133122364-612x612.jpg" alt="Diverse Voices" />
            </div>
            <div className={styles.featureText}>
              <h2>Diverse Voices for Your Text</h2>
              <p>Enhance your brand campaigns with Volingual&#39;s diverse AI voices and avatars. Customize voice and style to stand out with powerful speech synthesis!</p>
            </div>
          </div>
        </section>
        {/* <section className={styles.additionalSection}>
          <div className={styles.additionalImage}>
            <Image width={800} height={200} layout="responsive" src="/images/gettyimages-530448809-612x612.jpg" alt="Additional Image" />
          </div>
          <div className={styles.additionalText}>
            <h2>All-in-one solution for <br /> every content creator</h2>
            <p> Create professional videos quickyly and more affordably.Add animated text,images,filters and effects effortlesslt.Volingual streamlines your video production process.</p>
          </div>
        </section> */}
      </div>
    </>
  );
}

export default Page;
