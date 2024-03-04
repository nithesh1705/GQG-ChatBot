import React from "react";
import styles from "./Header.module.css";
import chatbotBanner from "../../assets/chatbotbanner.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          "One line statement for GQG"
        </p>
        <p className={styles.subHeading}>
        At GQG-ChatBot, we understand the importance of easy access to government information and services. That's why we created an innovative solution to help citizens navigate the complexities of governmental processes effortlessly.<br></br><br></br>

        Our team consists of dedicated developers and researchers committed to building a user-friendly platform that empowers individuals to interact with government agencies effectively.<br></br><br></br>

        With GQG-ChatBot, you can:<br></br><br></br>

        -> Save time by quickly finding answers to your questions.<br></br>
        -> Gain confidence in accessing accurate information from reputable sources.<br></br>
        -> Streamline your interactions with government services, reducing frustration and confusion.<br></br>
        </p>
        <Link to="/chatbox">
          <button className={styles.btn}>Get Started</button>
        </Link>
      </div>
      <div className={styles.right}>
        <img src={chatbotBanner} alt="AI" />
      </div>
    </div>
  );
};

export default Header;
