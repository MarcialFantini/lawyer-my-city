import CardFindCity from "../CardFindCity";
import { data } from "./data";
import style from "./style.module.css";

function FindYourCity() {
  return (
    <section className={style.sectionFind}>
      <h2 className={style.title}>Find Your City</h2>
      <p className={style.text}>
        Any solicitors or legal business can submit a listing to our website.
        Our site is free for UK solicitors or legal business.
      </p>
      <div className={style.containerGrid}>
        {data.map((item) => {
          return (
            <CardFindCity src={item.src} title={item.title}></CardFindCity>
          );
        })}
      </div>
    </section>
  );
}

export default FindYourCity;
