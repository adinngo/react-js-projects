import { useEffect, useState } from "react";
import Text from "./Text";
import Author from "./Author";
import Buttons from "./Buttons";
import "./styles/App.css";

const quotes = [
  {
    text: "Eighty percent of success is showing up.",
    author: "Woody Allen",
    color: "#73A857",
  },
  {
    text: "When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down ‘happy’. They told me I didn’t understand the assignment, and I told them they didn’t understand life.",
    author: "John Lennon",
    color: "#E74C3C",
  },
  {
    text: "It is never too late to be what you might have been.",
    author: "George Eliot",
    color: "#27AE60",
  },
  {
    text: "If you do what you’ve always done, you’ll get what you’ve always gotten.",
    author: "Tony Robbins",
    color: "#9B59B6",
  },
  {
    text: "We must balance conspicuous consumption with conscious capitalism.",
    author: "Kevin Kruse",
    color: "#2C3E50",
  },
];
function getRandomNumber(length) {
  const randomNumber = Math.floor(Math.random() * length);
  return randomNumber;
}
function App() {
  const [quote, setQuote] = useState(() => {
    const randomNumber = getRandomNumber(quotes.length);
    return quotes[randomNumber];
  });

  useEffect(() => {
    const root = document.getElementById("root");

    const text = document.getElementById("text");

    const author = document.getElementById("author");

    const color = quote.color;

    const fadeEnterActive = "fade-enter-active";
    root.style.backgroundColor = color;
    root.style.color = color;

    document.querySelectorAll(".button").forEach((button) => {
      button.style.backgroundColor = color;
    });

    //make context appear delay a little bit
    text.classList.remove(fadeEnterActive);
    author.classList.remove(fadeEnterActive);

    const idTimeOut =setTimeout(() => {
      text.classList.add(fadeEnterActive);
      author.classList.add(fadeEnterActive);
    },0)

    return () => {
      clearTimeout(idTimeOut);
    }
  });

  const handleClick = () => {
    setQuote(() => {  
      const randomNumber = getRandomNumber(quotes.length);
      return quotes[randomNumber];
    });
  };

  return (
    <div id="quote-box">
      <Text text={quote.text} />
      <Author author={quote.author} />
      <Buttons 
        handleClick={handleClick} 
        data={
          {
            author: quote.author,
            text: quote.text
          }
        }
      />
    </div>
  );
}

export default App;
