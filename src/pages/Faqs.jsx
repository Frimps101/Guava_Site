import React, { useState } from "react";
import Footer from "../components/Footer";
import "./Faqs.css";
import Navbar from "../components/Navbar";
import { data } from "../data";

const Faqs = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };
  return (
    <div className="faqs_header">
      <Navbar />
      {/* <Header title="FAQs" /> */}
      <div className="faq-section section">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {data.map((item, index) => (
            <div
              className={`faq-item ${openQuestion === index ? "open" : ""}`}
              key={index}
              onClick={() => toggleQuestion(index)}
            >
              <h3>
                {item.question}{" "}
                <span
                  className={`arrow ${openQuestion === index ? "up" : "down"}`}
                >
                  &#9660;
                </span>
              </h3>
              <div
                className={`faq-answer ${
                  openQuestion === index ? "visible" : ""
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Faqs;
