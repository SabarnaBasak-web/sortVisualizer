import React, { useEffect, useState } from "react";
import "./index.style.css";
import { insertionSort } from "../SortFunctions/InsertionSort";
import { mergeSort } from "../SortFunctions/MergeSort";
import { bubbleSort } from "../SortFunctions/BubbleSort";
import { quickSort } from "../SortFunctions/QuickSort";
import Navbar from "./Navbar";
function SortingVisualizer() {
  const [dataSet, setDataSet] = useState([]);

  const DELAY = 5;
  const MAX = 500;
  const MIN = 10;

  useEffect(() => {
    generateList();
  }, []);

  function isArrayEqual(newArr, originalArr) {
    if (newArr.length !== originalArr.length) return false;
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] !== originalArr[i]) return false;
    }
    return true;
  }
  const generateRandomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const generateList = () => {
    const randomArrayLength = generateRandomNumber(MAX, MIN);
    let arr = [];
    for (let i = 0; i <= randomArrayLength; i++) {
      const arrayInput = generateRandomNumber(1, 500);
      arr.push(arrayInput);
    }
    setDataSet([...arr]);
  };

  const animateBars = (newArr, selectedIndex) => {
    selectedIndex.forEach(([first, second], index) => {
      const firstBar = document.getElementById(first);
      const secondBar = document.getElementById(second);
      if (!firstBar || !secondBar) return;
      setTimeout(() => {
        firstBar.style.backgroundColor = "#ab003c";
        secondBar.style.backgroundColor = "#ab003c";
        const divHeight = firstBar.style.height;
        firstBar.style.height = secondBar.style.height;
        secondBar.style.height = divHeight;
        setTimeout(() => {
          firstBar.style.backgroundColor = "#009688";
          secondBar.style.backgroundColor = "#009688";
        }, DELAY * 2);
      }, DELAY * index * 2);
    });
  };

  const animateMerge = (newArr, selectedIndex) => {
    selectedIndex.forEach(([newHeight, index], idx) => {
      const div = document.getElementById(`${index}`);
      if (!div) return;
      setTimeout(() => {
        div.style.backgroundColor = "#ab003c";
        div.style.height = `${newHeight / 7}%`;
        setTimeout(() => {
          div.style.backgroundColor = "#009688";
        }, DELAY * 2);
      }, DELAY * idx * 2);
    });
  };

  const sortHandler = (sortType) => {
    switch (sortType) {
      case "bubblesort": {
        const { newArr, animationList } = bubbleSort(dataSet);
        animateBars(newArr, animationList);
        break;
      }
      case "insertionsort": {
        const { newArr, animationList } = insertionSort(dataSet);
        animateBars(newArr, animationList);
        break;
      }
      case "quicksort": {
        const { animationList } = quickSort(dataSet, 0, dataSet.length - 1, []);
        animateBars(dataSet, animationList);
      }

      case "mergesort": {
        const { animationList } = mergeSort(
          dataSet,
          0,
          dataSet.length - 1,
          [],
          dataSet.slice()
        );
        animateMerge(dataSet, animationList);
      }
    }
  };
  return (
    <>
      <Navbar sortHandler={sortHandler} generateList={generateList} />
      <div className="container">
        {dataSet.map((item, index) => {
          return (
            <div
              className="bar"
              key={index}
              id={`${index}`}
              style={{ height: `${item / 7}%` }}
            ></div>
          );
        })}
      </div>
    </>
  );
}

export default SortingVisualizer;
