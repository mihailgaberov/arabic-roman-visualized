import styles from './AnimatedDisplay.module.scss';
import { Motion, Presence } from "@motionone/solid";
import { Rerun } from "@solid-primitives/keyed";

export function AnimatedDisplay({ romanNumberGetter }) {
  return (
      <div className={styles.container}>
        <h1 className={styles.romanNumerals}>
          <Presence exitBeforeEnter>
            <Rerun on={romanNumberGetter()}>
              <Motion
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: 0.05 } }}
                  transition={{ duration: 0.1 }}
                  exit={{ opacity: 0, x: -50 }}
              >
                {romanNumberGetter()}
              </Motion>
            </Rerun>
          </Presence>
        </h1>
      </div>
  );
}