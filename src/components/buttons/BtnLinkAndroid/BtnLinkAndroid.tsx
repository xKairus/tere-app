import styles from "./../button.module.css";
import logo from "./../../../assets/img/google-store.svg";

const BtnLinkAndroid = () => {
  return (
    <a
      target="_blank"
      href="https://play.google.com/store/games?hl=ru"
      className={`${styles.btn}`}>
      <img
        src={logo}
        alt="Google Store"
      />
      Download
    </a>
  );
};

const BtnLinkAndroidFooter = () => {
  return (
    <a
      target="_blank"
      href="https://www.apple.com/ru/shop/goto/store"
      className={`${styles.btn} ${styles.btn__footer}`}>
      <img
        src={logo}
        alt="Google Store"
      />
      Download
    </a>
  );
};

export { BtnLinkAndroid, BtnLinkAndroidFooter };
