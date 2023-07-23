import Navbar from "@/components/organisms/Navbar"
import Board from "@/components/molecules/Board"
import KeyBoard from "@/components/molecules/KeyBoard"
import Layout from "@/components/templates/Layout"
import words from "@/assets/constants/words"
import { useCallback, useEffect, useState } from "react"

const Home = (): JSX.Element => {
  const [selectedWordArray, setSelectedWordArray] = useState([])
  const [isGameEnd, setIsGameEnd] = useState(false)
  const [wordsState, setWordsState] = useState({
    currentWord: 1,
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
  })
  const [colors, setColors] = useState({
    1: ['bg-mid-gray', 'bg-mid-gray', 'bg-mid-gray', 'bg-mid-gray', 'bg-mid-gray'],
    2: ['bg-mid-gray', 'bg-mid-gray', 'bg-mid-gray', 'bg-mid-gray', 'bg-mid-gray'],
    3: ['bg-mid-gray', 'bg-mid-gray', 'bg-mid-gray', 'bg-mid-gray', 'bg-mid-gray'],
    4: ['bg-mid-gray', 'bg-mid-gray', 'bg-mid-gray', 'bg-mid-gray', 'bg-mid-gray'],
    5: ['bg-mid-gray', 'bg-mid-gray', 'bg-mid-gray', 'bg-mid-gray', 'bg-mid-gray'],
  })
  useEffect(() => {
    console.log('me ejecuto')
    const charge = async () => {
      const array = await words.split('\n').filter(word => word.trim().length === 5)
      const wordsWithoutAccents = await array.map((wordItem) => wordItem.normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
      const size = wordsWithoutAccents.length
      const random = Number.parseInt(`${Math.random() * size}`);
      console.log('numero ', random)
      console.log('word ', wordsWithoutAccents[random])
      const selectRandom = wordsWithoutAccents[random]
      const arrayWord = selectRandom.split('')
      console.log('palabra en letras', arrayWord)
      setSelectedWordArray(arrayWord)
    }
    charge()
  }, [])

const evaluateWord = () => {
  console.log('evaluando')
  const localArrayColors = []
  const result = selectedWordArray.every((element, index) => {
    return element === wordsState[wordsState.currentWord][index].toLowerCase()
  });
  selectedWordArray.forEach((element, index) => {
    if (element === wordsState[wordsState.currentWord][index].toLowerCase()) {
      localArrayColors.push('bg-hard-green')
    } else if (selectedWordArray.includes(wordsState[wordsState.currentWord][index].toLowerCase())) {
      localArrayColors.push('bg-hard-yellow')
    } else {
      localArrayColors.push('bg-hard-gray')
    }
  });
  console.log('array colors ', localArrayColors)
  setColors({
    ...colors,
    [wordsState.currentWord]: localArrayColors
  });
  return result
}

  useEffect(() => {
    console.log('las palabras', wordsState)
    if (wordsState[wordsState.currentWord]?.length === 5) {
      const win = evaluateWord()
      setWordsState(prevState => ({
        ...prevState,
        currentWord: prevState.currentWord + 1
      }));
      if (win) {
        console.log('ya ganaste puto')
        setIsGameEnd(true)
      }
    }
  }, [wordsState[wordsState.currentWord]])

  useEffect(() => {
    console.log('estado deee gammeeee', isGameEnd)
  }, [isGameEnd])

  function validateKeyAsLetter(input) {
    const regex = /^[A-Za-zñÑ]$/;
  
    return regex.test(input);
  }

  const handleKeyClick = useCallback((event) => {
    console.log('estado del juego ', isGameEnd);
    if (isGameEnd) {
      console.log('el juego ha terminado perro');
      return;
    }
    let letter = ''
    if (event.type === 'click') {
      letter = event.target.textContent
    } else if (event.type === 'keydown') {
      letter = event.key
    } 
    console.log('la letra ess', letter, validateKeyAsLetter(letter))
    if (validateKeyAsLetter(letter)) {
      console.log('entre aqui')
      setWordsState(prevState => ({
        ...prevState,
        [prevState.currentWord]: [...prevState[prevState.currentWord], letter]
      }));
    }
    if (letter === 'Backspace') {
      setWordsState(prevState => {
        const currentWord = prevState.currentWord;
        const updatedWordArray = [...prevState[currentWord]]; // Copia el arreglo
        updatedWordArray.pop(); // Elimina el último elemento
        return {
          ...prevState,
          [currentWord]: updatedWordArray,
        };
      });
    }
  }, [isGameEnd]);

  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyClick);
    return () => {
      window.removeEventListener('keydown', handleKeyClick);
    };
  }, [handleKeyClick]);
  useEffect(() => {
    if (wordsState.currentWord === 5 && wordsState[5].length === 5) {
      setIsGameEnd(true)
    }
  }, [wordsState.currentWord, wordsState[5]]);


  return (
    <Layout>
      <Navbar />
      <Board wordsState={wordsState} colors={colors}/>
      <KeyBoard handleKeyClick={handleKeyClick} />
    </Layout>
  )
}
 export default Home