function detectCapitalUse(word: string): boolean {
  return isUpperCase(word) || isLowerCase(word) || isFirstLowerCase(word);
}

function isUpperCase(word: string) {
  return word === word.toUpperCase();
}

function isLowerCase(word: string) {
  return word === word.toLowerCase();
}

function isFirstLowerCase(word: string) {
  const firstChar = word[0];
  const otherChars = word.slice(1, word.length);

  return isUpperCase(firstChar) && isLowerCase(otherChars);
}