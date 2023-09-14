import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy;2023 MIAB. All rights reserved.</div>
      <div className={styles.socials}>
        {/* <div className={styles.imgContainer}> */}
        <Image
          src="/1.png"
          width={15}
          className={styles.icon}
          height={15}
          alt="MIAB"
        />
        <Image
          src="/2.png"
          width={15}
          className={styles.icon}
          height={15}
          alt="MIAB"
        />
        <Image
          src="/3.png"
          width={15}
          className={styles.icon}
          height={15}
          alt="MIAB"
        />
        <Image
          src="/4.png"
          width={15}
          className={styles.icon}
          height={15}
          alt="MIAB"
        />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Footer;
