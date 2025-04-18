import { Header } from "@ui/organisms/header";
import styles from "./styles.module.scss";
import { Footer } from "@ui/organisms/footer";
import Prince from "@assets/images/prince.svg";
import { useEffect } from "react";

export const Corp = () => {
  useEffect(() => {
    document.title = "株式会社慧陽社";
  }, []);
  return (
    <div className={styles.corp}>
      <Header />
      <div className={styles.preparation_container}>
        <div className={styles.logo}>
          <Prince />
        </div>
        <p className={styles.preparation_text}>Preparing...</p>
      </div>
      <Footer />
    </div>
  );
};
