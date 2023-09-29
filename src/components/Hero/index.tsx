import style from "./style.module.css";

function Hero() {
  return (
    <header className={style.containerHeader}>
      <div className={style.filterHeader}>
        <h1 className={style.title}>My City Lawyers Directory</h1>
        <button className={style.btnScroll}>Scroll</button>
      </div>
    </header>
  );
}

export default Hero;
