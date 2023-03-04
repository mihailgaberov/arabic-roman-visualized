import styles from './AnimatedDisplay.module.scss';

export function AnimatedDisplay({romanNumberGetter}) {


  return <h1 className={styles.container}>{romanNumberGetter()}</h1>
}