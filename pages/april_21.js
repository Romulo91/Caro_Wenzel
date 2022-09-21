import Nav from '../components/Nav/Nav';
import img from '../data/closing_time_April_21.json';
import Gallery from 'react-grid-gallery';

import styles from '../styles/images.module.scss';

const April_21 = () => {
  return (
    <main>
      <Nav />
      <div className={styles.skizzen}>
        <Gallery images={img} />
      </div>
    </main>
  );
};

export default April_21;
