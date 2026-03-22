import styles from "./Result.module.scss";

export default function Results({ data }) {
  return (
    <>
      <div className={styles.typeResult}>
        <h5>KHOÁ HỌC</h5>
        <a className={styles.more} href="#">
          xem thêm
        </a>
      </div>
      {data.map((item, index) => (
        <a
          key={index}
          href="#"
          className={styles.item}
          style={{
            "--font-size": "3.2px",
            "--border-scale": 1,
          }}
        >
          <div className={styles.itemImg}>
            <img src={item.img} alt={item.name} />
          </div>
          <span>{item.name}</span>
        </a>
      ))}
    </>
  );
}
