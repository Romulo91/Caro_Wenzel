import Nav from '../components/Nav/Nav';
import Link from 'next/link';
import styles from '../styles/portfolio.module.scss';

import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { style } from '@mui/system';

const Installation = () => {
  return (
    <main>
      <nav className={styles.nav}>
        <Nav />
      </nav>
      <div className={styles.portfolio}>
        <Carousel>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/romulo/image/upload/v1655843544/Installationen/octo_vbb3dh.jpg"
              alt="octo"
            />
            <Carousel.Caption>
              <Link href="/seemansgarn">
                <h2>
                  <a>Seemansgarn, Galerie PATCH, Proto 2016</a>
                </h2>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/romulo/image/upload/v1655843561/Installationen/seemannsgarn_koge8c.jpg"
              alt="Image Two"
            />
            <Carousel.Caption>
              <Link href="/saudade">
                <h2>
                  <a>Gruta de Saudade, das Klohäuschen, München, 2017</a>
                </h2>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/romulo/image/upload/v1655843463/Installationen/Ohne_Titel_2009_o9rike.jpg"
              alt="Image Tree"
            />
            <Carousel.Caption>
              <Link href="/globen">
                <h2>
                  <a>Globen, Kunstarkaden, München, 2010</a>
                </h2>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/romulo/image/upload/v1655843458/Installationen/raumansicht_kafm5w.jpg"
              alt="Image Tree"
            />
            <Carousel.Caption>
              <Link href="/clandestina">
                <h2>
                  <a>Calçada clandestina, die Färberei, München 2018</a>
                </h2>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/romulo/image/upload/v1655843315/Installationen/Allerheiligenstu%CC%88berl_2019_oyaayv.jpg"
              alt="Image Tree"
            />
            <Carousel.Caption>
              <Link href="/installation">
                <h2>
                  <a>Allerheiligenstüberl, Corleone, München, 2019</a>
                </h2>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </main>
  );
};

export default Installation;
