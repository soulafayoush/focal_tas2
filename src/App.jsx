import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/navbar'
import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import Properties from './components/properties/Properties'
import VideoView from './components/Viedo/VideoView'
// import Deal from './components/Deal/Deal'
import CardContainer from './components/Card/Card'
import ContactUs from './components/ContactUs/ContactUs'
import Footer from './components/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)
  const images = [
        '/images/banner-01.jpg',
        '/images/banner-02.jpg',
        '/images/banner-03.jpg',
    ];

    const propertyItems = [
      { imageSrc: '/images/info-icon-01.png', title: '250 m²', description: 'Total flat space' },
      { imageSrc: '/images/info-icon-02.png', title: 'Contract', description: 'Contract Ready' },
      { imageSrc: '/images/info-icon-03.png', title: 'Payment', description: 'Flexible Payment' },
      { imageSrc: '/images/info-icon-04.png', title: 'Safety', description: '24/7 Security' },
  ];

  return (
    <>
      <div>
        <Header />
       <NavBar />
       <Hero       
                buttonText="Toronto"
                buttonSpanText="canada"
                headlineText="HURRY! GET THE BEST VILLA FOR YOU"
                images={images}
            />
             <Properties
            featuredImage="/images/featured.jpg"
            featuredIcon="/images/featured-icon.png"
            highlightTitle="| Featured"
            highlightText="Best Apartment & SEA View"
            propertyItems={propertyItems}
        />
             <CardContainer />
                {/* <Deal /> */}
      <VideoView/>
   <ContactUs />
   <Footer/>
 
      </div>
   
    </>
  )
}

export default App
