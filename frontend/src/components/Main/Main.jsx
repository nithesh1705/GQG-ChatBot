import React from "react";
import styles from "./Main.module.css";
import ChatBotCardImg from "../../assets/Chat-bot-bro.svg";
import ResponsiveImg from "../../assets/responsive.svg";
import ConversationalImg from "../../assets/conversational.jpg";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h3>Features</h3>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={ConversationalImg} alt="ConversationalImg" />
          </div>
          <div className={styles.text}>
            <h1 className={styles.cardTitle}>AI Powered Smart Search</h1>
            <p>
              GQG-ChatBot employs cutting-edge natural language processing (NLP) algorithms to comprehend and interpret user queries accurately. Our chatbot is equipped with the intelligence to understand the nuances of language, enabling it to provide relevant and precise answers to a wide range of government-related questions. Whether you're inquiring about tax policies, immigration procedures, or social welfare programs, our chatbot ensures that you receive the information you need in a timely manner.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={ChatBotCardImg} alt="ChatBotCardImg" />
          </div>
          <div className={styles.text}>
            <h1 className={styles.cardTitle}>Conversational ChatBot</h1>
            <p>
              Engage in natural and meaningful conversations with GQG-ChatBot, thanks to its conversational interface and intelligent dialogue management capabilities. Our chatbot is designed to understand context, maintain continuity, and respond appropriately to user inputs, creating a conversational experience that feels human-like and intuitive. Whether you're asking simple questions or engaging in more complex discussions, GQG-ChatBot adapts to your conversational style, providing relevant and helpful responses every step of the way.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={ResponsiveImg} alt="ResponsiveImg" />
          </div>
          <div className={styles.text}>
            <h1 className={styles.cardTitle}>Responsive & Clean UI</h1>
            <p>
              GQG-ChatBot boasts a responsive and clean user interface that adapts seamlessly to various screen sizes and devices. Whether you're accessing the chatbot from a desktop computer, tablet, or smartphone, you can expect a visually appealing and intuitive interface that enhances your user experience. Our minimalist design ensures that the focus remains on the conversation, making it easy to navigate and interact with the chatbot's features effortlessly.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.explore}>
        <Link to="/chatbox">
          <button className={styles.btn}>Explore Now !</button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
