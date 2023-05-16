import React from 'react';
import styles from './post.css';
import ReactDOM from 'react-dom';



export function Post() {
  const node = document.querySelector('#modal_root')
  if (!node) return null


  return ReactDOM.createPortal((
    <div className={styles.modal}>
      <h2>text</h2>

      <div className={styles.content}>
    <p>text</p>
    <p>text</p>
    <p>text</p>
      </div>
    </div>
  ), node);
}

