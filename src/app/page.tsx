import styles from "./page.module.scss";
import { Header } from "@/components/Header";
import { Container } from "@/components/Container";
import hero from "../../public/images/banner.png"
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div>
        </div>
        <div>
          <h1>TASK<span>
            MANAGER</span></h1>
        </div>
        <div className={styles.containerHero}>
          <Image className={styles.hero}
            fill
            quality={100}
            priority={true}
            src={hero}
            alt={"imagem central"}
          />
        </div>
      </main>
    </>

  );
}
