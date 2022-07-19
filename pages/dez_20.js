import Nav from "../components/Nav/Nav";
import img from "../data/closing_time_Dezember_20.json";
import Gallery from "react-grid-gallery";

import styles from "../styles/images.module.scss";

const Dezmber_20 = () => {
  return (
    <main>
      <Nav />
      <div className={styles.skizzen}>
        <Gallery images={img} />
      </div>
    </main>
  );
};

export default Dezmber_20;
