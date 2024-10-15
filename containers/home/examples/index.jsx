"use client";
import styles from "./styles.module.css";

import { EXAMPLES } from "./constants";

import Tag from "@/components/tag";

import Image from "next/image";

import { useHomePage } from "../useHomepage";

function Examples() {
  const { changeText } = useHomePage();
  return (
    <div className={styles.examples}>
      {EXAMPLES.map((example) => (
        <div key={example.id} className={styles.example}>
          <h4>{example.prompt}</h4>
          <Tag title="Copy" onClick={() => changeText(example.prompt)} />
          <Image src={example.image} alt={example.prompt} fill></Image>
        </div>
      ))}
    </div>
  );
}

export default Examples;
