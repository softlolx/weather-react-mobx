import styles from './Header.module.scss';

import * as React from 'react';

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.header__logoContainer}>
        <div className={styles.header__logo}></div>
        <h1 className={styles.header__title}>meteo</h1>
      </div>
      <button className={styles.header__locationButton}>Select location</button>
    </div>
  );
}
