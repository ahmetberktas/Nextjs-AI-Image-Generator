"use client";
import styles from "./styles.module.css";

import { SUGGESTIONS } from "./constants";

import Tag from "@/components/tag";

import { useHomePage } from "../useHomepage";

function Suggestions() {
  const { changeText } = useHomePage();
  return (
    <div className={styles.promptSuggestions}>
      <h3 className={styles.title}>
        Nothing in mind? Try one of these prompts:
      </h3>
      <div className={styles.suggestions}>
        {SUGGESTIONS.map((suggestion) => (
          <Tag
            onClick={changeText}
            title={suggestion.title}
            key={suggestion.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Suggestions;
