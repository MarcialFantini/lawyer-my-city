import Image, { StaticImageData } from "next/image";
import style from "./style.module.css";

function CardFindCity({
  src,
  title,
}: {
  src: string | StaticImageData;
  title: string;
}) {
  return (
    <article className={style.article}>
      <picture className={style.picture}>
        <Image className={style.img} src={src} alt={title}></Image>
      </picture>
      <div className={style.text}>
        <h3>{title}</h3>
      </div>
    </article>
  );
}

export default CardFindCity;
