import Nav from "../components/Nav/Nav";
import Link from "next/link";
import styles from "../styles/portfolio.module.scss";

import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { style } from "@mui/system";

const portfolio = () => {
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
              src="https://res.cloudinary.com/romulo/image/upload/v1655843252/Fotografie/Solidao-rapaz_ddv38w.jpg"
              alt="Image One"
            />
            <Carousel.Caption>
              <Link href="/forografie">
                <h2>
                  <a>Fotografie</a>
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
              <Link href="/installation">
                <h2>
                  <a>installation</a>
                </h2>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/romulo/image/upload/v1655843746/Skizzenbuch/20190503_184754_evio44.jpg"
              alt="Image Tree"
            />
            <Carousel.Caption>
              <Link href="/skizzen">
                <h2>
                  <a>Skizzen</a>
                </h2>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/romulo/image/upload/v1656185854/closing%20Times/April_2021/25.4_oap68w.jpg"
              alt="Image Tree"
            />
            <Carousel.Caption>
              <Link href="/tagebuch">
                <h2>
                  <a>Tagebuch</a>
                </h2>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </main>
  );
};

export default portfolio;
