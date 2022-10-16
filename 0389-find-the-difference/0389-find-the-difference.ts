function findTheDifference(s: string, t: string): string {
  const sMap = new Map<string, number>();
  const tMap = new Map<string, number>();

  for (const char of s) {
    const charCounter = sMap.get(char) ?? 0;
    sMap.set(char, charCounter + 1);
  }

  for (const char of t) {
    const charCounter = tMap.get(char) ?? 0;
    tMap.set(char, charCounter + 1);
  }

  for (const [char, counter] of sMap.entries()) {
    const charCounter = tMap.get(char);
    if (charCounter === counter) {
      tMap.delete(char);
    }
  }

  return Array.from(tMap.keys())[0];
}