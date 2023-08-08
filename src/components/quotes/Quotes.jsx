import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import {GrCaretNext, GrCaretPrevious} from 'react-icons/gr'
import './quotes.css'


function Quotes() {
    const [index, setIndex] = useState(0);
    const quote = [
      {
        text: `"The most dangerous way to lose time is not to spend it having fun, but to spend it doing fake work."`,
        author: "- Paul Graham",
        color: "#7b7979",
      },
      {
        text: `"It's hard to do a really good job on anything you don't think about in the shower."`,
        author: "- Paul Graham",
        color: "#348aad",
      },
      {
        text: `"Startups are ruthless in a way that nothing else is. I mean, it's you against the world, basically."`,
        author: "- Paul Graham",
        color: "#8c6f43",
      },
      {
        text: `"The way to get startup ideas is not to try to think of startup ideas. It's to look for problems, preferably problems you have yourself."`,
        author: "- Paul Graham",
        color: "#d2691e",
      },
      {
        text: `"Live in the future, then build what's missing."`,
        author: "- Paul Graham",
        color: "#458b00",
      },
      {
        text: `"The secret to fundraising is to build a product that people love and need."`,
        author: "- Paul Graham",
        color: "#2f4f4f",
      },
      {
        text: `"If you can't decide, the answer is no."`,
        author: "- Paul Graham",
        color: "#800000",
      },
      {
        text: `"Do things that don't scale."`,
        author: "- Paul Graham",
        color: "#9932cc",
      },
      {
        text: `"A startup is a company designed to grow fast."`,
        author: "- Paul Graham",
        color: "#006400",
      },
      {
        text: `"The best way to get a good idea is to get a lot of ideas."`,
        author: "- Paul Graham",
        color: "#4b0082",
      }];

    const indexHandle = useCallback(() => {
      setIndex((previndex) => (previndex + 1) % quote.length);
    }, [quote.length]);

    const incremIndex = () => {
        setIndex((previndex) => (previndex+1)%quote.length);
    }

    const decremIndex = () => {
        setIndex((previndex) => (previndex - 1 + quote.length) % quote.length);
    }

    useEffect( () => {
        const interval = setInterval(indexHandle, 5000);
        return () => clearInterval(interval);
    }, [index,indexHandle]) 
    
    const currentQuote = quote[index];

  return (
    <div className='wrapper' id='Quotes'>
        <div className='quotes-box' style={{backgroundColor: currentQuote.color}}>
            <div className='prev' onClick={decremIndex}><GrCaretPrevious size={40}/></div>
            <div className='quotes' >
                <div className='quote' >{currentQuote.text}</div>
                <div className="author"><i>{currentQuote.author}</i></div>
            </div>
            <div className='next' onClick={incremIndex}><GrCaretNext size={40} /></div>
        </div>
    </div>
  )
}

export default Quotes
