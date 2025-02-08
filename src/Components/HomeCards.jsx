import { useState, useEffect } from "react";
import { FaHandHoldingHeart, FaHandHoldingMedical, FaCoins, FaArrowRight, FaArrowLeft, FaGraduationCap, FaHome, FaUtensils, FaBriefcase } from "react-icons/fa";
import "aos/dist/aos.css";
import Aos from "aos";

const services = [
  { icon: <FaHandHoldingMedical size={40} style={{ color: "#e53e3e" }} />, title: "Medical Emergencies", description: "Raise a request for medical assistance, including cancer treatment and urgent surgeries." },
  { icon: <FaHandHoldingHeart size={40} style={{ color: "#38a169" }} />, title: "Financial Crises", description: "Get help during financial hardships by connecting with compassionate donors." },
  { icon: <FaCoins size={40} style={{ color: "#d69e2e" }} />, title: "Donate & Support", description: "Make a difference by donating to people in need and helping them overcome challenges." },
  { icon: <FaGraduationCap size={40} style={{ color: "#3182ce" }} />, title: "Education Support", description: "Fund education expenses for students in need, ensuring they achieve their dreams." },
  { icon: <FaHome size={40} style={{ color: "#805ad5" }} />, title: "Housing Assistance", description: "Help individuals secure safe and stable housing during crises." },
  { icon: <FaUtensils size={40} style={{ color: "#dd6b20" }} />, title: "Food Assistance", description: "Provide food and nutrition support to families struggling with hunger." },
  { icon: <FaBriefcase size={40} style={{ color: "#4a5568" }} />, title: "Employment Aid", description: "Support job seekers with financial help and skill development." },
  { icon: <FaCoins size={40} style={{ color: "#319795" }} />, title: "Small Business Support", description: "Help small business owners sustain and grow their ventures." }
];

const HomeCards = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
        Aos.init();
      }, []);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else {
        setVisibleCount(4);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  const visibleCards = [...services, ...services].slice(startIndex, startIndex + visibleCount);

  return (
    <div style={{ position: "relative", padding: "24px", width: "100%", overflow: "hidden", margin:"5rem 0rem" }}  data-aos="fade-in" data-aos-delay="100">
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <h2 style={{ fontSize: "1.75rem", fontWeight: "700", color: "#2d3748" }}>
          Empowering Lives Through Crowdfunding
        </h2>
        <p style={{ fontSize: "1rem", color: "#4a5568", maxWidth: "600px", margin: "0 auto", marginTop: "8px" }}>
          We connect people in need with generous donors. Whether it's medical aid, education support, or financial assistance, your contributions make a difference.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${visibleCount}, 1fr)`, gap: "24px", transition: "transform 0.3s ease" }}>
        {visibleCards.map((service, index) => (
          <div key={index} style={{ backgroundColor: "#fff", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "12px", padding: "24px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            {service.icon}
            <h3 style={{ marginTop: "16px", fontSize: "1.25rem", fontWeight: "600" }}>{service.title}</h3>
            <p style={{ marginTop: "8px", color: "#4a5568" }}>{service.description}</p>
          </div>
        ))}
      </div>
      <button onClick={prevSlide} style={{ position: "absolute", left: "8px", top: "50%", transform: "translateY(-50%)", backgroundColor: "#e2e8f0", padding: "8px", borderRadius: "50%", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
        <FaArrowLeft />
      </button>
      <button onClick={nextSlide} style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", backgroundColor: "#e2e8f0", padding: "8px", borderRadius: "50%", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default HomeCards;
