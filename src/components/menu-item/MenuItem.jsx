import React from 'react'
import { useNavigate } from 'react-router-dom';

import './MenuItem.sass'

const MenuItem = ({title, imageUrl, size, linkUrl}) => {
  const history = useNavigate();
  return (
    <div className={`${size} menu-item`} onClick={() => history(`${linkUrl}`)}
    >
      <div 
        className="background-image"
        style={{backgroundImage: `url(${imageUrl})`}} 
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
}

export default MenuItem
