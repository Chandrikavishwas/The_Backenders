import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import NavbarPage from "../Components/navbar_page";
import "../styles/blogs.css";
import blogImg1 from "../images/blogs/blog-1.jpg";
import blogImg2 from "../images/blogs/blog-2.jpg";
import blogImg3 from "../images/blogs/blog-3.jpg";
import blogImg4 from "../images/blogs/blog-4.webp";
import blogImg5 from "../images/blogs/blog-5.jpeg";
import photoImg1 from "../images/blogs/photo-.jpg";
import Footer from "../Components/footer";
import Aos from "aos";
import Chatbot from "./chatbot";

const articles = [
  { id: 1, title: "Understanding Poverty: A Global Perspective", excerpt: "This article explores the various dimensions of poverty around the world Based on 2019's PPPs International Comparison Program...", image: photoImg1, link: "https://www.hrw.org/report/2022/11/17/if-i-wasnt-poor-i-wouldnt-be-unfit/family-separation-crisis-us-child-welfare" },
  { id: 2, title: "The Impact of Poverty on Children", excerpt: "Children living in poverty face numerous challenges that affect their development...", image: blogImg2, link: "https://www.hrw.org/report/2022/11/17/if-i-wasnt-poor-i-wouldnt-be-unfit/family-separation-crisis-us-child-welfare" },
  { id: 3, title: "Together, We Make Change Happen.", excerpt: "Strategies and policies that can help break the cycle of poverty for families...", image: blogImg3, link: "https://www.hrw.org/report/2022/11/17/if-i-wasnt-poor-i-wouldnt-be-unfit/family-separation-crisis-us-child-welfare" },
  { id: 4, title: "Breaking the Cycle of Poverty", excerpt: "Strategies and policies that can help break the cycle of poverty for families...", image: blogImg4, link: "https://www.hrw.org/report/2022/11/17/if-i-wasnt-poor-i-wouldnt-be-unfit/family-separation-crisis-us-child-welfare" },
  { id: 5, title: "Small Contributions, Big Impact.", excerpt: "Strategies and policies that can help break the cycle of poverty for families...", image: blogImg5, link: "https://www.hrw.org/report/2022/11/17/if-i-wasnt-poor-i-wouldnt-be-unfit/family-separation-crisis-us-child-welfare" },
  { id: 6, title: "Unite for a Cause, Give with Purpose.", excerpt: "Strategies and policies that can help break the cycle of poverty for families...", image: blogImg1, link: "https://www.hrw.org/report/2022/11/17/if-i-wasnt-poor-i-wouldnt-be-unfit/family-separation-crisis-us-child-welfare" },
  { id: 7, title: "A Small Gift, A Big Difference.", excerpt: "Strategies and policies that can help break the cycle of poverty for families...", image: blogImg3, link: "https://www.hrw.org/report/2022/11/17/if-i-wasnt-poor-i-wouldnt-be-unfit/family-separation-crisis-us-child-welfare" },
  { id: 8, title: "Giving Together, Growing Together.", excerpt: "Strategies and policies that can help break the cycle of poverty for families...", image: blogImg3, link: "https://www.hrw.org/report/2022/11/17/if-i-wasnt-poor-i-wouldnt-be-unfit/family-separation-crisis-us-child-welfare" },
  { id: 9, title: "Raise Hope, Fund Change.", excerpt: "Strategies and policies that can help break the cycle of poverty for families...", image: blogImg2, link: "https://www.hrw.org/report/2022/11/17/if-i-wasnt-poor-i-wouldnt-be-unfit/family-separation-crisis-us-child-welfare" },
  { id: 10, title: "Stronger Together, Brighter Future", excerpt: "Strategies and policies that can help break the cycle of poverty for families...", image: blogImg5, link: "https://www.hrw.org/report/2022/11/17/if-i-wasnt-poor-i-wouldnt-be-unfit/family-separation-crisis-us-child-welfare" }
];

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 4;

  useEffect(() => {
        Aos.init();
      }, []);

  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
    <NavbarPage/>
      <div className="blog-section" data-aos="fade-in" data-aos-delay="100">
        <p className="crowdfunding-description" data-aos="fade-in" data-aos-delay="100">
          Crowdfunding is a method of raising funds through the collective effort of individuals. 
          It empowers people to support social causes, innovative ideas, and community-driven projects.
          By contributing small amounts, we can create a massive impact and bring about meaningful change.
          Our goal is to create awareness about social issues, including poverty, and encourage people to unite for a cause. Small contributions from many can make a significant impact, changing lives and fostering a brighter future for all.
        </p>
        <h1 className="blog-heading" data-aos="fade-up">Blog Posts</h1>
        <div className="blog">
          <div className="articles">
            {articles.slice(startIndex, endIndex).map((article, index) => (
              <div key={article.id} className="article" data-aos="fade-up" data-aos-delay={index * 100}>
                <img src={article.image} alt={article.title} className="article-image" data-aos="zoom-in" />
                <h2>{article.title}</h2>
                <p>{article.excerpt}</p>
                <a href={article.link} target="_blank" rel="noopener noreferrer">Read more</a>
              </div>
            ))}
          </div>
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button key={i} onClick={() => handlePageChange(i + 1)} className={currentPage === i + 1 ? "active" : ""}>{i + 1}</button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <Chatbot/>
    </>
  );
};

export default Blog;