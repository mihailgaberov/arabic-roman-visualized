import {convertArabicToRoman} from "../lib/converter";
import styles from './App.module.scss';
import {createSignal} from "solid-js";
import { AnimatedDisplay } from "./components/AnimatedDisplay";
import { Header } from "./components/Header";

function App() {
    const [romanNumber, setRomanNumber] = createSignal('');
    let inputRef = null;

    const convert = (event) => {
        const num = event.currentTarget.value;
        if (!isNaN(num)) {
            return setRomanNumber(convertArabicToRoman(num));
        } else {
            alert('You must enter a valid number.');
            inputRef.value = '';
            setRomanNumber('');
        }
    }

    return (
        <>
            <Header />
            <div className={styles.container}>
                <h2 className={styles.title}>Convert Arabic to Roman Numerals</h2>
                <div className={styles.controls}>
                    <input placeholder='Enter arabic number here' name='arabic' ref={inputRef}
                           onInput={convert}/>
                    <AnimatedDisplay romanNumberGetter={romanNumber} />
                </div>
            </div>
        </>
    );
}

export default App;
