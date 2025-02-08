import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  Button,
  Text,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import "../styles/navbar.css";
import imglogo from "../images/Updated-Logo/CROP_Updated_Logo_W-removebg-preview.png";

const DummyNavbar = React.memo(() => {
  const [isOpened, setIsOpen] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const toggleMenu = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  const handleLoginClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar-wrapper");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <Link to="/" className="logo-link">
          <img src={imglogo} className="navlogo" alt="Logo" />
        </Link>

        <div className={`nav-links ${isOpened ? "open" : ""}`}>
          <div className="donateButtonSpace">
            <Button onClick={onOpen} className="make-a-donate">
              Explore our features
            </Button>
            <Button onClick={onOpen} className="make-a-donate">
              Make a Donation
            </Button>
          </div>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                Sorry! <img src={imglogo} alt="logo" />
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text fontSize="17px">
                  To donate 💵, you need to login first.
                </Text>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button onClick={handleLoginClick} colorScheme="teal">
                  Login
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpened ? "✖" : "☰"}
        </div>
      </nav>
    </div>
  );
});

DummyNavbar.displayName = "DummyNavbar";

export default DummyNavbar;
