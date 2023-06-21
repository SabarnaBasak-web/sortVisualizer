import React from "react";

function Navbar({ sortHandler, generateList }) {
  return (
    <div className="containerHeader">
      <button onClick={generateList} className="navButton">
        Generate List
      </button>
      <button
        className="navButton"
        onClick={sortHandler.bind(this, "bubblesort")}
      >
        Bubble Sort
      </button>
      <button
        className="navButton"
        onClick={sortHandler.bind(this, "insertionsort")}
      >
        Insertion Sort
      </button>
      <button
        className="navButton"
        onClick={sortHandler.bind(this, "quicksort")}
      >
        Quick Sort
      </button>
      <button
        className="navButton"
        onClick={sortHandler.bind(this, "mergesort")}
      >
        Merge Sort
      </button>
    </div>
  );
}

export default Navbar;
