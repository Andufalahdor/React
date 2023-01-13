import React from "react";
import styles from "./genericlist.css";
import { Text, EColors, TSizes } from "../../Text";
import { Icon, EIcons } from "../../Icon";

interface IItem {
  text: string | React.ReactNode;
  id: string;
  onClick?: (id: string) => void;
  className?: string;
  As?: "a" | "li" | "button" | "div";
  href?: string;
  icon?: EIcons;
  iSize?: number;
  tSize?: TSizes | number;
  tColor?: EColors;
  divider?: boolean;
}

const NOOP = () => {};

interface IGenericListProps {
  list: IItem[];
}

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {list.map(
        ({
          As = "li",
          text,
          onClick = NOOP,
          className,
          id,
          href,
          icon,
          iSize,
          tSize,
          tColor,
          divider = false,
        }) => (
          <>
            <As
              className={className}
              onClick={() => onClick(id)}
              key={id}
              href={href}
            >
              {icon ? <Icon name={icon} size={iSize} /> : false}
              <Text size={tSize ? tSize : undefined} color={tColor}>
                {text}
              </Text>
            </As>
            {divider ? <div className={styles.divider} /> : false}
          </>
        )
      )}
    </>
  );
}
