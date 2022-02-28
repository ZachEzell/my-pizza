import React from "react";
import Head from "next/head";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Pizza Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>made by cocoa.</footer>
    </div>
  );
}

export default Layout;
