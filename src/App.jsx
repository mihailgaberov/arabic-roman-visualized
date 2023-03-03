import {convertArabicToRoman} from "../lib/converter";
import styles from './App.module.css';
import {createSignal} from "solid-js";

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
        <div class={styles.app}>
            <input name='arabic' ref={inputRef}
                   onInput={(event) => convert(event)}/>
            <input name='roman' value={romanNumber()}/>
        </div>
    );
}

export default App;
