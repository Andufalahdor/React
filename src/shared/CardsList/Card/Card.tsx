import React from 'react';
import styles from './card.css';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';

export function Card() {
  return (
    <li className={styles.card}>
      {/* <div className={styles.textContent}></div> */} 
      <TextContent />
      {/* <div className={styles.preview}></div> */}
      <Preview />
      {/* <div className={styles.menu}></div> */}
      <Menu />
      {/* <div className={styles.controls}></div> */}
      <Controls />
    </li>
  );
}
