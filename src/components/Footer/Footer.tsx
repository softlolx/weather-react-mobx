import styles from './Footer.module.scss';

import * as React from 'react';

export interface IFooterProps {}

export function Footer(props: IFooterProps) {
  return (
    <div className={styles.footer}>
      <h4 className={styles.footer__title}>2023</h4>
      <span className={styles.footer__subtitle}>Softlolx</span>
    </div>
  );
}
