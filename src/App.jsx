import {convertArabicToRoman} from "../lib/converter";
import styles from './App.module.css';
import {createSignal} from "solid-js";

function App() {
  const [romanNumber, setRomanNumber] = createSignal('')
  const [arabicNumber, setArabicNumber] = createSignal('')

  const convert = (event) => {
    console.log(">>> event: ", event.data)
    const num = event.data;
    if (!isNaN(num)) {
      return setRomanNumber(convertArabicToRoman(num));
    } else {
      setArabicNumber('')
      alert('You must enter a valid number.')
    }
  }

  return (
    <div class={styles.app}>
      <input name='arabic' value={arabicNumber()} onInput={(event) => convert(event)} />
      <input name='roman' value={romanNumber()} />
    </div>
  );
}

export default App;
