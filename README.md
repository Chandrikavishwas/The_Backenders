# Project Title
Crowdfunding Platform

## Introduction
The Crowdfunding Platform is a React-based application that empowers individuals and organizations to raise funds for various causes or projects. It features real-time donation tracking, interactive campaign creation, and seamless supporter engagement, fostering a transparent and engaging user experience.

## Project Type
FullStack

## Deplolyed App
https://aabhar.netlify.app/

## Directory Structure
```plaintext
my-app/
📦src/
 ┣ 📂assets/
 ┃ ┗ 📜react.svg/
 ┣ 📂Components/
 ┃ ┣ 📜about.jsx/
 ┃ ┣ 📜blog.jsx/
 ┃ ┣ 📜comment.jsx/
 ┃ ┣ 📜contact.jsx/
 ┃ ┣ 📜donationModal.jsx/
 ┃ ┣ 📜dummyFooter.jsx/
 ┃ ┣ 📜DummyHome.jsx/
 ┃ ┣ 📜DummyNavbar.jsx/
 ┃ ┣ 📜footer.jsx/
 ┃ ┣ 📜home.jsx/
 ┃ ┣ 📜login.jsx/
 ┃ ┣ 📜navbar.jsx/
 ┃ ┣ 📜navbar_page.jsx/
 ┃ ┣ 📜news.jsx/
 ┃ ┣ 📜pages.jsx/
 ┃ ┣ 📜raise.jsx/
 ┃ ┣ 📜raiseContainer.jsx/
 ┃ ┣ 📜raiseContainer1.jsx/
 ┃ ┣ 📜signin.jsx/
 ┃ ┣ 📜termCondition.jsx/
 ┃ ┗ 📜volunteer.jsx/
 ┣ 📂config/
 ┃ ┗ 📜firebase.js/
 ┣ 📂context/
 ┃ ┗ 📜AuthContext.jsx/
 ┣ 📂images/
 ┃ ┣ 📂blogs/
 ┃ ┃ ┣ 📜blog-1.jpg/
 ┃ ┃ ┣ 📜blog-2.jpg/
 ┃ ┃ ┣ 📜blog-3.jpg/
 ┃ ┃ ┣ 📜blog-4.webp/
 ┃ ┃ ┣ 📜blog-5.jpeg/
 ┃ ┃ ┗ 📜blogsBackground.jpg/
 ┃ ┣ 📂news-img/
 ┃ ┃ ┣ 📂JPG/
 ┃ ┃ ┃ ┣ 📜COPY-News-3.jpg/
 ┃ ┃ ┃ ┣ 📜freepik__upload__25461.jpeg/
 ┃ ┃ ┃ ┗ 📜freepik__upload__86243.jpeg/
 ┃ ┃ ┣ 📜COPY-News-3.webp/
 ┃ ┃ ┣ 📜freepik__upload__25461.webp/
 ┃ ┃ ┗ 📜freepik__upload__86243.webp/
 ┃ ┣ 📂old-Logo/
 ┃ ┃ ┣ 📜a a b h a r (1).png/
 ┃ ┃ ┣ 📜a a b h a r (2).png/
 ┃ ┃ ┣ 📜a_a_b_h_a_r-removebg-preview.png/
 ┃ ┃ ┣ 📜a_a_b_h_a_r__2_-removebg-preview.png/
 ┃ ┃ ┣ 📜COPY_a_a_b_h_a_r__2_-removebg-preview.png/
 ┃ ┃ ┗ 📜CROP_a_a_b_h_a_r-removebg-preview.png/
 ┃ ┣ 📂png/
 ┃ ┃ ┣ 📜banner.png/
 ┃ ┃ ┣ 📜content1img1.png/
 ┃ ┃ ┣ 📜content1img2.png/
 ┃ ┃ ┣ 📜content1img3.png/
 ┃ ┃ ┣ 📜content2.png/
 ┃ ┃ ┗ 📜content3.png/
 ┃ ┣ 📂Updated-Logo/
 ┃ ┃ ┣ 📜COPY_Updated_Logo_B-removebg-preview.png/
 ┃ ┃ ┣ 📜CROP_Updated_Logo_W-removebg-preview.png/
 ┃ ┃ ┣ 📜FAV_Updated_Logo_B-removebg-preview.png/
 ┃ ┃ ┣ 📜Updated_Logo_B-removebg-preview.png/
 ┃ ┃ ┣ 📜Updated_Logo_B.png/
 ┃ ┃ ┣ 📜Updated_Logo_W-removebg-preview.png/
 ┃ ┃ ┗ 📜Updated_Logo_W.png/
 ┃ ┣ 📂volunteers/
 ┃ ┃ ┣ 📜aditya.jpeg/
 ┃ ┃ ┣ 📜prachi.jpg/
 ┃ ┃ ┗ 📜shiv.jpeg/
 ┃ ┣ 📜android-chrome-192x192.png/
 ┃ ┣ 📜android-chrome-512x512.png/
 ┃ ┣ 📜apple-touch-icon.png/
 ┃ ┣ 📜bacground-donate.jpg/
 ┃ ┣ 📜banner.webp/
 ┃ ┣ 📜content1img1.webp/
 ┃ ┣ 📜content1img2.webp/
 ┃ ┣ 📜content1img3.webp/
 ┃ ┣ 📜content2.webp/
 ┃ ┣ 📜content3.webp/
 ┃ ┣ 📜COPY_pexels-artosuraj-28593789.jpg/
 ┃ ┣ 📜counter_bg.png/
 ┃ ┣ 📜favicon-16x16.png/
 ┃ ┣ 📜favicon-32x32.png/
 ┃ ┣ 📜favicon.ico/
 ┃ ┣ 📜people-3277563_1920.jpg/
 ┃ ┣ 📜people-3277563_1920.webp/
 ┃ ┣ 📜pexels-artosuraj-28593789.jpg/
 ┃ ┣ 📜site.webmanifest/
 ┃ ┣ 📜slums-2635238_1920.jpg/
 ┃ ┗ 📜slums-2635238_1920.webp/
 ┣ 📂styles/
 ┃ ┣ 📜about.css/
 ┃ ┣ 📜blogs.css/
 ┃ ┣ 📜comment.css/
 ┃ ┣ 📜contact.css/
 ┃ ┣ 📜footer.css/
 ┃ ┣ 📜home.css/
 ┃ ┣ 📜login.css/
 ┃ ┣ 📜navbar.css/
 ┃ ┣ 📜navbar_page.css/
 ┃ ┣ 📜news.css/
 ┃ ┣ 📜raise.css/
 ┃ ┣ 📜raiseContainer.css/
 ┃ ┣ 📜raiseContainer1.css/
 ┃ ┣ 📜signin.css/
 ┃ ┗ 📜volunteer.css/
 ┣ 📜App.css/
 ┣ 📜App.jsx/
 ┣ 📜index.css/
 ┗ 📜main.jsx/

## Video Walkthrough of the project


## Video Walkthrough of the codebase
Attach a very short video walkthough of codebase [ 1 - 5 minutes ]

## Features
1. Interactive Campaign Creation Wizard

- Drag-and-drop media uploads with live previews.

- Real-time milestone tracking with visual indicators.

- User-friendly form validation and error handling.

2. Donation Tracking Dashboard

- Real-time animated progress bars for campaign goals.
- Clear and engaging donation statistics, such as total raised, donors, and time remaining.

3. Supporter Interaction Features

- Live comment section for supporters to engage with campaign creators.

- Notifications for verification

- Rich media updates with rate, reply and comment options.

## design decisions or assumptions
- Interactive and Responsive UI: Built with React and CSS to ensure the application works seamlessly across devices.
- Scalability: Component-based architecture for easy feature addition.
- Real-Time Data Handling: Integrated Firebase for real-time updates and data storage.
Assumptions:
- All users must authenticate before creating campaigns.
- Donation progress is displayed as a percentage of the fundraising goal.

## Installation & Getting started
Detailed instructions on how to install, configure, and get the project running. For BE/FS projects, guide the reviewer how to check mongodb schema etc.

Clone the repository -
git clone https://github.com/your-repo/crowdfunding-platform.git
 
Navigate to the project directory -
cd crowdfunding-platform

Install dependencies -
npm install

Start the development server - 
npm run dev or npm start


## Usage
Create a Campaign:

Navigate to the "Raise" page.
Fill in the form with campaign details, upload media, and set goals.
Submit to publish the campaign.


Donate to a Campaign:

Select a campaign from the homepage.
Click "Donate Now" and enter the desired amount.
Confirm payment and view the updated progress.
Track Campaign Progress:

View real-time progress bars on the campaign page.
Check milestones and donation statistics.

https://drive.google.com/drive/folders/1whghlATfohq4vxEQtYGvmmKRTKAAC7ug?usp=sharing

## Credentials
Provide user credentials for autheticated pages
Use your personal mail - 
username - xyz
email - xyz@gmail.com
password - #######

## APIs Used
Firebase Realtime Database
Chakra UI Components
Font Awesome

## Technology Stack
There are several technologies we have used in it.

Frontend:
React.js
CSS Modules
Chakra UI
Font Awesome

Backend:
Firebase Realtime Database
Firebase Authentication

Others:
Firebase Hosting for deployment
Firebase Cloud Messaging for push notifications