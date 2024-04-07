import React from 'react'
import Topbar from './Topbar'
import Abouts from './Abouts'
import Contactus from './Contactus'
import Health from './Health'


function Home() {
  return <>
    {/* <Topbar/> */}
    <div className='home'>
      <h1 className='homeh1'>Welcome to Healthhub </h1>
      <div className='gridhome'>
      <img src='https://img.freepik.com/premium-psd/3d-rendered-healthcare-medical-icon-illustration-high-resolution_978429-52.jpg' className='homeimage'></img>
      <h4 className='h4tag'>"Let food be thy medicine and medicine be thy food." </h4>

      </div>
      <p className='homepara'>At HealthHub, we believe that prioritizing your health is essential for a fulfilling life. From nutrition tips to fitness strategies and mental health insights, our goal is to empower you with the knowledge and resources needed to make informed decisions about your well-being. Whether you're looking to improve your diet, boost your fitness routine, or enhance your mental resilience, we're here to support you every step of the way. Join us on your journey to a healthier, happier you!</p>
</div>
<Abouts />
<Contactus/>
  </>

}

export default Home