import Nav from "../components/Nav/Nav";
import Link from "next/link";
import styles from "../styles/portfolio.module.scss";

import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { style } from "@mui/system";

const Tagebuch = () => {
  return (
    <main>
      <nav>
        <Nav />
      </nav>
      <div className={styles.portfolio}>
        <Carousel>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/romulo/image/upload/v1656185916/closing%20Times/Dezember_2020/29.12_ffwus5.jpg"
              alt="Image One"
            />
            <Carousel.Caption>
              <Link href="/dez_20">
                <h2>
                  <a>Dezember 2020</a>
                </h2>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/romulo/image/upload/v1656186244/closing%20Times/Januar_2021/21-31.1._nyiip4.jpg"
              alt="Image Two"
            />
            <Carousel.Caption>
              <Link href="/jan_21">
                <h2>
                  <a>Januar 2021</a>
                </h2>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/romulo/image/upload/v1656186013/closing%20Times/Februar_2021/24.2_tyidlb.jpg"
              alt="Image Tree"
            />
            <Carousel.Caption>
              <Link href="/febr_21">
                <h2>
                  <a>Februar 2021</a>
                </h2>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/romulo/image/upload/v1656186126/closing%20Times/M%C3%A4rz_2021/14.3_q6bnun.jpg"
              alt="Image Foure"
            />
            <Carousel.Caption>
              <Link href="/maerz_21">
                <h2>
                  <a>März 2021</a>
                </h2>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/romulo/image/upload/v1656185857/closing%20Times/April_2021/12.4_xz4c4e.jpg"
              alt="Image Five"
            />
            <Carousel.Caption>
              <Link href="/april_21">
                <h2>
                  <a>April 2021</a>
                </h2>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </main>
  );
};

export default Tagebuch;
