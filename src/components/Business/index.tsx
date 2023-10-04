import Image from "next/image";
import style from "./style.module.css";
import business from "../../../public/assets/business/business.png";

function Business() {
  return (
    <section className={style.containerSection}>
      <article className={style.article}>
        <div className={style.containerText}>
          <h3 className={style.subTitle}>Business</h3>
          <h2 className={style.title}>Build trust with your Business Page</h2>
          <p className={style.text}>
            Yelp Connect lets you post regular updates so you can help potential
            customers learn more about your business.
          </p>
          <button className={style.btn}>Manage my free listing</button>
        </div>
        <picture className={style.picture}>
          <Image className={style.img} src={business} alt=""></Image>
        </picture>
      </article>
    </section>
  );
}

export default Business;
