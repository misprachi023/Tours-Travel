import React from 'react'
import './service-card.css'
import ServiceCard from './serviceCard'
import {Col} from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const serviceData = [
    {
        imgUrl: weatherImg,
        title: 'Calculate Waether',
        desc: 'Get real time weather for your city or country'
    },
    {
        imgUrl: guideImg,
        title: 'Best Tour Guide',
        desc: 'Best tour guide for your trip with us'
    },
    {
        imgUrl: customizationImg,
        title: 'Customization',
        desc: 'Customization for your comfort and safety '
    }
]
const serviceList = () => {

    

  return (
    <>

    {serviceData.map((item, index) => (
        <Col lg='3'  key={index}>
            <ServiceCard item={item}/>
        </Col>
    ))}
    </>
  )
}

export default serviceList