import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
//import { FaInstagram } from "react-icons/fa";
function Footer() {
  const footerStyle = {
    backgroundColor: "#607274", // Setting the background color to #343a40
    color: "#ffffff", // Setting the text color to white for better contrast
    padding: "20px 0", // Adding some padding for space
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <Row>
          <Col md={12}>
            <div className="texts-container d-flex justify-content-between">
              <div
                className="contact"
                style={{ direction: "rtl", textAlign: "right" }}
              >
                <h3 className="text-white">تماس با ما</h3>
                <p>
                  ایمیل:{" "}
                  <a
                    href="mailto:mkazemi.contact@gmail.com"
                    className="text-white"
                  >
                    mkazemi.contact@gmail.com
                  </a>
                </p>
                <p>تلفن: 123-456-7890</p>
                {/* You can add more contact information */}
              </div>
              <div>
                <h3 className="text-white">
                  ما را در شبکه های اجتماعی دنبال کنید
                </h3>
                <div
                  className="text-center"
                  style={{ fontFamily: "B-Nazanin" }}
                >
                  <div>
                      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="mx-2 h1 text-white" />
                      </a>
                      <a href="https://t.me/abi_daily" target="_blank" rel="noopener noreferrer">
                        <FaTelegram className="mx-2 h1 text-white" />
                      </a>
                      <a href="mailto:realftmrealabdni@gmail.com">
                        <SiGmail className="mx-2 h1 text-white" />
                      </a>
                      <a href="https://github.com/Real0ftm0" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="mx-2 h1 text-white" />
                      </a>
                    </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}></Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
