type EvaluationResult = {
  result: boolean;
  localArrayColors: string[];
}

const evaluateWord = (selectedWordArray: string[], wordsState: WordsState): EvaluationResult => {
  const localArrayColors: string[] = []
  const result = selectedWordArray.every((element: string, index: number) => {
    return element === wordsState[wordsState.currentWord][index].toLowerCase()
  });
  selectedWordArray.forEach((element: string, index: number) => {
    if (element === wordsState[wordsState.currentWord][index].toLowerCase()) {
      localArrayColors.push('bg-hard-green')
    } else if (selectedWordArray.includes(wordsState[wordsState.currentWord][index].toLowerCase())) {
      localArrayColors.push('bg-hard-yellow')
    } else {
      localArrayColors.push('bg-hard-gray')
    }
  });

  return { result, localArrayColors }
}

export default evaluateWord