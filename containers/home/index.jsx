import styles from "./styles.module.css";

import Form from "./form";

function HomePageContainer() {
  return (
    <div className={styles.homePageContainer}>
      <h1 className={styles.title}>
        Just Imagine, <br /> We Take Care of the Rest
      </h1>
      <p className={styles.description}>
        Tell us a prompt and we&apos;ll generate a story for you.
      </p>
      <Form />
    </div>
  );
}

export default HomePageContainer;
