import React from 'react';
import styles from './layout.css';

interface ILayoutProps {
  children?: React.ReactNode;
}

// Рендер children 
export function Layout({ children }: ILayoutProps) {
  return (
<div className={styles.layout}>
  {children}
</div>
  );
}
