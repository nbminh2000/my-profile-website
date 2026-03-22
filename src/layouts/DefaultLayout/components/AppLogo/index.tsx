import styles from "./AppLogo.module.scss";
import logo from "@/assets/images/nbm-logo.png";

export default function AppLogo() {
  return (
    <div className={styles.container}>
      <a href="/">
        <img
          className={styles.logo}
          src={logo}
          alt="NBM logo"
        />
      </a>
      <a>
        <div className={styles.title}>NGUYỄN BÌNH MINH</div>
      </a>
    </div>
  );
}
