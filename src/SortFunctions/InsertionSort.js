// Insertion SORT
export const insertionSort = (dataSet) => {
  const newArr = [...dataSet];
  const selectedIndex = [];
  let key, j, i;
  for (i = 1; i < newArr.length; i++) {
    key = newArr[i];
    j = i - 1;
    while (j >= 0 && newArr[j] > key) {
      selectedIndex.push([j + 1, j]);
      newArr[j + 1] = newArr[j];
      j--;
    }
    newArr[j + 1] = key;
  }
  return { newArr, animationList: selectedIndex };
};
