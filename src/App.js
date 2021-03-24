import './App.css';
import TweetContainer from "./components/TweetContainer";
import React from "react";
import {render} from "@testing-library/react";

function App() {

  let tweetItems = [
      "Stop COVID-19, Take out only!",
      "At home, binge watching Breaking  Bad for second time! ",
      "When is the beach opening up? Can't wait..."

    ];

  return (
    <div className="App">
      {getTweetContainers()}
    </div>
  );

  function getTweetContainers(){
    return tweetItems.map(item => (
        <TweetContainer status={item}/>
    ))
  }
}

export default App;
