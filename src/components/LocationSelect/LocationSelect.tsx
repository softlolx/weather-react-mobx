import * as React from 'react';
import styles from './LocationSelect.module.scss';

export interface ILocationSelectProps {
  onCloseButtonCLick: () => void;
}

export function LocationSelect({ onCloseButtonCLick }: ILocationSelectProps) {
  return (
    <div className={styles.location}>
      <div className={styles.location__popup}>
        <button
          className={styles.location__closeButton}
          onClick={onCloseButtonCLick}
        ></button>
        <span className={styles.location__popupTitle}>Select location</span>
        <input type="text" className={styles.location__popupInput} />
      </div>
    </div>
  );
}