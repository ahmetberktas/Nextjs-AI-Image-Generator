"use client";
import styles from "./styles.module.css";
import { useHomePage } from "../useHomepage";
import Tag from "@/components/tag";
import Link from "next/link";
import Image from "next/image";
import Loading from "@/components/loading";

function ResultImage() {
  const { isSubmitting, error, imageUrl, text } = useHomePage();

  if (error) return <p className={styles.error}>{error.message}</p>;
  if (!isSubmitting && !imageUrl) return null;
  return (
    <div className={styles.resultImage}>
      <div className={styles.animation}>
        {isSubmitting ? (
          <Loading></Loading>
        ) : (
          <>
            <div className={styles.content}>
              <p>{text}</p>
              <Tag
                title={
                  <Link href={imageUrl} target="_blank" download={true}>
                    Download
                  </Link>
                }
              />
            </div>
            <Image src={imageUrl} alt={text} width={512} height={512}></Image>
          </>
        )}
      </div>
    </div>
  );
}

export default ResultImage;
