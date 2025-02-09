const AboutBox = () => {
  const allContent = [
    { title: "Easy Setup", description: "Launch your fundraising campaign in just a few clicks." },
    { title: "Promote Your Cause", description: "Share your story and reach a wider audience using social media integrations and our platform's network." },
    { title: "Tracking & Reporting", description: "Stay up-to-date with real-time tracking of donations and progress." },
    { title: "Transparency", description: "Provide updates to backers and share milestones along the way." },
    { title: "Secure Donations", description: "Our platform uses secure payment gateways to ensure that all transactions are safe and easy." },
    { title: "Community Support", description: "Engage with your backers, build relationships, and create a community around your campaign." },
    { title: "Customizable Campaigns", description: "Tailor your fundraising page to your cause and goals." },
    { title: "Global Reach", description: "Access a wide network of potential backers from all around the world." },
    { title: "Customer Support", description: "Get help from our expert team at any stage of your campaign." }
  ];

  return (
    <div className="about_box">
      <div className="about_box_wrapper">
        {allContent.map((item, index) => (
          <div key={index} className="about_box_card">
            <strong>{item.title}:</strong> {item.description}
          </div>
        ))}        
        {allContent.map((item, index) => (
          <div key={index + allContent.length} className="about_box_card">
            <strong>{item.title}:</strong> {item.description}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutBox;