import React from "react";
import styles from "./text.css";
import classNames from "classnames";

export enum EColors {
  black = "black",
  orange = "orange",
  green = "green",
  white = "white",
  grayF4 = "grayF4",
  grayF3 = "grayF3",
  grayD9 = "grayD9",
  grayC4 = "grayC4",
  gray99 = "gray99",
  gray66 = "gray66",
}
type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

interface ItextProps {
  As?: "span" | "h1" | "h2" | "h3" | "h4" | "p" | "div";
  children?: React.ReactNode;
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColors;
}

export function Text(props: ItextProps) {
  const {
    As = "span",
    color = EColors.black,
    children,
    size,
    mobileSize,
    tabletSize,
    desktopSize,
  } = props;

  const classes = classNames(
    styles[`s${size}`],
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desktopSize}`]]: desktopSize },
    styles[color]
  );

  return <As className={classes}>{children}</As>;
}
