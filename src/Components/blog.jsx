import { useState } from "react";
import Navbar from "../Components/navbar_page";
import "../styles/blogs.css";
import blogImg1 from "../images/blogs/blog-1.jpg";
import blogImg2 from "../images/blogs/blog-2.jpg";
import blogImg3 from "../images/blogs/blog-3.jpg";
import blogImg4 from "../images/blogs/blog-4.webp";
import blogImg5 from "../images/blogs/blog-5.jpeg";
import Footer from "../Components/footer";

const articles = [
  {
    id: 1,
    title: "Understanding Poverty: A Global Perspective",
    excerpt:
      "This article explores the various dimensions of poverty around the world Based on 2019's PPPs International Comparison Program...",
    image: blogImg5,
    link: "https://www.hrw.org/report/2022/11/17/if-i-wasnt-poor-i-wouldnt-be-unfit/family-separation-crisis-us-child-welfare",
  },
  {
    id: 2,
    title: "The Impact of Poverty on Children",
    excerpt:
      "Children living in poverty face numerous challenges that affect their development...",
    image: blogImg2,
    link: "https://www.hrw.org/report/2022/11/17/if-i-wasnt-poor-i-wouldnt-be-unfit/family-separation-crisis-us-child-welfare",
  },
  {
    id: 3,
    title: "Breaking the Cycle of Poverty",
    excerpt:
      "Strategies and policies that can help break the cycle of poverty for families...",
    image: blogImg3,
    link: "https://www.hrw.org/report/2022/11/17/if-i-wasnt-poor-i-wouldnt-be-unfit/family-separation-crisis-us-child-welfare",
  },
  {
    id: 4,
    title: "Breaking the Cycle of Poverty",
    excerpt:
      "Strategies and policies that can help break the cycle of poverty for families...",
    image: blogImg4,
    link: "https://www.hrw.org/report/2022/11/17/if-i-wasnt-poor-i-wouldnt-be-unfit/family-separation-crisis-us-child-welfare",
  },
  {
    id: 5,
    title: "Breaking the Cycle of Poverty",
    excerpt:
      "Strategies and policies that can help break the cycle of poverty for families...",
    image: blogImg5,
    link: "https://www.hrw.org/report/2022/11/17/if-i-wasnt-poor-i-wouldnt-be-unfit/family-separation-crisis-us-child-welfare",
  },
  {
    id: 6,
    title: "Breaking the Cycle of Poverty",
    excerpt:
      "Strategies and policies that can help break the cycle of poverty for families...",
    image: blogImg1,
    link: "https://www.hrw.org/report/2022/11/17/if-i-wasnt-poor-i-wouldnt-be-unfit/family-separation-crisis-us-child-welfare",
  },
  {
    id: 7,
    title: "Breaking the Cycle of Poverty",
    excerpt:
      "Strategies and policies that can help break the cycle of poverty for families...",
    image: blogImg2,
    link: "https://www.hrw.org/report/2022/11/17/if-i-wasnt-poor-i-wouldnt-be-unfit/family-separation-crisis-us-child-welfare",
  },
  {
    id: 8,
    title: "Breaking the Cycle of Poverty",
    excerpt:
      "Strategies and policies that can help break the cycle of poverty for families...",
    image: blogImg3,
    link: "https://www.hrw.org/report/2022/11/17/if-i-wasnt-poor-i-wouldnt-be-unfit/family-separation-crisis-us-child-welfare",
  },
  {
    id: 9,
    title: "Breaking the Cycle of Poverty",
    excerpt:
      "Strategies and policies that can help break the cycle of poverty for families...",
    image: blogImg4,
    link: "https://www.hrw.org/report/2022/11/17/if-i-wasnt-poor-i-wouldnt-be-unfit/family-separation-crisis-us-child-welfare",
  },
  {
    id: 10,
    title: "Breaking the Cycle of Poverty",
    excerpt:
      "Strategies and policies that can help break the cycle of poverty for families...",
    image: blogImg5,
    link: "https://www.hrw.org/report/2022/11/17/if-i-wasnt-poor-i-wouldnt-be-unfit/family-separation-crisis-us-child-welfare",
  },
];

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 2;

  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="blog-section">
        <Navbar />
        <div className="blog">
          <div className="articles">
            {articles.slice(startIndex, endIndex).map((article) => (
              <div key={article.id} className="article">
                <img
                  src={article.image}
                  alt={article.title}
                  className="article-image"
                />
                <h2>{article.title}</h2>
                <p>{article.excerpt}</p>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                </a>
              </div>
            ))}
          </div>
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={currentPage === i + 1 ? "active" : ""}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
