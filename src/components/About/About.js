import React from "react";
import Head from "next/head";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className={styles.description}>This is the about page.</p>
    </div>
  );
}

export default About;
