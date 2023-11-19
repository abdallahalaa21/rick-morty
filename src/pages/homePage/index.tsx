import styles from './styles.module.css';
import rick from '@images/rickShip.png';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className={styles.container}>
      HomePage
      <Link to={'/characters'}>
        <img src={rick} alt='rick ship' className={styles.ship} />
      </Link>
    </div>
  );
};

export default HomePage;
