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
    const unsubscribe = onValue(donationsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const donationsList = Object.keys(data)
          .map((id) => ({
            id,
            ...data[id],
          }))
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        setDonations(donationsList);
        setCurrentPage(1);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleDonate = async (amount) => {
    if (selectedDonation) {
      const donationRef = ref(db, `raiseRequests/${selectedDonation.id}`);
      const newTotalDonated =
        parseFloat(selectedDonation.totalDonated || 0) + parseFloat(amount);

      try {
        await update(donationRef, { totalDonated: newTotalDonated });
        setCurrentPage(1);
      } catch (error) {
        console.error("Error updating donation:", error);
      }
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
          const totalDonated = donation.totalDonated || 0;
          const progress = Math.min(
            (totalDonated / donation.amount) * 100,
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
                  fontWeight: "bold",
                }}
              >
                {progress.toFixed(2)}% Raised
              </span>
              <div
                className="progress-bar"
                style={{
                  width: `${progress}%`,
                  backgroundColor:
                    progress >= 100
                      ? "#4CAF50"
                      : progress >= 30
                      ? "#ff9800"
                      : "#ff3b3b",
                }}
              />

              <div className="donation-details">
                <div className="detail-row">
                  <span className="detail-label">Amount:</span>
                  <span className="detail-value">₹{donation.amount}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Total Donated:</span>
                  <span className="detail-value">₹{donation.totalDonated}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Reason:</span>
                  <span className="detail-value">{donation.reason}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Context:</span>
                  <span className="detail-value">{donation.context}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Created At:</span>
                  <span className="detail-value">
                    {new Date(donation.createdAt).toLocaleString()}
                  </span>
                </div>
              </div>
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
