import React from 'react';
import styles from './styles.module.css';
import rick from '@images/rickShip.png';

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className={styles.container}>
      HomePage
      <img src={rick} alt='' className={styles.ship} />
    </div>
  );
};

export default HomePage;
