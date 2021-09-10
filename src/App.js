import { useState } from "react";
import "./styles.css";

export default function App() {
  var foodDictionary = {
    "🍲": "Pot of Food",
    "🥫": "Canned Food",
    "🥡": "Takeout Food",
    "🍜": "Steaming Bowl",
    "🦐": "Shrimp",
    "🍛": "Curry Rice",
  };

  var foodEmojisInDatabase = Object.keys(foodDictionary);

  const [foodName, setFoodName] = useState("");
  function onChangetext(event) {
    var userInput = event.target.value;
    console.log(userInput);
    var foodName = foodDictionary[userInput];
    if (foodName === undefined) {
      foodName = "We don't have this emoji in our database";
    }
    console.log(foodName);
    setFoodName(foodName);
  }
  function emojiClickHandler(item) {
    var foodName = foodDictionary[item];
    setFoodName(foodName);
    console.log("clicked", item);
  }
  return (
    <div className="App">
      <h1 className="heading">Learn about some food Emojis</h1>
      <input className="input" onChange={onChangetext}></input>
      <div className="output"> {foodName}</div>
      {foodEmojisInDatabase.map(function (emoji) {
        return (
          <span onClick={() => emojiClickHandler(emoji)} className="emojis">
            {" "}
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
