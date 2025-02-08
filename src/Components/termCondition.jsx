import Logo from "../images/Updated-Logo/CROP_Updated_Logo_W-removebg-preview.png"

const TermsAndConditions = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        color: "#333",
        padding: "40px",
        backgroundColor: "#F4FBF8", // Light greenish background
        minHeight: "100vh",
      }}
    >
      {/* Header Section with Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "25px",
        }}
      >
        {/* Logo */}
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "18rem", height: "14rem", objectFit: "contain" }}
        />
        {/* Title */}
        <h1 style={{ fontSize: "36px", color: "#3CC78F", margin: "0" }}>
          Terms & Conditions
        </h1>
      </div>

      {/* Sections */}
      {sections.map((section, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "rgba(60, 199, 143, 0.1)",
            padding: "20px",
            borderRadius: "8px",
            width: "80%",
            maxWidth: "900px",
            marginBottom: "20px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2
            style={{ fontSize: "24px", color: "#3CC78F", marginBottom: "10px" }}
          >
            {section.title}
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            {section.content}
          </p>
        </div>
      ))}
    </div>
  );
};

const sections = [
  {
    title: "Introduction",
    content:
      "Welcome to our crowdfunding platform. By using our platform, you agree to these terms. This document outlines the rules and regulations governing our services and ensures a safe and transparent experience for all users. Please read these terms carefully before using our services, as your access to and use of the platform indicates your acceptance of these terms. If you do not agree, you must refrain from using our platform.",
  },
  {
    title: "User Responsibilities",
    content:
      "Users must comply with all applicable laws and regulations. You are solely responsible for any content you upload, ensuring it does not violate intellectual property rights, privacy rights, or any other applicable laws. Engaging in fraudulent activities, spreading misinformation, or using our platform for unlawful activities is strictly prohibited. You are also responsible for safeguarding your account credentials, and any actions taken using your account will be deemed as your responsibility.",
  },
  {
    title: "Fundraising Guidelines",
    content:
      "All fundraising campaigns must be for legitimate purposes. Campaign organizers must provide clear and truthful information regarding their cause, ensuring transparency and honesty. Any misleading or deceptive campaigns may result in removal from the platform and potential legal consequences. We reserve the right to verify campaign details and request additional documentation as necessary. Failure to provide adequate information may lead to campaign suspension or termination.",
  },
  {
    title: "Donation Policies",
    content:
      "All donations made through our platform are voluntary and non-refundable. Donors should carefully review campaign details before contributing, as we do not guarantee the use of funds for the exact stated purpose. While we encourage transparency from campaign organizers, we do not take responsibility for how funds are utilized after they have been received. We recommend that donors research campaigns before making contributions to ensure they align with their intentions and expectations.",
  },
  {
    title: "Privacy & Data Protection",
    content:
      "We are committed to protecting user privacy. Any personal information collected through our platform is processed in accordance with our Privacy Policy. We do not sell, share, or distribute user data without consent, except as required by law. Users have the right to access, modify, or delete their data as per applicable regulations. By using our services, you agree to our data collection practices, which may include cookies, analytics, and marketing communications.",
  },
  {
    title: "Limitation of Liability",
    content:
      "We provide our services on an “as is” basis without warranties of any kind. We do not guarantee the success of any fundraising campaign, nor do we take responsibility for the fulfillment of promised benefits by campaign organizers. Users acknowledge that we are not liable for any direct, indirect, incidental, or consequential damages arising from the use of our platform, including but not limited to financial losses, reputational harm, or fraudulent activities by third parties.",
  },
  {
    title: "Changes to Terms",
    content:
      "We reserve the right to update these Terms & Conditions at any time. Any modifications will be posted on this page, and continued use of our platform signifies acceptance of the revised terms. It is the user’s responsibility to periodically review this document to stay informed of any changes. If you do not agree with the updated terms, you must discontinue using our services immediately.",
  },
  {
    title: "Contact Us",
    content:
      "For any questions, concerns, or disputes regarding these Terms & Conditions, please contact our support team at support@charityplatform.com. Our team is dedicated to assisting users with any inquiries and ensuring a seamless experience on our platform. We encourage users to reach out for clarifications before initiating fundraising campaigns or making donations.",
  },
];

export default TermsAndConditions;
