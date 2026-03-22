import { contactData } from "../../data";
import styles from "./ContactTab.module.scss";

export default function ContactTab() {
  return (
    <div className={styles.content}>
      <h2>Contact</h2>
      <p>Email: {contactData.email}</p>
      <p>Phone: {contactData.phone}</p>
      <p>LinkedIn: <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer">{contactData.linkedin}</a></p>
    </div>
  );
}