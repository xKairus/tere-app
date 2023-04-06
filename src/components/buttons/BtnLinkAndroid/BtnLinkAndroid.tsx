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

export default BtnLinkAndroid;
