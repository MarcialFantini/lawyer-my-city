import React from "react";
import style from "./style.module.css";
import CardCategory from "../CardCategory";

const categoryType: string[] = [
  "Estate Planning Lawyer",
  "Bankruptcy Lawyer",
  "Employment Lawyer",
  "Corporate Lawyer",
  "Immigration Lawyer",
  "Criminal Lawyer",
  "Tax Lawyer",
  "Family Lawyer",
  "Contract Lawyer",
];

function CategoryType() {
  return (
    <section className={style.containerSection}>
      <h2 className={style.title}>Category Type</h2>
      <p className={style.subTitle}>
        Any solicitors or legal business can submit a listing to our website.
        Our site is free for UK solicitors or legal business.
      </p>

      <div className={style.containerGrid}>
        {categoryType.map((item, index) => {
          return (
            <CardCategory
              last={index === categoryType.length - 1}
              title={item}
            ></CardCategory>
          );
        })}
      </div>
    </section>
  );
}

export default CategoryType;
