import Header from "./components/Header";
import styles from "./DefaultLayout.module.scss";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
