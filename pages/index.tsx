import Navbar from "@/components/organisms/Navbar"
import Board from "@/components/molecules/Board"
import KeyBoard from "@/components/molecules/KeyBoard"
import Layout from "@/components/templates/Layout"
import PopUp from "@/components/organisms/PopUp"
import words from "@/assets/constants/words"
import React, { useCallback, useEffect, useState } from "react"
import Instructions from "@/components/molecules/Instructions"
import Statistics from "@/components/molecules/Statistics"
import evaluateWord from "@/assets/helpers/evaluateWord"
import evaluateAlphabetLetters from "@/assets/helpers/evaluateAlphabetLetters"

const initialWordState: WordsState = {
  currentWord: 1,
  1: [], 2: [], 3: [], 4: [], 5: [],
};

const NUM_ROWS: number = 5;
const NUM_COLUMNS: number = 5;
const INITIAL_COLOR: string = 'bg-mid-gray';

const generateColors = (): ColorsState => {
  const colors: ColorsState = {};
  for (let i = 1; i <= NUM_ROWS; i++) {
    colors[i] = Array(NUM_COLUMNS).fill(INITIAL_COLOR);
  }
  return colors;
};


const Home = (): JSX.Element => {
  const [selectedWordArray, setSelectedWordArray] = useState<string[]>([])
  const [shouldShowWord, setShouldShowWord] = useState<boolean>(false)
  const [isGameEnd, setIsGameEnd] = useState<boolean>(false)
  const [isDarkThemeActive, setIsDarkThemeActive] = useState<boolean>(false)
  const [wordsState, setWordsState] = useState<WordsState>(initialWordState)
  const [colors, setColors] = useState<ColorsState>(generateColors());
  const [isOpenInstructions, setIsOpenInstructions] = useState<boolean>(false)
  const [isOpenStatistics, setIsOpenStatistics] = useState<boolean>(false)
  const [dictionary, setDictionary] = useState<string[]>([])
  const generateRandomWord = (wordsWithoutAccents: string[]) => {
    const size = wordsWithoutAccents.length
    const random = Number.parseInt(`${Math.random() * size}`);
    const selectRandom = wordsWithoutAccents[random]
    const arrayWord: string[] = selectRandom.split('')
    console.log('palabra en letras', arrayWord)
    setSelectedWordArray(arrayWord)
  }
  useEffect(() => {
    const charge = async () => {
      const array: string[] = await words.split('\n').filter((word: string) => word.trim().length === 5)
      const wordsWithoutAccents: string[] = await array.map((wordItem: string) => wordItem.normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
      setDictionary(wordsWithoutAccents)
      generateRandomWord(wordsWithoutAccents)
    }

    if (localStorage.getItem('oldPlayer') !== 'true') {
      setIsOpenInstructions(true)
      localStorage.setItem('wins', '0')
      localStorage.setItem('rounds', '0')
    }

    charge()
  }, [])

  const handleEvaluateUserWord = () => {
    const { result, localArrayColors } = evaluateWord(selectedWordArray, wordsState)
    setColors({
      ...colors,
      [wordsState.currentWord]: localArrayColors
    });
    return result
  }

  useEffect(() => {
    if (wordsState[wordsState.currentWord]?.length === 5) {
      const win = handleEvaluateUserWord()
      setWordsState(prevState => ({
        ...prevState,
        currentWord: prevState.currentWord + 1
      }));
      if (win) {
        const wins = Number.parseInt(`${localStorage.getItem('wins')}`)
        const pointsOfWin = 1
        const rounds = Number.parseInt(`${localStorage.getItem('rounds')}`)
        const addRound = 1
        localStorage.setItem('wins', `${wins + pointsOfWin}`)
        localStorage.setItem('rounds', `${rounds + addRound}`)
        setIsGameEnd(true)
        setIsOpenStatistics(true)
        setShouldShowWord(false)
      }
    }
  }, [wordsState[wordsState.currentWord]])

  const handleKeyClick = useCallback((event: React.KeyboardEvent | React.MouseEvent | KeyboardEvent) => {
    if (isGameEnd) {
      return;
    }
    let letter = '';
    if (event.type === 'click') {
      letter = (event.target as HTMLElement)?.textContent || '';
    } else if (event.type === 'keydown') {
      letter = (event as React.KeyboardEvent).key;
    }
    if (evaluateAlphabetLetters(letter)) {
      setWordsState(prevState => ({
        ...prevState,
        [prevState.currentWord]: [...prevState[prevState.currentWord], letter]
      }));
    }
    if (letter === 'Backspace' || (event.target as HTMLElement)?.nodeName === 'svg') {
      setWordsState(prevState => {
        const currentWord = prevState.currentWord;
        const updatedWordArray = [...prevState[currentWord]];
        updatedWordArray.pop();
        return {
          ...prevState,
          [currentWord]: updatedWordArray,
        };
      });
    }
  }, [isGameEnd, setWordsState]);



  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      handleKeyClick(event);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyClick]);
  useEffect(() => {
    if (wordsState.currentWord === 5 && wordsState[5].length === 5) {
      if (!handleEvaluateUserWord()) {
        const rounds = Number.parseInt(`${localStorage.getItem('rounds')}`)
        const addRound = 1
        if (rounds >= 0) {
          localStorage.setItem('rounds', `${rounds + addRound}`)
        }
        setShouldShowWord(true)
      }
      setIsGameEnd(true)
      setIsOpenStatistics(true)
    }
  }, [wordsState.currentWord, wordsState[5]]);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDarkThemeActive) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [isDarkThemeActive])

  const handleCloseInstructions = () => {
    setIsOpenInstructions(false)
    if (localStorage.getItem('oldPlayer') !== 'true') {
      localStorage.setItem('oldPlayer', 'true')
    }
  }

  const handleCloseStatistics = () => {
    setIsOpenStatistics(false)
    if (isGameEnd) {
      setIsGameEnd(false)
      setWordsState(initialWordState)
      generateRandomWord(dictionary)
      setColors(generateColors())
    }
  }
  const handleInstructions = () => {
    setIsOpenInstructions(!isOpenInstructions)
  }
  const handleStatistics = () => {
    setIsOpenStatistics(!isOpenStatistics)
  }

  const handleTheme = () => {
    setIsDarkThemeActive(!isDarkThemeActive)
  }


  return (
    <Layout>
      <Navbar handleInstructions={handleInstructions} handleStatistics={handleStatistics} handleTheme={handleTheme} isDarkThemeActive={isDarkThemeActive} />
      <Board wordsState={wordsState} colors={colors} />
      <KeyBoard handleKeyClick={handleKeyClick} />
      <PopUp isOpen={isOpenInstructions}>
        <Instructions handleClick={handleCloseInstructions} />
      </PopUp>
      <PopUp isOpen={isOpenStatistics}>
        <Statistics shouldShowWord={shouldShowWord} handleClick={handleCloseStatistics} isGameEnd={isGameEnd} selectedWordArray={selectedWordArray} />
      </PopUp>
    </Layout>
  )
}
export default Home