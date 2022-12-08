import * as React from 'react';
import { useState } from 'react';
import styles from './LocationSelect.module.scss';
import { current } from '../../store/current';
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

    // function handleCloseButtonClick(params:type) {

    // }

    function handleLocationSubmit() {
      current.changeLocation(inputValue);
      current.getCurrentWeatherData(inputValue);
      onCloseButtonCLick();
    }

    return (
      <div className={styles.location}>
        <div className={styles.location__popup}>
          <button
            className={styles.location__closeButton}
            onClick={onCloseButtonCLick}
          ></button>
          <span className={styles.location__popupTitle}>Select location</span>
          <input
            value={inputValue}
            onChange={handleInputValueChange}
            type="text"
            placeholder="Enter city name here..."
            className={styles.location__popupInput}
          />
          <button
            disabled={inputValue.length < 3}
            type="submit"
            onClick={handleLocationSubmit}
            className={styles.location__submitButton}
          >
            Change location!
          </button>
        </div>
      </div>
    );
  }
);
