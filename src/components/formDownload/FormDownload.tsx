import BtnForm from "../buttons/BtnForm/BtnForm";

import styles from "./formDownload.module.css";

const FormDownload = () => {
  return (
    <form className={styles.form}>
      <fieldset className={styles.form__field}>
        <label className={styles.form__label}>
          Let’s go. Get a link to download the app.
          <input
            type="text"
            className={styles.form__input}
          />
        </label>
        <BtnForm />
      </fieldset>
    </form>
  );
};

export default FormDownload;
