import Hero from "@/components/Hero";
import styles from "./page.module.css";
import PopularLawyers from "@/components/PopularLawyer";
import CategoryType from "@/components/CategoryType";
import RecentLawyer from "@/components/RecentLawyer";
import FindYourCity from "@/components/FindYourCity";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero></Hero>
      <PopularLawyers></PopularLawyers>
      <CategoryType></CategoryType>
      <RecentLawyer></RecentLawyer>
      <FindYourCity></FindYourCity>
    </main>
  );
}
