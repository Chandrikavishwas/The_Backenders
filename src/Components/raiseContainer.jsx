import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { ref, onValue, update } from "firebase/database";
import "../styles/raiseContainer.css";
import { Button } from "@chakra-ui/react";
import DonationModal from "./donationModal";
import blogImg1 from "../images/blogs/blog-1.jpg";
import blogImg2 from "../images/blogs/blog-2.jpg";
import blogImg3 from "../images/blogs/blog-3.jpg";
import blogImg4 from "../images/blogs/blog-4.webp";
import blogImg5 from "../images/blogs/blog-5.jpeg";

const RaiseContainer = () => {
  const [donations, setDonations] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    const donationsRef = ref(db, "raiseRequests/");
    onValue(donationsRef, (snapshot) => {
      const data = snapshot.val();
      const donationsList = [];
      for (let id in data) {
        donationsList.push({ id, ...data[id] });
      }
      setDonations(donationsList);
    });
  }, []);

  const handleDonate = (amount) => {
    if (selectedDonation) {
      const donationRef = ref(db, `raiseRequests/${selectedDonation.id}`);
      const newTotalDonated =
        parseFloat(selectedDonation.totalDonated || 0) + parseFloat(amount);

      update(donationRef, { totalDonated: newTotalDonated })
        .then(() => {
          setDonations((prevDonations) =>
            prevDonations.map((donation) =>
              donation.id === selectedDonation.id
                ? { ...donation, totalDonated: newTotalDonated }
                : donation
            )
          );
        })
        .catch((error) => {
          console.error("Error updating donation: ", error);
        });
    }
  };

  const donateImages = [blogImg1, blogImg2, blogImg3, blogImg4, blogImg5];

  const openModal = (donation) => {
    setSelectedDonation(donation);
    setIsModalOpen(true);
  };

  // Pagination logic
  const totalPages = Math.ceil(donations.length / itemsPerPage);
  const currentItems = donations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container-raise">
      <h2 className="raise-h2">Donations</h2>
      <ul className="raise-ul">
        {currentItems.map((donation, index) => {
          const progress = Math.min(
            (donation.totalDonated / donation.amount) * 100,
            100
          );

          return (
            <li className="raise-li" key={donation.id}>
              <img
                src={donateImages[index % donateImages.length]}
                alt="donate images"
                style={{ width: "100%", height: "auto" }}
              />
              <br />
              <span
                style={{
                  fontSize: "12px",
                  color: "#555",
                  fontWeight: "bold",
                }}
              >
                {progress.toFixed(2)}% Raised
              </span>
              <div
                className="progress-bar-container"
                style={{
                  width: "100%",
                  height: "20px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  marginTop: "10px",
                }}
              >
                <div
                  className="progress-bar"
                  style={{
                    width: `${progress}%`,
                    height: "100%",
                    backgroundColor: progress >= 100 ? "green" : "teal",
                    transition: "width 0.3s ease",
                  }}
                ></div>
              </div>
              <strong>Amount:</strong> ₹{donation.amount}
              <br />
              <strong>Total Donated:</strong> ₹{donation.totalDonated}
              <br />
              <strong>Reason:</strong> {donation.reason}
              <br />
              <strong>Context:</strong> {donation.context}
              <br />
              <strong>Created At:</strong>{" "}
              {new Date(donation.createdAt).toLocaleString()}
              <br />
              <Button
                colorScheme="teal"
                marginTop="10px"
                onClick={() => openModal(donation)}
              >
                Donate Now 💰
              </Button>
            </li>
          );
        })}
      </ul>
      {/* Pagination Controls */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            isActive={i + 1 === currentPage}
            margin="5px"
            colorScheme={i + 1 === currentPage ? "teal" : "gray"}
          >
            {i + 1}
          </Button>
        ))}
      </div>
      <DonationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDonate={handleDonate}
      />
    </div>
  );
};

export default RaiseContainer;
