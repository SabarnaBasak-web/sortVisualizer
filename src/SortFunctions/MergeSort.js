function doMerge(arr, low, mid, high, animationArray) {
  let auxiliaryArray = [];
  for (let k = low; k <= high; k++) {
    auxiliaryArray[k] = arr[k];
  }

  let i = low,
    j = mid + 1;
  for (let k = low; k <= high; k++) {
    if (i > mid) {
      animationArray.push([auxiliaryArray[j], k]);
      arr[k] = auxiliaryArray[j++];
    } else if (j > high) {
      animationArray.push([auxiliaryArray[i], k]);
      arr[k] = auxiliaryArray[i++];
    } else if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animationArray.push([auxiliaryArray[i], k]);
      arr[k] = auxiliaryArray[i++];
    } else {
      animationArray.push([auxiliaryArray[j], k]);
      arr[k] = auxiliaryArray[j++];
    }
  }
}
export function mergeSort(arr, low, high, animationArray) {
  if (low >= high) return;

  let mid = parseInt((low + high) / 2);

  mergeSort(arr, low, mid, animationArray);
  mergeSort(arr, mid + 1, high, animationArray);
  doMerge(arr, low, mid, high, animationArray);

  return { animationList: animationArray };
}
