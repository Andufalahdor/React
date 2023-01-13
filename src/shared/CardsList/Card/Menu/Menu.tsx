import React from "react";
import styles from "./menu.css";
import { Dropdown } from "./../../../Dropdown/Dropdown";
// import { generateId } from "./../../../../utils/react/generateRandomIndex";
// import { GenericList } from "../../../Content/GenericList";
import { MenuIcon } from "../../../Icons";
import { MenuItemsList } from "./MenuItemsList";
import { Text, EColors } from "../../../Text";

// const LIST = [
//   { text: "Редактировать" },
//   { text: "Переместить" },
//   { text: "Закрыть", className: styles.closeButton },
// ].map(generateId);

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            <MenuIcon></MenuIcon>
          </button>
        }
      >
        <ul className={styles.dropdown}>
          {/* <GenericList list={LIST} /> */}
          <MenuItemsList />
          <button className={styles.closeButton}>
            <Text mobileSize={12} size={14} color={EColors.gray66}>
              Закрыть
            </Text>
          </button>
        </ul>
      </Dropdown>
    </div>
  );
}
