import React from "react";
import styles from "./header.css";
import { SearchBlock } from "./SearchBlock/SearchBlock";
import { SortBlock } from "./SortBlock";
import { ThreadTitle } from "./ThreadTitle";

export function Header({}) {
  // const { Consumer } = TokenContext;
  // const token = useContext(TokenContext);

  return (
    <header className={styles.header}>
      <ThreadTitle />
      <SortBlock />
      {/* <Consumer>{(token) => <SearchBlock token={token} />}</Consumer> */}
      <SearchBlock />
    </header>
  );
}
