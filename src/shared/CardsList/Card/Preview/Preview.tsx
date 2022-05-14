import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img src="https://cdn.dribbble.com/users/11164888/screenshots/18243569/media/72630edb14fbb22a3f6b33583ea88707.jpg" className={styles.previewImg} />
    </div>
  );
}
