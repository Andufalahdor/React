import React from 'react';
import styles from './userlink.css';

export function UserLink() {
  return (
    <div className={styles.userLink}>
    <img src="https://cdn.dribbble.com/users/1507273/screenshots/18041565/media/32eab32adcf12462110b745f4b5f2293.png" alt="avatar" className={styles.avatar} />
    <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
    </div>
  );
}
