import React from 'react'
import {BsTwitter, BsWikipedia} from 'react-icons/bs'
import './references.css';

function References() {
  return (
    <div className='references' id="References">
      <div className='social-1'>
        <span className='texter'>Follow him on Twitter</span>
        <a href="https://twitter.com/paulg?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><BsTwitter className='hov' size={30} color='black'/></a>
      </div>
      <div className='social-2'>
        <span className='texter'>For further more information, check on Paul Graham on </span>
        <a href="https://en.m.wikipedia.org/wiki/Paul_Graham_(programmer)"><BsWikipedia className='hov' size={30} color='black'/></a>
      </div>
    </div>
  )
}

export default References
