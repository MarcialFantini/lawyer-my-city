import Image from "next/image";
import imgSite from "../../../public/assets/site/site.jpg";
import style from "./style.module.css";

function YourSite() {
  return (
    <section className={style.section}>
      <article className={style.article}>
        <div className={style.containerText}>
          <h2 className={style.title}>List Your Site</h2>
          <p className={style.text}>
            ras justo odio, dapibus ac facilisis in, egestas eget quam. Integer
            posuere erat a ante venenatis dapibus posuere velit aliquet.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Cum sociis natoque penatibus et magnis dis parturient montes.
          </p>
          <button className={style.btn}>Learn More</button>
        </div>
        <picture className={style.containerPicture}>
          <Image src={imgSite} className={style.img} alt="site image"></Image>
        </picture>
      </article>
    </section>
  );
}

export default YourSite;
