import Nav from '../components/Nav/Nav';
import img from '../data/tagebuch.json';
import Gallery from 'react-grid-gallery';

import styles from '../styles/foto.module.scss';

const Tagebuch = () => {
  return (
    <main>
      <Nav />
      <div className={styles.Fotografien}>
        <Gallery className={img.capion} images={img} />
      </div>
    </main>
  );
};

export default Tagebuch;
