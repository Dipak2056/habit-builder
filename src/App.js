import { useState } from "react";
import "./App.css";
import Days from "./components/Days";
import { Footer } from "./components/Footer";
import AddHabits from "./components/Habits-section";
import QuoteSection from "./components/Quotes-section";
import Results from "./components/Results";
import Title from "./components/Title";

function App() {
  // for the quote section to display random quote every time page load
  let quotes = [
    { id: 1, quote: "we will win", author: "Dipak" },
    { id: 2, quote: "i am the best.", author: "hari" },
    { id: 3, quote: "i will win", author: "biswo" },
  ];
  let randomNumber = Math.floor(Math.random() * 4);
  const randomquote = () => {
    return quotes[randomNumber];
  };
  //for the quote section to display the days when the menu button is clicked
  // -----this thing is handeled in Quote section.jsx

  //Get the name of the day when the user click in one of the day and display it in the habits-section
  // -------for that we have to go to the Days component
  //The innertext of the div must be gotten when user click in selected div

  return (
    <div className="App">
      <Title />
      <QuoteSection
        randomquote={randomquote().quote}
        author={randomquote().author}
      />
      <AddHabits />
      <Results />
      <Footer />
    </div>
  );
}

export default App;
