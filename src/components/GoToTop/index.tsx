import styles from './GoToTop.module.scss';

export default function GoToTop() {
  return (
    <button className={styles.goToTop} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      ↑
    </button>
  );
}
