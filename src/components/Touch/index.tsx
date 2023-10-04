import style from "./style.module.css";

function Touch() {
  return (
    <section className={style.sectionTouch}>
      <h2 className={style.title}>Stay Always In Touch</h2>
      <p className={style.text}>
        Sign up for our mailing list to get latest updates and offers.
      </p>
      <div className={style.containerInput}>
        <input
          className={style.input}
          type="text"
          placeholder="Email Address.."
        />
        <button className={style.btn}>Subscribe</button>
      </div>
    </section>
  );
}

export default Touch;
