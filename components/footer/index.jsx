"use client";

import Link from "next/link";
import styles from "./styles.module.css";

import Github from "../../assets/icons/github.svg";
import Linkedin from "../../assets/icons/linkedin.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="https://github.com/ahmetberktas" target="_blank">
        <Github style={{ width: "24px", height: "24px" }} />{" "}
      </Link>
      <Link href="https://www.linkedin.com/in/ahmetberktas/" target="_blank">
        <Linkedin style={{ width: "24px", height: "24px" }} />{" "}
      </Link>
      <p>
        Made by <b>Ahmet Berktaş</b> <br />
        and, built with <b>Next.js</b>
      </p>
    </footer>
  );
}

export default Footer;
