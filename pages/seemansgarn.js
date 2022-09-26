import Nav from '../components/Nav/Nav';
import img from '../data/seemansgarn.json';
import Gallery from 'react-grid-gallery';
import styles from '../styles/foto.module.scss';

const Seemansgarn = () => {
  return (
    <main>
      <Nav />
      <div className={styles.Fotografien}>
        <Gallery images={img} />
      </div>
    </main>
  );
};

export default Seemansgarn;
