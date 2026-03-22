import { contactData } from "../../data";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.mainContent}>
          <img src="assets/images/avt.jpg" alt="Avatar" />
          <h1>Nguyễn Bình Minh</h1>
          <p>Java Developer | IT Engineer</p>
        </div>

        <div className={styles.hoverContent}>
          <p>Email: {contactData.email}</p>
          <p>Phone: {contactData.phone}</p>
          <p>LinkedIn: <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer">{contactData.linkedin}</a></p>
        </div>
      </div>
    </header>
  );
}