import { useState } from 'react'
import Text from './Text';
import Author from './Author';
import Buttons from './Buttons';
import './styles/App.css'

const quotes = [
  {
    text: "Eighty percent of success is showing up.",
    author: "Woody Allen",
    color: "#73A857",
  },
  {
    text:
      "When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down ‘happy’. They told me I didn’t understand the assignment, and I told them they didn’t understand life.",
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
    color: "#27AE60",
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
  })

  const handleClick = () => {
    setQuote(() => {
      const randomNumber = getRandomNumber(quotes.length);
      return quotes[randomNumber];
    })
  }


  console.log(quote)
  return (
    <div id="quote-box">
      <Text text={quote.text}/>
      <Author author={quote.author}/>
      <Buttons handleClick={handleClick}/>
    </div>
  )
}

export default App
