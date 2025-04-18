import { Header } from "@ui/organisms/header";
import styles from "./styles.module.scss";
import { Footer } from "@ui/organisms/footer";
import Prince from "@assets/images/prince.svg";

export const Corp = () => {
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
