import Nav from '../components/Nav/Nav';
import img from '../data/skizzen.json';
import Gallery from 'react-grid-gallery';

// import styles from '../styles/images.module.scss';
import styles from '../styles/skizzen.module.scss';

const Installation = () => {
  return (
    <main>
      <Nav />
      <div className={styles.skizzen}>
        <Gallery className={img.capion} images={img} />
      </div>
    </main>
  );
};

export default Installation;
