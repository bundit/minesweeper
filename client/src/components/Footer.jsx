import React from 'react';
import styles from '../css-modules/Footer.module.css';

function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footer}>
        <p> @author: Bundit Hongmanee <br/>
          <a href="https://bundit.io" target="_blank" rel="noopener noreferrer">@link: https://bundit.io</a><br/>
          <a href="https://github.com/bundit/minesweeper" target="_blank" rel="noopener noreferrer">@repo: https://github.com/bundit</a>
        </p>
      </div>
    </div>
  )
}

export default Footer;
