"use client";
import styles from "./styles.module.css";
import { useHomePage } from "../useHomepage";

function Form() {
  const { text, setText, generateImage } = useHomePage();

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateImage();
  };

  return (
    <div className={styles.promptForm}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea
          className={styles.promptTextarea}
          rows={2}
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="A fiery orchestra of characters in a marble chapel, surrounded by ghostly figures"
          required
        />
        <button className={styles.generateButton} type="submit">
          Generate
        </button>
      </form>
    </div>
  );
}

export default Form;
