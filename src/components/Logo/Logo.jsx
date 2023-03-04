import styles from './Logo.module.scss';
import gameLogo from '../../../assets/logo.png';

export function Logo() {
  return (
      <div className={styles.logo}>
          <img src={gameLogo} alt="logo" />
      </div>
  );
}