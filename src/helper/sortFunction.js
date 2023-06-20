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
