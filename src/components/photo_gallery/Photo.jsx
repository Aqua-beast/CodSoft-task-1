import React from 'react'
import './photo.css'
import i1 from '../../images/i1.jpg'
import i2 from "../../images/i2.jpeg"
import i3 from "../../images/i3.webp"
import i4 from "../../images/i4.jpg"
import i8 from "../../images/i8.jpeg"
import i6 from "../../images/i6.jpeg"
import i9 from "../../images/i9.jpg"
import i10 from "../../images/i11.jpg"
import i11 from "../../images/1200x0.jpg"

function Photo() {
  const img_url = [i1, i2, i3, i4, i6, i8, i9, i10, i11];

  return (
    <div className='gallery' id='Photos'>
      {
      img_url.map((url, index) => (
        <div key={index}>
          <img className={`frame${index+1}`} src={url} alt='' />
        </div>
      ))
      }     
    </div>
  )
}

export default Photo
