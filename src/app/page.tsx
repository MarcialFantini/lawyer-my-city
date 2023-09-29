import Hero from "@/components/Hero";
import styles from "./page.module.css";
import PopularLawyers from "@/components/PopularLawyer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero></Hero>
      <PopularLawyers></PopularLawyers>
    </main>
  );
}
