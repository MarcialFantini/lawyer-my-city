import style from "./style.module.css";

function CardCategory({ title }: { title: string }) {
  return (
    <article className={style.cardCategory}>
      <div className={style.circle}></div>
      <h3 className={style.title}>{title}</h3>
    </article>
  );
}

export default CardCategory;
