import React from 'react';
import './index.css';

const FeaturedBy = () => {
  const awards = [
    {
      title: 'Bharat Business Award 2023',
      description:
        'This award recognizes an employee who has come up with a new idea or process that has positively impacted the company.',
    },
    {
      title: 'The Print',
      description:
        'This award recognizes an employee who has shown exceptional leadership skills and has inspired and motivated others.',
    },
    {
      title: 'Times of India',
      description:
        'These are often awarded to businesses or individuals who have achieved success or made significant contributions in their industry.',
    },
    {
      title: 'Hindustan Times',
      description:
        'Design well Acetech showcases the latest trends, products, and technologies in the industry and provides a platform.',
    },
  ];

  return (
    <div className="featured-by">
      <div className="header">
        <p>Featured By</p>
        <div className="title-section">
          <h1>IN THE NEWS</h1>
          <button className="view-more-btn">VIEW MORE</button>
        </div>
      </div>
      <div className="awards-list">
        {awards.map((award, index) => (
          <div key={index} className="award-card">
            <h3>{award.title}</h3>
            <p>{award.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBy;
