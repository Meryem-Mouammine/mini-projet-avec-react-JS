import './Hero.css'
import {PrimaryButton } from '../../components/index'
const Hero = () => {
  return (
   <div className='hero-main'>
     <div className='hero-text'>
        <h6 className='hero-subtitle'>Welcome To Cyborg</h6>
        <h4 className='hero-title'><em>Browse</em>Our Popular Games Here</h4>

        <PrimaryButton >Browse Now</PrimaryButton>
        {/* <div classNmae="main-button">
            <a href="browe.html">Browse Now</a>

        </div> */}

     </div>
   </div>
  )
}

export default Hero