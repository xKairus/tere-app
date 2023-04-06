import BtnHelp from "../buttons/BtnHelp/BtnHelp";

import logo from "./../../assets/img/LogoHeader.svg";

import styles from "./header.module.css";

const Header = () => {
  return (
    <section className={styles.header}>
      <img
        className={styles.logo}
        src={logo}
        alt="Logo"
      />
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>Home</li>
          <li className={styles.nav__item}>How tere works</li>
          <li className={styles.nav__item}>Tere benefits</li>
        </ul>
        <BtnHelp />
      </nav>
    </section>
  );
};

export default Header;
