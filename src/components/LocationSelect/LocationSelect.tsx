import * as React from 'react';
import { useState } from 'react';
import styles from './LocationSelect.module.scss';
import { current } from '../../store/current';
import { future } from '../../store/future';
import { observer } from 'mobx-react-lite';

export interface ILocationSelectProps {
  onCloseButtonCLick: () => void;
}

export const LocationSelect = observer(
  ({ onCloseButtonCLick }: ILocationSelectProps) => {
    const [inputValue, setInputValue] = useState('');

    function handleInputValueChange(e: React.FormEvent<HTMLInputElement>) {
      setInputValue((e.target as HTMLInputElement).value);
    }

    function handleLocationSubmit() {
      current.changeLocation(inputValue);
      current.getCurrentWeatherData(inputValue);
      future.getTenDayForecast(inputValue);
      onCloseButtonCLick();
    }

    return (
      <div className={styles.location} onClick={() => onCloseButtonCLick()}>
        <form
          className={styles.location__form}
          onClick={(e) => {
            e.stopPropagation();
          }}
          onSubmit={(e) => {
            e.preventDefault();
            handleLocationSubmit();
          }}
        >
          <span className={styles.location__popupTitle}>Select location</span>
          <input
            value={inputValue}
            onChange={handleInputValueChange}
            type="text"
            name="location"
            placeholder="Enter city name here..."
            className={styles.location__popupInput}
            autoComplete="on"
          />
          <button
            disabled={inputValue.length < 3}
            type="submit"
            className={styles.location__submitButton}
          >
            Change location!
          </button>
          <button
            className={styles.location__closeButton}
            onClick={onCloseButtonCLick}
          />
        </form>
      </div>
    );
  }
);
