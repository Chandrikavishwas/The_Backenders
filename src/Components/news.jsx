import "../styles/news.css";
import img1 from "../images/news-img/freepik__upload__25461.webp";
import img2 from "../images/news-img/freepik__upload__86243.webp";
import img3 from "../images/news-img/COPY-News-3.webp";

const News = () => {
  return (
    <div className="newsContainer">
      <p className="newsHead">News & Updates</p>
      <div className="newsCardCont">
        {/* First Card */}
        <div className="newsCardSection">
          <div className="newsCardAlign">
            <span className="newsCardRed">&nbsp;N</span>
            <span className="newsCardYellow">&nbsp;E</span>
            <span className="newsCardGreen">&nbsp;W</span>
          </div>
          <div className="newsImageSec">
            <img src={img1} className="newsImgCardTitle" />
          </div>
          <span
            className="newsCardText"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            India backs UNGA resolutions on Gaza ceasefire and UNRWA
          </span>
          <div>
            <div style={{ color: "black" }}>
              <p style={{ fontWeight: "600" }}>Synopsis</p>
              <p className="newsCardSyn" style={{ fontWeight: "100" }}>
                The UN General Assembly overwhelmingly voted for resolutions
                demanding an immediate ceasefire in the Gaza conflict and
                supporting the UN Relief and Works Agency for Palestine Refugees
                (UNRWA). These resolutions, passed with 158-9 and 159-9 votes
                respectively, call for the release of all hostages and criticize
                Israel&apos;s ban on UNRWA&apos;s activities. Israel and the US opposed
                the resolutions.
                India, along with several other UN members, have approved
                General Assembly resolutions, demanding an immediate ceasefire
                in Gaza and backing UN Relief and Works Agency for Palestine
                Refugees that Israel is seeking to ban. UNGA on Wednesday voted
                158-9, with 13 abstentions, to demand an immediate ceasefire in
                Gaza and 159-9, with 11 abstentions, in support of the UN agency
                - UNRWA.
              </p>
            </div>
            <a href="https://economictimes.indiatimes.com/news/india/india-backs-unga-resolutions-on-gaza-ceasefire-and-unrwa/articleshow/116264755.cms"><button className="NewsReadbutton">
              Click here to read more...
            </button></a>
          </div>
        </div>

        {/* Second Card */}
        <div className="newsCardSection">
          <div className="newsCardAlign">
            <span className="newsCardRed">&nbsp;N</span>
            <span className="newsCardYellow">&nbsp;E</span>
            <span className="newsCardGreen">&nbsp;W</span>
          </div>
          <div className="newsImageSec">
            <img src={img2} className="newsImgCardTitle" />
          </div>
          <span
            className="newsCardText"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            Atishi claims Centre settling Rohingyas in Delhi; &apos;false narrative’,
            says Hardeep Puri
          </span>
          <div>
            <div style={{ color: "black" }}>
              <p style={{ fontWeight: "600" }}>Synopsis</p>
              <p className="newsCardSyn" style={{ fontWeight: "100" }}>
                Delhi CM Atishi accuses the BIP-led Centre of settling illegal
                Rohingyas in the city, citing Union Minister Hardeep Puri&apos;s 2022
                tweets. Puri denies the claims, alleging AAP is. playing host to
                them. Atishi demands a list of Rohingyas settled in Delhi and
                questions the BIP&apos;s border control.
                New Delhi: Delhi Chief Minister Atishi wrote to Union Home
                Minister Amit Shah on Sunday, accusing the BIP-led Centre of
                settling &quot;a large number of illegal Rohingyas&quot; in different
                parts of the city. With the AAP targeting Union Minister Hardeep
                Singh Puri over his tweets and claiming that settling these
                refugees here was a &quot;conscious decision&quot; of the BJP-led NDA
                government, the minister accused AAP of indulging in &quot;politics
                of diversion, false narratives and half-truths&quot;. In the run-up
                to the Delhi Assembly polls due in February 2025,
              </p>
            </div>
            <a href="https://economictimes.indiatimes.com/news/politics-and-nation/atishi-claims-centre-settling-rohingyas-in-delhi-false-narrative-says-hardeep-puri/articleshow/116337706.cms">
              <button className="NewsReadbutton">
                Click here to read more...
              </button>
            </a>
          </div>
        </div>

        {/* Third Card */}
        <div className="newsCardSection">
          <div className="newsCardAlign">
            <span className="newsCardRed">&nbsp;N</span>
            <span className="newsCardYellow">&nbsp;E</span>
            <span className="newsCardGreen">&nbsp;W</span>
          </div>
          <div className="newsImageSec">
            <img src={img3} className="newsImgCardTitle" />
          </div>
          <span
            className="newsCardText"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            Founders Crowdfunding INR 5 Cr To Help Meet
            India’s Oxygen Demand
          </span>
          <div>
            <div style={{ color: "black" }}>
            <p style={{ fontWeight: "600" }}>Synopsis</p>
              <p className="newsCardSyn" style={{ fontWeight: "100" }}>
              A group of entrepreneurs leading crowdfunding efforts has already
              raised INR 3 Cr to import oxygen concentrators. Amid shortage of
              oxygen tanks, concentrators are seeing high demand but
              manufacturers warn about a supply crunch. Orders for 400
              concentrators have already been placed and the group is trying to
              close 1,000 by Saturday evening. The group has collected INR 3 Cr
              to source concentrators from China, with donations pouring in from
              the startup community and celebrities such as Taapsee Pannu.the
              initial goal was to raise INR 2.5 Cr for 500 concentrators. The
              other entrepreneurs who are leading the efforts through this
              community are Snehil Khanor of TrulyMadly, Mansha Kaur of Heart On
              My Sleeve, Hubhopper founder Gautam Raj Anand, Rahul Agarwal and
              Varun Agarwal of Designhill,
              </p>
            </div>
            <a href="https://inc42.com/buzz/startupsvscovid19-founders-crowdfunding-inr-5-cr-to-help-meet-indias-oxygen-demand/">
              <button className="NewsReadbutton">
                Click here to read more...
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
