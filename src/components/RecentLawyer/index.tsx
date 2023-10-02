import CardLawyer from "../CardLawyer";
import style from "./style.module.css";

import item1 from "../../../public/assets/lawyersRecent/item1.jpg";
import item2 from "../../../public/assets/lawyersRecent/item2.jpg";
import item3 from "../../../public/assets/lawyersRecent/item3.jpg";

const data = [
  {
    name: "Shuvo Roy",
    src: item1,
  },
  {
    name: "Jamil Ahmed",
    src: item2,
  },
  {
    name: "Jesika Deo",
    src: item3,
  },
];

function RecentLawyer() {
  return (
    <section className={style.section}>
      <h2 className={style.title}>Recent Lawyer Listing</h2>
      <p className={style.subTitle}>
        Any solicitors or legal business can submit a listing to our website.
        Our site is free for UK solicitors or legal business.
      </p>
      <div className={style.containerGrid}>
        {data.map((item) => {
          return <CardLawyer src={item.src} name={item.name}></CardLawyer>;
        })}
      </div>
    </section>
  );
}

export default RecentLawyer;
