import React from 'react'
import image from '../assets/images/image.jpg';
import '../assets/style/Quote.css';
function Quote() {
  return (
    <div className="quote">
        <div className="paragraph">
            <p>Food can bevery transformational, and it can be more than just about a dish.
                That's what happened to me when I first went to France.
                I fell in love.And if you fall in love, well,then everything is easy.
            </p>
            <p><am>Alice Waters</am></p>
        </div >
        <div className="image">
            <img  src={image}
            />
        </div>
        
    </div>
    
  )
}

export default Quote