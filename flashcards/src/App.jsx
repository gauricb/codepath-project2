import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const rocks = [
    {
      front:
        "https://miningmatters.ca/images/default-source/iceop/rocks/rock-basalt.jpg?sfvrsn=c7e09bce_6",
      back: "Basalt",
    },
    {
      front:
        "https://miningmatters.ca/images/default-source/iceop/rocks/rock-conglomerate.jpg?sfvrsn=fb374326_4",
      back: "Conglomerate",
    },
    {
      front:
        "https://miningmatters.ca/images/default-source/iceop/rocks/rock-dolostone.jpg?sfvrsn=ae9ae56_4",
      back: "Dolostone",
    },
    {
      front:
        "https://miningmatters.ca/images/default-source/iceop/rocks/rock-gabbro.jpg?sfvrsn=64cd2e91_4",
      back: "Gabbro",
    },
    {
      front:
        "https://miningmatters.ca/images/default-source/iceop/rocks/rock-granite.jpg?sfvrsn=ffd9dc9c_4",
      back: "Granite",
    },
    {
      front:
        "https://miningmatters.ca/images/default-source/iceop/rocks/rock-gneiss.jpg?sfvrsn=493e8b88_4",
      back: "Gneiss",
    },
    {
      front:
        "https://miningmatters.ca/images/default-source/iceop/rocks/rock-limestone.jpg?sfvrsn=86dcf505_4",
      back: "Limestone",
    },
    {
      front:
        "https://miningmatters.ca/images/default-source/iceop/rocks/rock-shale.jpg?sfvrsn=e707f81_6",
      back: "Shale",
    },
    {
      front:
        "https://miningmatters.ca/images/default-source/iceop/rocks/rock-slate.jpg?sfvrsn=f9b9554d_4",
      back: "Slate",
    },
    {
      front:
        "https://miningmatters.ca/images/default-source/iceop/rocks/rock-rhyolite.jpg?sfvrsn=5ee056c1_4",
      back: "Rhyolite",
    },
  ];

  const [flashcards, setFlashcards] = useState(rocks);
  function getRandomCard() {
    return Math.floor(Math.random() * rocks.length);
  }
  const [currrentCard, setCurrentCard] = useState(getRandomCard());

  function nextClicked() {
    const newCard = getRandomCard();
    setCurrentCard(newCard);
  }
  return (
    <div className="App">
      <h1>Flashcards for Geology 101</h1>
      <h2>What type of rock is this?</h2>
      <h3>Number of cards: 10</h3>

      <center>
        <Card
          front={flashcards[currrentCard].front}
          back={flashcards[currrentCard].back}
        />
      </center>

      <button onClick={nextClicked}>Next</button>
    </div>
  );
}

export default App;
