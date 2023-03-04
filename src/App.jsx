import {convertArabicToRoman} from "../lib/converter";
import styles from './App.module.scss';
import {createSignal} from "solid-js";
import { AnimatedDisplay } from "./components/AnimatedDisplay";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const NUMBER_OF_DIGITS = 4;
function App() {
    const [romanNumber, setRomanNumber] = createSignal('');
    let inputRef = null;

    const convert = (event) => {
        const num = event.currentTarget.value;
        if (!isNaN(num) && num.length <= NUMBER_OF_DIGITS && num <= 4999) {
            return setRomanNumber(convertArabicToRoman(num));
        } else {
            alert('You must enter a valid number and less than 4999.');
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
                    <label>Accepts inputs from 1 - 4999</label>
                </div>
                <AnimatedDisplay romanNumberGetter={romanNumber} />
                <Footer />
            </div>
        </>
    );
}

export default App;
