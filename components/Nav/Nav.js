import styles from "./Nav.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";

const Nav = () => {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <Link className={styles.nav_headline} href="/">
        Caro Wenzel
      </Link>
      <ul>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/about">About</Link>
        <a
          className={styles.insta}
          href="https://instagram.com/c_______wenz_el?igshid=YmMyMTA2M2Y="
          target="_blank"
        >
          <InstagramIcon />
        </a>
      </ul>
    </nav>
  );
};

export default Nav;
