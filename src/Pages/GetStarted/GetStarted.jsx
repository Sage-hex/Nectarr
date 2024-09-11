import React from 'react'
import './GetStarted.css'
import GetStartedHead from '../../Components/GetStartedHead/GetStartedHead'
import Forfree from '../../Components/GetStartedForFree/Forfree'

const GetStarted = () => {
  return (
    <div className='GetStarted'>
        <GetStartedHead />
        <Forfree/>
    </div>
  )
}

export default GetStarted