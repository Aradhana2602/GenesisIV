import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import "./Footer.css";

export default function Footer() {
  return (
    <div id="contactus" className="footer-container">
      <div className="footer-spacing"></div>
      <div className="footer-presented">PRESENTED BY</div>

      {/* GDXR with separators */}
      <div className="footer-gdxr-container">
        <div className="footer-separator"></div>
        <div className="footer-title">GDXR</div>
        <div className="footer-separator"></div>
      </div>

      <div className="footer-section">
        {/* Venue Section */}
        <div className="footer-venue">
          <p className="footer-underline">Venue</p>
          <motion.div
            className="footer-clickable"
            whileTap={{ color: "red", scale: 1.1 }}
            whileHover={{ scale: 1.1, color: "red" }}
            onClick={() => window.open("https://maps.app.goo.gl/AcwusnMYcAe2QvSp7", "_blank")}
          >
            <p>Army Institute of Technology</p>
            <p>Pune, 411015</p>
          </motion.div>
        </div>

        {/* Follow Us Section */}
        <div className="footer-follow-us">
          <p className="footer-underline">Follow Us</p>
          <div className="footer-icons">
            <motion.div whileTap={{ color: "red", scale: 1.1 }} whileHover={{ scale: 1.1, color: "red" }}>
              <FontAwesomeIcon icon={faFacebook} onClick={() => window.open("https://www.facebook.com/GDXR.AIT", "_blank")} />
            </motion.div>
            <motion.div whileTap={{ color: "red", scale: 1.1 }} whileHover={{ scale: 1.1, color: "red" }}>
              <FontAwesomeIcon icon={faInstagram} onClick={() => window.open("https://www.instagram.com/gdxr_ait/", "_blank")} />
            </motion.div>
            <motion.div whileTap={{ color: "red", scale: 1.1 }} whileHover={{ scale: 1.1, color: "red" }}>
              <FontAwesomeIcon icon={faLinkedin} onClick={() => window.open("https://www.linkedin.com/company/ait-gdxr-club/", "_blank")} />
            </motion.div>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="footer-contact">
          <p className="footer-underline">Contact Us</p>
          <motion.div
            className="footer-clickable"
            whileTap={{ color: "red", scale: 1.1 }}
            whileHover={{ scale: 1.1, color: "red" }}
            onClick={() => navigator.clipboard.writeText("9109223979")}
          >
            Mayur Rishi
          </motion.div>
          <motion.div
            className="footer-clickable"
            whileTap={{ color: "red", scale: 1.1 }}
            whileHover={{ scale: 1.1, color: "red" }}
            onClick={() => navigator.clipboard.writeText("9896701076")}
          >
            Ashutosh Senapati
          </motion.div>
        </div>
      </div>

      <div className="footer-spacing"></div>
    </div>
  );
}
