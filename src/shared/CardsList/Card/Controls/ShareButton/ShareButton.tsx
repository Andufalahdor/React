import React from 'react';
import styles from './sharebutton.css';

export function ShareButton() {
  return (
    <button className={styles.shareButton}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="10" fill="#C4C4C4"/>
      </svg>
    </button>
  );
}