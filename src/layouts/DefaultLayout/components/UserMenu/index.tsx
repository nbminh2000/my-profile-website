import React from "react";
import styles from "./UserMenu.module.scss";

export default function UserMenu() {
  return (
    <div>
      <div className={styles.navbarAvatar}>
        <div
          className={styles.avatar}
          style={{
            "--font-size": "3.2px",
            "--border-scale": 1,
          }}
        >
          <img className={styles.avatarImage} src="src/assets/images/avt.jpg" alt="Minh Nguyễn Bình"></img>
        </div>
      </div>
    </div>
  );
}
