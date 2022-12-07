import styles from './Details.module.scss';
import * as React from 'react';
import sunnyImg from '../../images/sunny.svg';

export interface IDetailsProps {}

export function Details(props: IDetailsProps) {
  return (
    <div className={styles.details}>
      <div className={styles.details__infoContainer}>
        <img src={sunnyImg} alt="." className={styles.details__icon} />
        <span className={styles.details__title}>Температура&#8451;</span>
        <span className={styles.details__info}>
          20° - ощущается как 17°&#8451;
        </span>
      </div>
      <div className={styles.details__infoContainer}>
        <img src={sunnyImg} alt="." className={styles.details__icon} />
        <span className={styles.details__title}>Температура&#8451;</span>
        <span className={styles.details__info}>
          20° - ощущается как 17°&#8451;
        </span>
      </div>
      <div className={styles.details__infoContainer}>
        <img src={sunnyImg} alt="." className={styles.details__icon} />
        <span className={styles.details__title}>Температура&#8451;</span>
        <span className={styles.details__info}>
          20° - ощущается как 17°&#8451;
        </span>
      </div>
      <div className={styles.details__infoContainer}>
        <img src={sunnyImg} alt="." className={styles.details__icon} />
        <span className={styles.details__title}>Температура&#8451;</span>
        <span className={styles.details__info}>
          20° - ощущается как 17°&#8451;
        </span>
      </div>
    </div>
  );
}
