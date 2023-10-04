import Hero from "@/components/Hero";
import styles from "./page.module.css";
import PopularLawyers from "@/components/PopularLawyer";
import CategoryType from "@/components/CategoryType";
import RecentLawyer from "@/components/RecentLawyer";
import FindYourCity from "@/components/FindYourCity";
import Business from "@/components/Business";
import YourSite from "@/components/YourSite";
import Touch from "@/components/Touch";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero></Hero>
      <PopularLawyers></PopularLawyers>
      <CategoryType></CategoryType>
      <RecentLawyer></RecentLawyer>
      <FindYourCity></FindYourCity>
      <Business></Business>
      <YourSite></YourSite>
      <Touch></Touch>
      <Footer></Footer>
    </main>
  );
}
