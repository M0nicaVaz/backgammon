function useChunk(array: Player[], size: number) {
  let finalArray: any[] = [];

  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size);

    finalArray = [...finalArray, chunk];
  }

  return finalArray;
}

export function useShuffle(array: Player[]) {
  const shuffledArr = array.sort(() => Math.random() - 0.5);

  const pairsArray = useChunk(shuffledArr, 2);

  return pairsArray;
}
