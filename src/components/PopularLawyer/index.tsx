import style from "./style.module.css";
import { cards } from "./cards";
import CardLawyer from "../CardLawyer";

function PopularLawyers() {
  return (
    <section className={style.sectionContainer}>
      <h2 className={style.title}>Popular Lawyer</h2>
      <p className={style.text}>
        Any solicitors or legal business can submit a listing to our website.
        Our site is free for UK solicitors or legal business.
      </p>
      <div className={style.containerGrid}>
        {cards.map((item) => {
          return <CardLawyer name={item.name} src={item.src}></CardLawyer>;
        })}
      </div>
    </section>
  );
}

export default PopularLawyers;
