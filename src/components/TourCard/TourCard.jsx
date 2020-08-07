import React from 'react'
import './TourCard.scss'
import {useState} from 'react'

const TourCard = props => {
  const [showInfo, setShowInfo] = useState(false)
  const {id, city, img, name, info} = props.city

  const handleInfo = () => {
    setShowInfo(!showInfo)
  }
  return (
    <div className='tour-card'>
      <div className='img-container'>
        <img src={img} alt='' />
        <span className='close-btn'>
          <i className='fas fa-window-close' onClick={() => props.deleteCity(id)}></i>
        </span>
      </div>
      <div className='tour-info'>
        <h3>{city}</h3>
        <h4>{name}</h4>
        <h5>
          info{' '}
          <span>
            <i className='fas fa-caret-square-down' onClick={handleInfo}></i>
          </span>
        </h5>
        {showInfo && <p>{info}</p>}
      </div>
    </div>
  )
}

export default TourCard
