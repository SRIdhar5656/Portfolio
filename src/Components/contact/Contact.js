import React from "react";
import msgGif from "../../assets/message.gif";
import "./contact.css"
// import styled from "styled-components";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { MdWifiCalling3 } from "react-icons/md";

function Contact() {
  return (
    <section className="container Contactcontainer">
      <div className="contact-title title" id="contact" data-aos="fade-right">
        Contact
      </div>
      <div className="contact-content">
        <div className="contact-details-wrapper" data-aos="fade-right">
          <p>
            Feel free to
            <span style={{ color: "rgb(115, 52, 209)"}}>
              {" "}
              get in touch
            </span>{" "}
            for projects, opportunities, or just to say hello.
          </p>
          <div className="contactbtn">
            <a
              href="https://www.linkedin.com/in/sridharss/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="contact-btn">
                <FaLinkedinIn />
              </button>
            </a>
            <a
              href="https://github.com/SRIdhar5656/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="contact-btn">
                <FaGithub />
              </button>
            </a>
            <a
              href="mailto:saisri4245@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <button className="contact-btn" style={{ marginRight: "0" }}>
                <FiMail />
              </button>
            </a>
          </div>
        </div>

        <div className="contact-img-wrapper" data-aos="fade-left">
          <img src={msgGif} alt="" className="msg-gif" />
        </div>
        
      </div>
    </section>
  );
}

// const ContactContainer = styled.div`
//   margin: 6%;
//   margin-top: -8px;
//   color: ${(props) => props.theme.text};

//   .msg-gif {
//     height: 320px;
//     width: 320px;
//     border-radius: 50%;
//     object-fit: fill;
//   }
//   .contact-content {
//     display: flex;
//     justify-content: center;
//     padding: 0 7%;
//   }
//   .contact-details-wrapper {
//     width: 50%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     text-align: center;
//     gap: 3rem;
//   }

//   @media screen and (max-width: 920px) {
//     margin-top: 6%;
//     .contact-content {
//       flex-direction: column-reverse;
//     }
//     .contact-details-wrapper {
//       width: 80%;
//       text-align: center;
//       margin: auto;
//       gap: 2rem;
//     }
//     .contact-img-wrapper {
//       width: 90%;
//       margin: auto;
//       text-align: center;
//       margin-bottom: 2rem;
//     }
//   }

//   @media screen and (max-width: 720px) {
//     .msg-gif {
//       height: 200px;
//       width: 200px;
//     }
//   }
// `;

// const ContactBtns = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   .contact-btn {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 50px;
//     width: 50px;
//     border-radius: 50%;
//     margin-right: 2rem;
//     background-color: grey;
//     color: white;
//     transition: var(--transition);
//     svg {
//       font-size: xx-large;
//     }

//     &:hover {
//       background-color: whitesmoke;
//       color: var(--clr-blue);
//       box-shadow: 0 0 18px 4px var(--clr-blue);
//     }
//   }

//   @media screen and (max-width: 680px) {
//     .contact-btn {
//       height: 40px;
//       width: 40px;
//       svg {
//         font-size: x-large;
//       }
//     }
//   }

//   @media screen and (max-width: 420px) {
//     .contact-btn {
//       height: 32px;
//       width: 32px;

//       svg {
//         font-size: large;
//       }
//     }
//   }
// `;

export default Contact;
