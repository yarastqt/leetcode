function wordPattern(pattern: string, s: string): boolean {
  const patternList = pattern.split("");

  const symbolsMap = new Map<string, string>();
  const wordsMap = new Map<string, string>();

  const wordsList = s.split(" ");

  if (patternList.length !== wordsList.length) {
    return false;
  }

  for (const idx in wordsList) {
    const symbol = patternList[idx];

    if (!symbol) {
      return false;
    }

    const word = wordsList[idx];

    if (!symbolsMap.get(symbol) && !wordsMap.get(word)) {
      symbolsMap.set(symbol, word);
      wordsMap.set(word, symbol);
      continue;
    }

    if (wordsMap.get(word) !== symbol || symbolsMap.get(symbol) !== word) {
      return false;
    }
  }
  return true;
}