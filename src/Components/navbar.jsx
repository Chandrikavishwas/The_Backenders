import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import imglogo from "../images/Updated-Logo/COPY_Updated_Logo_B-removebg-preview.png";
import { auth } from "../config/firebase";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar-wrapper");
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    const unsubscribe = () => {
      window.removeEventListener("scroll", handleScroll);
    };

    return unsubscribe;
  }, []);

  return (
    <div className="navbar-wrapper" style={{ height: isOpen ? "300px" : "auto" }}>
      <nav className="navbar">
        <Link to="/home" className="logo-link">
          <img src={imglogo} className="navlogo" alt="Logo" />
        </Link>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/raise">Raise</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/donate"><button className="make-a-donate">Make a Donate</button></Link>
          <button className="make-a-donate" onClick={() => {
              auth.signOut().then(
                function () {
                  console.log("Signed Out");
                },
                function (error) {
                  console.error("Sign Out Error", error);
                }
              );
            }}>Log Out</button>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;