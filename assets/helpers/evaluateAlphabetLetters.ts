const evaluateAlphabetLetters = (input: string): boolean => {
  const regex = /^[A-Za-zñÑ]$/;

  return regex.test(input);
}

export default evaluateAlphabetLetters