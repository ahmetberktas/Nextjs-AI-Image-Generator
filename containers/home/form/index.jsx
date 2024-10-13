"use client";
import { useState } from "react";
import styles from "./styles.module.css";

function Form() {
  const [text, setText] = useState("");
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = () => {};
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
