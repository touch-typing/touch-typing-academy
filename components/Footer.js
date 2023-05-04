import React from "react";
import styles from "../src/styles/Footer.module.css";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.parent}>
          <div className={styles.column_01}>
            <div className={styles.logo}>LOGO</div>
            <p>
              Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
              nam no suscipit quaerendum. At nam minimum ponderum. Est audiam
              animal molestiae te. Ex duo eripuit mentitum.
            </p>
          </div>
          {/* //Midlle collum */}
          <div className={styles.column_02}>
            <div className={styles.title_footer}>LINKS</div>
            <Link className={styles.link_a} href="/about">
              Link 01
            </Link>
            <Link className={styles.link_a} href="/course">
              Link 02
            </Link>
            <Link className={styles.link_a} href="/course">
              Link 03
            </Link>
            <Link className={styles.link_a} href="/course">
              Link 04
            </Link>
          </div>

          {/* Last collum */}
          <div className={styles.column_03}>
            <div className={styles.title_footer}>CONTACT US</div>
            <span>lindaemail@company.com</span>
          </div>
        </div>

        <div className={styles.bottom_footer}>
          <p>© BrandName. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
