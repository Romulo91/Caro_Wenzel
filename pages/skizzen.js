import Nav from "../components/Nav/Nav";
import img from "../data/skizzen.json";
import Gallery from "react-grid-gallery";

import styles from "../styles/images.module.scss";

const Installation = () => {
  return (
    <main>
      <Nav />
      <div className={styles.skizzen}>
        <Gallery images={img} />
      </div>
    </main>
  );
};

export default Installation;
