import React, { useState } from 'react'
import { FaRegStar } from "react-icons/fa6";


function Rating() {
  const stars = []
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null)

  const handleClick = (currentIndex) => {
    setRating(currentIndex);
  }

  const handleHover = (currentIndex) => {
    setHover(currentIndex);
  }

  const handleLeave = (currentIndex) => {
    setHover(0);
  }

  for (let i = 1; i <= 10; i++) {
    stars.push(
        <FaRegStar
          className={i<=rating || i<=hover ? 'text-yellow-500' : ""}
          key={i}
          onClick={() => handleClick(i)}
          onMouseOver={() => handleHover(i)}
          onMouseLeave={() => handleLeave(i)} />
    )
  }

  return (
    <div className='h-[100vh] w-[100vw] flex justify-center items-center'>
      {stars}
    </div>
  )
}

export default Rating