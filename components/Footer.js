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
            <h4 className={styles.title_footer}>LINKS</h4>
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
            <h4 className={styles.title_footer}>CONTACT US</h4>
            <div className={styles.email_footer}>
              <span className="material-symbols-outlined">mail</span>
              <a
                href="mailto: lindaemail@company.com"
                className={styles.p_email}
              >
                lindaemail@company.com
              </a>
            </div>
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
