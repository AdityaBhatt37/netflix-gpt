import React from 'react'
import { IMG_CDN } from '../Utils/constants';

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-48 pr-4">
        <img alt="Movie Card Image"src={IMG_CDN + posterPath}></img>
    </div>
  )
}

export default MovieCard;