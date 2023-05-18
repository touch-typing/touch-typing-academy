import React from "react";
import Link from "next/link";
import styles from "../src/styles/Navbar.module.css";


function Navbar() {
  return (
    <nav className={styles.nav} >
      <div className={styles.logo} >LOGO</div>
      <Link className={styles.link_nav} href="/">Home</Link>
      <Link className={styles.link_nav}  href="/about">About</Link>
      <Link className={styles.link_nav}  href="/course">Course</Link>
      <Link className={styles.link_nav}  href="/reviews">Reviews</Link>
      <Link className={styles.link_nav}  href="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
