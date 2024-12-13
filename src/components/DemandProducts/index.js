import React from 'react';
import './index.css';  // Updated CSS file

const bestSellingData = [
  {
    id: 1,
    title: 'Premium Marble Slab',
    image: 'https://roomfortuesday.com/wp-content/uploads/2023/10/How-to-Buy-the-Best-Marble-Kitchen-Countertop.jpg',
    price: '$500 per sq.ft',
  },
  {
    id: 2,
    title: 'Luxury Granite Tile',
    image: 'https://www.fuleistone.com/wp-content/uploads/2020/07/luxury-granite-slabs-17.jpg',
    price: '$300 per sq.ft',
  },
  {
    id: 3,
    title: 'Sleek Onyx Stone',
    image: 'https://5.imimg.com/data5/ANDROID/Default/2022/5/TQ/GR/DJ/22214156/product-jpeg-500x500.jpg',
    price: '$800 per sq.ft',
  },
  {
    id: 4,
    title: 'Exquisite Travertine Marble',
    image: 'https://www.nitco.in/nitcomedia/marble/masters/TRAVERTINO-(-IR-CREAM-).jpg',
    price: '$600 per sq.ft',
  },
  {
    id: 5,
    title: 'Elegant Limestone Slab',
    image: 'https://i0.wp.com/www.naishafalakexports.com/wp-content/uploads/2024/05/Best-Exporter-Flower-Gold-Limestone-Naisha-Falak-Exports-Kota.webp?w=1140&ssl=1',
    price: '$450 per sq.ft',
  },
];

const DemandProducts = () => {
  return (
    <div className="best-selling">
      <h2 className="section-title">Best Selling Products</h2>
      <div className="product-cards">
        {bestSellingData.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DemandProducts;
