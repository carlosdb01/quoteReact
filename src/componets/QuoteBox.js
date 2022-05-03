import React, { useState } from 'react'
import Button from './Button'
import quotes from '../json/quotes.json'


const QuoteBox = () => {

const  arrayColors = ["#6D3F5B", "#C93C20", "#1E213D", "#763C28", "#E1CC4F", "#C93C20", "#1E213D" ]

const randomColors = () => {
    return Math.floor(Math.random() * arrayColors.length)
}

const randomQuotes = () => {
    return Math.floor(Math.random() * quotes.length)
}
  const [colorRandom, setColorRandom] = useState(arrayColors[randomColors()])
  const [quoteRandom, setquoteRandom] = useState(quotes[randomQuotes()])

  document.body.style.backgroundColor = colorRandom

    const randomGeneral = () => {
        setColorRandom(arrayColors[randomColors() ] )
        setquoteRandom(quotes[randomQuotes() ] ) 

    }

  return (
    <article style={{color: colorRandom}} className='card-quote'>
        <div className='quote-container'>
            <i className="fa-solid fa-quote-left"></i>
            <p className='quote'>
               {quoteRandom.quote}
            </p>
        </div>
        <h1 className='autor'>
            {quoteRandom.author} 
        </h1>
        <Button colorRandom={colorRandom} randomGeneral={randomGeneral} />

    </article>
  )
}

export default QuoteBox