import styles from "./AppLogo.module.scss";

export default function AppLogo() {
  return (
    <div className={styles.container}>
      <a href="/">
        <img
          className={styles.logo}
          src="/assets/images/nbm-logo.png"
          alt="NBM logo"
        />
      </a>
      <a>
        <div className={styles.title}>NGUYỄN BÌNH MINH</div>
      </a>
    </div>
  );
}
