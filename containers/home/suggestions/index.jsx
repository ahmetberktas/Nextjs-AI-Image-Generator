import styles from "./styles.module.css";

import { SUGGESTIONS } from "./constants";

import Tag from "@/components/tag";

function Suggestions() {
  return (
    <div className={styles.promptSuggestions}>
      <h3 className={styles.title}>
        Nothing in mind? Try one of these prompts:
      </h3>
      <div className={styles.suggestions}>
        {SUGGESTIONS.map((suggestion) => (
          <Tag title={suggestion.title} key={suggestion.id} />
        ))}
      </div>
    </div>
  );
}

export default Suggestions;
