import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import Card from "./Card";
import "../styles/Game.css";

export default function Game(){
  const [cards, setCards] = useState([
    "penguin",
    "giraffe",
    "elephant",
    "duck",
    "pigeon",
    "donkey",
    "tiger",
    "whale"
  ]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  function shuffleCards(){
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  }

  useEffect(() => {
    shuffleCards();
  }, [score]);

  function handleCardClick(card){
    console.log("Click")
    if (clickedCards.includes(card)) {
      setScore(0);
      if (score > highScore) {
        setHighScore(score);
      }
      setClickedCards([]);
    } else {
      setScore(score + 1);
      setClickedCards([...clickedCards, card]);
    }
  }
  return (
    <div>
      <div className="score">Current Score: {score}</div>
      <div className="score">High Score: {highScore}</div>
      <div>Click on each animal once!</div>
      <div className="gameboard">
        {cards.map((item)=>{
          return (
          <Card
          key={uuidv4()}
          info={item}
          onClick={()=>handleCardClick(item)}
          />
        )})}
      </div>
    </div>
  )
}