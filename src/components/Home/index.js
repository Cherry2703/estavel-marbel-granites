import React from 'react'

import Navbar from '../Navbar'
import Section1 from '../Section1'
import ChooseUs from '../ChooseUs'
import WhatWeOffer from '../WhatWeOffer'
import OurClients from '../OurClients'
import Testimonials from '../Testimonials'
import Footer from '../Footer'

import './index.css'
import DemandProducts from '../DemandProducts'
import FeaturedBy from '../FeaturedBy'

const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    time: '2 hours ago',
    rating: 4.5,
    review: 'The service was excellent, and I am thoroughly impressed. Highly recommended!',
    profileImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnH58Sj6a3hBXKy-5BA92Uw7jb6TAtSZSaxQ&s',
  },
  {
    id: 2,
    name: 'Jane Smith',
    time: '1 day ago',
    rating: 5,
    review: 'Amazing experience! The team was so supportive and professional.',
    profileImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5feh6-WBnJMJzunv-DXyYf3BUFU5Yexv08g&s',
  },
  {
    id: 3,
    name: 'Michael Brown',
    time: '3 days ago',
    rating: 4,
    review: 'Good service overall, though there’s room for improvement.',
    profileImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9P6y7fwYa_I72hujPiMMPex1WCVeLfQk8CQ&s',
  },
];

const logos = [
  { name: "DLF", logo: "https://res.cloudinary.com/ramcharan/image/upload/v1734019405/Estavel/company-images/companies-img-5_tu2f60.png" },
  { name: "White Lily Residency", logo: "https://res.cloudinary.com/ramcharan/image/upload/v1734019409/Estavel/company-images/companies-img-12_kwuo7b.jpg" },
  { name: "vista", logo: "https://e7.pngegg.com/pngimages/53/974/png-clipart-godrej-group-godrej-properties-limited-godrej-emerald-logo-godrej-text-trademark.png" },
  { name: "Jindal Reality", logo: "https://res.cloudinary.com/ramcharan/image/upload/v1734019405/Estavel/company-images/companies-img-2_kosms1.png" },
  { name: "Nobel Callistha", logo: "https://res.cloudinary.com/ramcharan/image/upload/v1734019407/Estavel/company-images/companies-img-10_yyety5.webp" },
  { name: "HLP Galleria", logo: "https://res.cloudinary.com/ramcharan/image/upload/v1734019406/Estavel/company-images/companies-img-8_m88zha.png" },
  {name:"ramprastha",logo:"https://res.cloudinary.com/ramcharan/image/upload/v1734019406/Estavel/company-images/companies-img-9_qtt7xu.png"},
  {name:"ROF",logo:"https://res.cloudinary.com/ramcharan/image/upload/v1734019406/Estavel/company-images/companies-img-6_fz6ivz.png"},
  {name:"TATA",logo:"https://res.cloudinary.com/ramcharan/image/upload/v1734019405/Estavel/company-images/companies-img-3_a6i0op.png"},
  {name:"Suncity projects",logo:"https://res.cloudinary.com/ramcharan/image/upload/v1734019406/Estavel/company-images/companies-img-7_lprfa6.jpg"},
  {name:"godrej",logo:"https://e7.pngegg.com/pngimages/731/302/png-clipart-vikhroli-godrej-nest-godrej-group-godrej-properties-limited-godrej-air-property-logo-miscellaneous-text.png"},
  {name:"globe properties",logo:"https://res.cloudinary.com/ramcharan/image/upload/v1734019405/Estavel/company-images/companies-img-1_ysjikq.png"},
];

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Section1 />
      <ChooseUs />
      <div className='all-marble-image-container'>
        <img src='https://pic.stonecontact.com/tmppictures/FileUploadTemp/202111/181282/TinymceAttach-76ae7cae-20211108070209119B.jpg' alt='all-image' className='marble-images-all'/>
      </div>
      <WhatWeOffer/>
      <DemandProducts/>
      <OurClients logos={logos} />
      <FeaturedBy/>
      <Testimonials testimonialsData={testimonialsData} />
      <Footer />
    </div>
  )
}

export default Home
