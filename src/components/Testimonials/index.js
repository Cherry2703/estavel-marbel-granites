import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';



const Testimonials = ({testimonialsData}) => {
  return (
    <div className="container mt-5 p-3 testinmonials-main-cont">
      <div className="row gy-5">
        {/* Carousel Section */}
        <div className="col-12 col-md-6">
          <h2 className="text-center mb-4 testimonial-heading"><span><hr/></span>Testimonials<span><hr/></span></h2>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {testimonialsData.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`carousel-item ${index === 0 ? 'active' : ''}`}
                >
                  <div className="d-flex flex-column align-items-center text-center p-4">
                    <img
                      src={testimonial.profileImg}
                      alt={`${testimonial.name} testimonial`}
                      className="rounded-circle mb-3"
                      style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                    />
                    <h5 className="mb-1">{testimonial.name}</h5>
                    <p className="text-muted">{testimonial.time}</p>
                    <p>{testimonial.review}</p>
                    <p className="text-warning">
                      {'★'.repeat(Math.floor(testimonial.rating))}
                      {testimonial.rating % 1 ? '☆' : ''}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="text-end mt-3">
            <button className="btn btn-primary">Write Review</button>
          </div>
        </div>

        {/* Consultation Form Section */}
        <div className="col-12 col-md-6 d-flex align-items-center">
          <div className="testimonials-right w-100">
            <form className="consultation-form">
              <h4 className="form-subtitle">Happy to Serve</h4>
              <h1 className="form-title">Book Consultation Now</h1>
              <p className="form-description">
                Our dedicated team will get back to you within 24 hours.
              </p>
              <div className="form-group d-flex flex-column  gap-2">
                <input type="text" placeholder="Firstname" className="form-input flex-fill" />
                <input type="text" placeholder="Lastname" className="form-input flex-fill" />
              </div>
              <input
                type="text"
                placeholder="Company Name"
                className="form-input full-width my-2"
              />
              <textarea
                rows={3}
                placeholder="Write Your Message"
                className="form-textarea my-2"
              ></textarea>
              <button type="submit" className="btn btn-secondary w-100">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
