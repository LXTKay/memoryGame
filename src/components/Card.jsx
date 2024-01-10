import { useEffect, useState } from "react";
import "../styles/card.css"

export default function Card({info, onClick}){
  const base = "https://api.giphy.com/v1/gifs/translate?api_key=baHdoVS3jfZfq7PuhdBtDWaCd3SyR7md&s=";
  let url = base + info;
  let width = 200;
  let height = 300;

  let [src, setSrc] = useState("");

  useEffect(()=>{
    async function getPic(url){
      let returnedObject = await fetch(url, {mode: "cors"});
      let relevantObject = await returnedObject.json();
      setSrc(relevantObject.data.images.original.url);
    }
    getPic(url);
  },[url])

  return (
    <img src={src}
    alt="cardimage"
    width={width}
    height={height}
    onClick={onClick}
    className="card"/>
  )
}