export const bubbleSort = (dataSet) => {
  const newArr = [...dataSet];
  const selectedIndex = [];
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length - i - 1; j++) {
      let temp;
      if (newArr[j] > newArr[j + 1]) {
        selectedIndex.push([j + 1, j]);
        temp = newArr[j];
        newArr[j] = newArr[j + 1];
        newArr[j + 1] = temp;
      }
    }
  }
  return { newArr, selectedIndex };
};

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
  return { newArr, selectedIndex };
};
