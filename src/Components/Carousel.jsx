import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import content1img1 from "../images/png/content1img1.png";
import content1img2 from "../images/png/content1img2.png";
import content1img3 from "../images/png/content1img3.png";
import "../styles/Carousel.css";

const ContentCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    swipe: false,
    touchMove: false,
  };

  return (
    <div className="parent-carousel">
      <div className="carousel-container">
        <Slider {...settings}>
          <div>
            <div className="carousel-content">
              <div className="left-section">
                <img src={content1img1} alt="Funds" />
                <div className="img1-content">
                  <h1>Funds</h1>
                  <p>
                    Be part of the journey as we bring hope and change to lives
                    in need.
                  </p>
                  <p>Read More...</p>
                </div>
              </div>
              <div className="right-section">
                <h2>Why Funds Are Important</h2>
                <p>
                  Funds play a vital role in sustaining various initiatives
                  dedicated to enhancing the well-being of those in need. They
                  facilitate the provision of essential resources, medical aid,
                  education, infrastructure, and social support services to
                  underserved communities. By ensuring access to healthcare,
                  clean water, food, and shelter, financial support empowers
                  organizations to drive meaningful change, uplift vulnerable
                  populations, and create sustainable development opportunities.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="carousel-content">
              <div className="left-section">
                <img src={content1img2} alt="Blood Camp" />
                <div className="img1-content">
                  <h1>Blood Camp</h1>
                  <p>
                    By donating, you’re becoming a beacon of hope for those who
                    need it most.
                  </p>
                  <p>Read More...</p>
                </div>
              </div>
              <div className="right-section">
                <h2>Why Blood Donation Matters</h2>
                <p>
                  Blood donation is a selfless and life-saving act that provides
                  critical support to patients undergoing surgeries, cancer
                  treatments, trauma care, and those managing chronic illnesses.
                  Each donation has the power to restore health, extend lives,
                  and offer hope to individuals in urgent need. By donating
                  blood, you contribute to a vital supply that hospitals and
                  medical facilities rely on to save countless lives every day.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="carousel-content">
              <div className="left-section">
                <img src={content1img3} alt="Friendly Volunteer" />
                <div className="img1-content">
                  <h1>Friendly Volunteer</h1>
                  <p>
                    Our friendly volunteers are the heart and soul of our
                    mission.
                  </p>
                </div>
              </div>
              <div className="right-section">
                <h2>The Role of Volunteers</h2>
                <p>
                  Volunteers are the backbone of our mission, contributing their
                  time, skills, and passion to organizing events, offering
                  support, and raising awareness about our cause. Their
                  commitment and generosity enable us to extend our reach,
                  engage with more communities, and create a meaningful impact.
                  Through their efforts, we can drive positive change, inspire
                  others, and bring our vision to life.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ContentCarousel;
