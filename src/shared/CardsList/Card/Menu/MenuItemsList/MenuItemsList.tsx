import React from "react";
import styles from "./menuitemslist.css";
import { EColors } from "../../../../Text";
import { EIcons } from "../../../../Icon";
import { GenericList } from "../../../../Content/GenericList";
import { generateId } from "../../../../../utils/react/generateRandomIndex";

const LIST = [
  {
    icon: EIcons.comment,
    iSize: 15,
    text: "Комментарии",
    tSize: 14,
    tColor: EColors.gray99,
    className: styles.menuItem,
    divider: true,
  },
  {
    icon: EIcons.shared,
    text: "Поделиться",
    tSize: 14,
    tColor: EColors.gray99,
    className: styles.menuItem,
    divider: true,
  },
  {
    icon: EIcons.hide,
    text: "Скрыть",
    tSize: 14,
    tColor: EColors.gray99,
    className: styles.menuItem,
    divider: true,
  },
  {
    icon: EIcons.save,
    text: "Сохранить",
    tSize: 14,
    tColor: EColors.gray99,
    className: styles.menuItem,
    divider: true,
  },
  {
    icon: EIcons.warning,
    text: "Пожаловаться",
    tSize: 14,
    tColor: EColors.gray99,
    className: styles.menuItem,
    divider: true,
  },
].map(generateId);

export function MenuItemsList() {
  return (
    <ul className={styles.MenuItemsList}>
      <GenericList list={LIST} />
    </ul>
  );
}
