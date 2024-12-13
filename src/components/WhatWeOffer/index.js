import React from 'react';
import './index.css'; 

const offeringsData = [
  {
    id: 1,
    title: 'Sand Stone',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/7/AC/EV/BG/96526706/sandstone-slab-500x500.jpg', 
  },
  {
    id: 2,
    title: 'Lime Stone',
    image: 'https://www.shutterstock.com/image-photo/limestone-marble-texture-background-high-260nw-2290141123.jpg', 
  },
  {
    id: 3,
    title: 'Imported Marble',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbyAgLI4HB4IyExS0mrPvRgrHVGPP5vc6bSg&s', 
  },
  {
    id: 4,
    title: 'Travertine Marble',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvfL4y8D4LOpzqyF5cnS-kL2E1wveJjv1H5sQ-CRUrvIsdvNp4kILsJjS1jKVQpL8ocFk&usqp=CAU', 
  },
  {
    id: 5,
    title: 'Oynx Stone',
    image: 'https://varunmarbles.b-cdn.net/wp-content/uploads/2024/04/onyx-italian-marble-price.jpg', 
  },
  {
    id: 6,
    title: 'Indian Marble',
    image: 'https://varunmarbles.b-cdn.net/wp-content/uploads/2024/06/indian-marble-types.jpg', 
  },
  
];

const WhatWeOffer = () => {
  return (
    <div className="what-we-offer">
        <div>
            <div>
                <h2 className="offer-title">What We Offer</h2>
                <h2>Shop By Category</h2>
            </div>
      
            <button type='button'>VIEW MORE</button>
        </div>
        <div className="offer-cards">
        {offeringsData.map((offer) => (
          <div key={offer.id} className="offer-card">
            <img src={offer.image} alt={offer.title} className="offer-image" />
            <div className="offer-details">
              <h3 className="offer-heading">{offer.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeOffer;
