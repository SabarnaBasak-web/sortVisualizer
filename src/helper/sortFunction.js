// Bubble SORT
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
  return { newArr, selectedIndex };
};

// QUICK SORT
function swapValues(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
const partition = (arr, low, high, selectedIndex) => {
  let pivot = arr[high];
  let i = low - 1;
  for (let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      selectedIndex.push([i, j]);
      swapValues(arr, i, j);
    }
  }
  selectedIndex.push([i + 1, high]);
  swapValues(arr, i + 1, high);
  return { pivotValue: i + 1, animatedIndex: selectedIndex };
};

export const quickSort = (dataSet, low, high, selectedIndex) => {
  const copyArr = [...dataSet];
  if (low < high) {
    const { pivotValue, animatedIndex } = partition(
      copyArr,
      low,
      high,
      selectedIndex
    );
    quickSort(copyArr, low, pivotValue - 1, animatedIndex);
    quickSort(copyArr, pivotValue + 1, high, animatedIndex);
  }
  return { selectedIndex };
};
