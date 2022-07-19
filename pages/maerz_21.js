import Nav from "../components/Nav/Nav";
import img from "../data/closing_time_märz_21.json";
import Gallery from "react-grid-gallery";

import styles from "../styles/images.module.scss";

const März_21 = () => {
  return (
    <main>
      <Nav />
      <div className={styles.skizzen}>
        <Gallery images={img} />
      </div>
    </main>
  );
};

export default März_21;
