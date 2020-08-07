import React, {useState, useEffect} from 'react'
import './TourList.scss'
import {tourData} from '../../tourData'
import TourCard from '../TourCard/TourCard'

const TourList = () => {
  const [citis, setCities] = useState([])

  useEffect(() => {
    setCities(tourData)
  }, [])

  function deleteCity(id) {
    setCities(citis.filter(city => id !== city.id))
  }

  return (
    <div className='tourlist'>
      {citis.map(city => (
        <TourCard key={city.id} deleteCity={deleteCity} city={city} />
      ))}
    </div>
  )
}

export default TourList
