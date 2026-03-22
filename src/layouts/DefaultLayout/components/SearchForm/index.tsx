import styles from "./SearchForm.module.scss";

export default function SearchForm() {

  return (
    <div className={styles.body}>
      <div className={styles.searchWrapper}>
        <div className={styles.searchInput}>
          <div className={styles.searchIcon}></div>
          <input
            className={styles.input}
            name="search"
            placeholder="Tìm kiếm khoá học, bài viết, video, ..."
          />
        </div>
      </div>
    </div>
  );
}
