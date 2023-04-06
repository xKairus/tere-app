import { BtnLinkAndroid } from "./../buttons/BtnLinkAndroid/BtnLinkAndroid";
import { BtnLinkApple } from "./../buttons/BtnLinkApple/BtnLinkApple";

import map from "./../../assets/img/map.png";

import styles from "./lead.module.css";

const Lead = () => {
  return (
    <section className={styles.lead}>
      <div className={styles.lead__info}>
        <h1 className={styles.lead__title}>DOWNLOAD APP, SAVE MONEY, MAKE FRIENDS!</h1>
        <p className={styles.lead__desc}>Its simple and its free. Play your part in reducing Carbon Footprint and help Mother Nature to sustain its beauty. So what are you waiting for? Lets ride together</p>
        <div className={styles.lead__links}>
          <BtnLinkAndroid />
          <BtnLinkApple />
        </div>
      </div>
      <img
        className={styles.lead__img}
        src={map}
        alt="Map"
      />
    </section>
  );
};

export default Lead;
