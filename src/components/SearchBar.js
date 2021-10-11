import React from "react";

function SearchBar(props) {
  return (
    <div
      className={
        props.status ? "flex flex-col h-screen justify-center" : "flex flex-col"
      }
    >
      <div className="flex justify-center mt-6">
        <input
          className="w-1/2 p-3 border-2"
          placeholder="Type your search term"
        ></input>
        <button className="p-3 bg-green-500 px-6 text-white">Go!</button>
      </div>
    </div>
  );
}

export default SearchBar;
