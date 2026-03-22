import AppLogo from "../AppLogo";
import SearchForm from "../SearchForm";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <AppLogo />
      <SearchForm />
    </header>
  );
}
