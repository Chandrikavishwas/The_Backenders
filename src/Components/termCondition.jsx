import React from 'react';

const TermsAndConditions = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Terms & Conditions</h1>

      <section style={styles.section}>
        <h2 style={styles.subHeading}>Introduction</h2>
        <p style={styles.paragraph}>
          Welcome to our crowdfunding platform. These Terms & Conditions govern your use of our website and services. By accessing or using the platform, you agree to comply with and be bound by these terms. If you do not agree to these terms, you must not use the platform.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeading}>User Responsibilities</h2>
        <p style={styles.paragraph}>
          As a user, you are responsible for ensuring that your use of the platform complies with all applicable laws and regulations. You must not use the platform for fraudulent activities, to promote hate, or to infringe upon the rights of others. You are also responsible for keeping your account secure and accurate.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeading}>Fundraising Guidelines</h2>
        <p style={styles.paragraph}>
          Fundraisers created on our platform must adhere to our guidelines. All campaigns should be for lawful purposes and meet the platform's criteria for legitimate projects. Campaign creators must provide clear and truthful descriptions, and they must comply with any local or international fundraising laws.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeading}>Donation Policies</h2>
        <p style={styles.paragraph}>
          Donations made through our platform are voluntary, and once a donation is processed, it is final and non-refundable. We do not guarantee that the funds raised will be used exactly as stated in the campaign description. However, creators are obligated to provide regular updates and transparency to donors.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeading}>Privacy & Data Protection</h2>
        <p style={styles.paragraph}>
          We are committed to protecting your privacy. All personal data collected through the platform will be processed in accordance with our Privacy Policy. By using the platform, you consent to the collection and use of your information as described in the Privacy Policy.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeading}>Limitation of Liability</h2>
        <p style={styles.paragraph}>
          Our platform is provided "as is" without warranties of any kind. We do not guarantee the success of any fundraising campaign or that donations will be used for their intended purposes. We are not liable for any damages or losses resulting from your use of the platform.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeading}>Changes to Terms</h2>
        <p style={styles.paragraph}>
          We reserve the right to modify these Terms & Conditions at any time. Any changes will be posted on this page, and by continuing to use the platform after such changes, you agree to be bound by the updated terms.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeading}>Contact Us</h2>
        <p style={styles.paragraph}>
          If you have any questions or concerns about these Terms & Conditions, please feel free to contact us at support@charityplatform.com.
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: 'rgba(60, 199, 143, 0.8)',
    color: '#fff',
    padding: '40px',
    borderRadius: '10px',
    maxWidth: '900px',
    margin: 'auto',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
    fontSize: '36px',
    marginBottom: '20px',
  },
  subHeading: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.6',
  },
  section: {
    marginBottom: '30px',
  },
};

export default TermsAndConditions;