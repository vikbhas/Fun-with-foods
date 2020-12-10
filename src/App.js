import React, { useState } from "react";
import "./styles.css";

var foodDictionary = {
  "🥞": "Pancakes",
  "🍔": "Burger",
  "🍿": "Popcorn",
  "🍩": "Doughnut",
  "🍟": "Fries",
  "🍕": "Pizza",
  "🥗": "Salad"
};

var foodWeKnow = Object.keys(foodDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function foodInputHandler(event) {
    var userInput = event.target.value;
    console.log(userInput);

    if (userInput === "") {
      var meaning = "";
    } else {
      var meaning = foodDictionary[userInput];
    }

    if (meaning === undefined) {
      meaning = "Not Available Currently";
    }
    setMeaning(meaning);
  }

  function foodClickHandler(emoji) {
    var meaning = foodDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="main">
      <h1>Fun with Foods!</h1>

      <input onChange={foodInputHandler} />

      <h2 style={{ color: "red" }}> {meaning} </h2>

      <h3> Quick Select </h3>
      {foodWeKnow.map(function (emoji) {
        return (
          <span
            id="emoji-span"
            onClick={() => foodClickHandler(emoji)}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
