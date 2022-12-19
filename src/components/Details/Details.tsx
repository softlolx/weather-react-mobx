import styles from './Details.module.scss';
import * as React from 'react';
import tempImg from '../../images/temp.svg';
import humidityImg from '../../images/humidity.svg';
import windImg from '../../images/wind.svg';
import precipitationImg from '../../images/precipitation.svg';

import { observer } from 'mobx-react-lite';
import { current } from '../../store/current';

export interface IDetailsProps {}

export const Details = observer((props: IDetailsProps) => {
  return (
    <div className={styles.details}>
      <div className={styles.details__infoContainer}>
        <img src={tempImg} alt="." className={styles.details__icon} />
        <span className={styles.details__title}>Temp</span>
        <span className={styles.details__info}>
          {`${+current.currentTemp > 0 ? '+' : ''}${current.currentTemp}`}
          &#8451; feels like{' '}
          {`${+current.feelslikeTemp > 0 ? '+' : ''}${current.feelslikeTemp}`}
          &#8451;
        </span>
      </div>
      <div className={styles.details__infoContainer}>
        <img src={humidityImg} alt="." className={styles.details__icon} />
        <span className={styles.details__title}>Humidity</span>
        <span className={styles.details__info}>{current.humidity}%</span>
      </div>
      <div className={styles.details__infoContainer}>
        <img src={windImg} alt="." className={styles.details__icon} />
        <span className={styles.details__title}>Wind</span>
        <span className={styles.details__info}>
          {current.windSpeed}km/h {current.windDir}
        </span>
      </div>
      <div className={styles.details__infoContainer}>
        <img src={precipitationImg} alt="." className={styles.details__icon} />
        <span className={styles.details__title}>Precipitation</span>
        <span className={styles.details__info}>{current.precipCondition}</span>
      </div>
    </div>
  );
});
