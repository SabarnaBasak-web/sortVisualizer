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
  return { animationList: selectedIndex };
};
