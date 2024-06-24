import Image from "next/image";
import styles from "./page.module.scss";
import { Header } from "@/components/Header";
import { Container } from "@/components/Container";

export default function Home() {
  return (
    <main className={styles.main}>
      <Container>
        <Header />
      </Container>
    </main>
  );
}
