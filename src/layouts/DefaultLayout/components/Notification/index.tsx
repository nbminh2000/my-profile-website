import React from "react";
import styles from "./Notification.module.scss";
import BellIcon from "../../../../assets/icons/BellIcon";

export default function Notification() {
  return (
    <div>
      <div className={styles.notification}>
        <BellIcon />
      </div>
    </div>
  );
}