import React from "react";
import styles from "./genericlist.css";

interface IItem {
  text: string;
  id: string;
  onClick?: (id: string) => void;
  className?: string;
  As?: "a" | "li" | "button" | "div";
  href?: string;
}

const NOOP = () => {};

interface IGenericListProps {
  list: IItem[];
}

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {list.map(({ As = "li", text, onClick = NOOP, className, id, href }) => (
        <As
          className={className}
          onClick={() => onClick(id)}
          key={id}
          href={href}
        >
          {text}
        </As>
      ))}
    </>
  );
}
