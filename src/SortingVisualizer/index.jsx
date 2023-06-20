import React, { useEffect, useState } from "react";
import "./index.style.css";
import { bubbleSort } from "../helper/sortFunction";
import Navbar from "./Navbar";
function SortingVisualizer() {
  const [dataSet, setDataSet] = useState([]);

  const DELAY = 5;
  const MAX = 100;
  const MIN = 10;

  useEffect(() => {
    generateList();
  }, []);

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
          firstBar.style.backgroundColor = "#2196f3";
          secondBar.style.backgroundColor = "#2196f3";
        }, DELAY * 2);
      }, DELAY * index * 2);
    });
  };

  const sortHandler = (sortType) => {
    switch (sortType) {
      case "bubblesort":
        const { newArr, selectedIndex } = bubbleSort(dataSet);
        animateBars(newArr, selectedIndex);
        break;
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
