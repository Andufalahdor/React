import React from "react";
import styles from "./header.css";
import { SearchBlock } from "./SearchBlock/SearchBlock";
import { SortBlock } from "./SortBlock";
import { ThreadTitle } from "./ThreadTitle";

interface IHeaderProps {
  token: string;
}

export function Header({ token }: IHeaderProps) {
  return (
    <header className={styles.header}>
      <ThreadTitle />
      <SortBlock />
      <SearchBlock token={token} />
    </header>
  );
}
