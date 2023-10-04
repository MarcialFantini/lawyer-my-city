import style from "./style.module.css";

function CardCategory({ title, last }: { title: string; last?: boolean }) {
  return (
    <article className={style.cardCategory + " " + (last ? style.last : "")}>
      <div className={style.circle}></div>
      <h3 className={style.title}>{title}</h3>
    </article>
  );
}

export default CardCategory;
