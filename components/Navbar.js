import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../src/styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>LOGO</div>
      <Link className={styles.link_a} href="/">
        Home
      </Link>
      <Link className={styles.link_a} href="/about">
        About
      </Link>
      <Link className={styles.link_a} href="/course">
        Course
      </Link>
      <Link className={styles.link_a} href="/reviews">
        Reviews
      </Link>
      <Link className={styles.link_a} href="/contact">
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
