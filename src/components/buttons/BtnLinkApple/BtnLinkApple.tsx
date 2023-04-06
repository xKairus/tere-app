import styles from "./../button.module.css";
import logo from "./../../../assets/img/app-store.svg";

const BtnLinkApple = () => {
  return (
    <a
      target="_blank"
      href="https://www.apple.com/ru/shop/goto/store"
      className={`${styles.btn}`}>
      <img
        src={logo}
        alt="Google Store"
      />
      Download
    </a>
  );
};

const BtnLinkAppleFooter = () => {
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

export { BtnLinkApple, BtnLinkAppleFooter };
