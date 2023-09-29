import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import style from "./style.module.css";

interface props {
  src: string | StaticImageData;
  name: string;
}

function CardLawyer({ src, name }: props) {
  return (
    <article className={style.containerArticle}>
      <picture className={style.containerImg}>
        <Image
          src={src}
          alt="professional lawyer"
          className={style.img}
        ></Image>
      </picture>
      <div className={style.containerText}>
        <h3 className={style.titleArticle}>{name}</h3>
        <p className={style.subTitle}>Family Law</p>
        <p className={style.textArticle}>
          A lawyer is a professional who is qualified to offer advice about the
          law..
        </p>
        <Link className={style.buttonArticle} href={"/"}>
          Learn More
        </Link>
      </div>
    </article>
  );
}

export default CardLawyer;
