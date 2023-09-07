import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaWhatsapp,
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { MdSend } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import { isSafari } from "react-device-detect";
import classes from "./Contact.module.css";
import {
  DEFAULT_TIMEOUT,
  EMAIL_FAIL_MSG,
  EMAIL_SUCCESS_MSG,
  PHONE_NUMBER,
} from "../../assets/constants";

export const Contact = () => {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSafariLess750, setIsSafariLess750] = useState(false);

  const form = useRef();

  const validateForm = () => {
    if (!name || name.length < 2) {
      setStatusMessage("Name should be at least 2 characters long.");
      return false;
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatusMessage("Please enter a valid email address.");
      return false;
    }

    if (!message || message.length < 2) {
      setStatusMessage("Message should be at least 2 characters long.");
      return false;
    }

    setStatusMessage("");
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsEmailSent(false);
    setStatusMessage("");
    emailjs
      .sendForm(
        "service_gojmoo2",
        "template_d7226vm",
        form.current,
        "L64EYKuoQd2w2_xdG"
      )
      .then(
        (result) => {
          setIsEmailSent(true);
          setStatusMessage(EMAIL_SUCCESS_MSG);
          setName("");
          setEmail("");
          setMessage("");
          setTimeout(() => {
            setIsEmailSent(false);
            setStatusMessage("");
          }, DEFAULT_TIMEOUT);
        },
        (error) => {
          console.log(error.text);
          setIsEmailSent(true);
          setStatusMessage(EMAIL_FAIL_MSG);
          setTimeout(() => {
            setIsEmailSent(false);
            setStatusMessage("");
          }, DEFAULT_TIMEOUT);
        }
      );
  };

  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  useEffect(() => {
    if (isSafari && window.innerWidth <= 750) {
      setIsSafariLess750(true);
    } else {
      setIsSafariLess750(false);
    }
  }, []);

  return (
    <section
      id="contact"
      className={`${classes.contact} ${
        isSafariLess750 ? classes.safariLess750 : ""
      }`}
    >
      <div
        className={classes.contactWrapper}
        data-aos="fade-right"
        data-aos-duration="1800"
      >
        <h2 className={classes.contactHeading}>Let's get in touch</h2>
        <p className={classes.contactMsg}>
          I'm actively welcoming possibilities for employment, fresh projects,
          and exciting challenges that can broaden my horizons and elevate my
          skill set. Your intriguing offers are awaited, and I'm looking forward
          to connecting with you.
        </p>
        <div className={classes.personalData}>
          <p>Location:</p>
          <p>Calgary, AB, Canada</p>
        </div>
        <div className={classes.personalData}>
          <p>Call:</p>
          <div>
            <p>{PHONE_NUMBER}</p>
            <FaWhatsapp />
          </div>
        </div>
        <div className={classes.social}>
          <ul>
            <li>
              <a href="https://www.facebook.com/ilya.moiseenko" target="blank">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/illia-moiseienko/"
                target="blank"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/ilyakredo" target="blank">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ilyakredo/" target="blank">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={classes.formWrapper}
        data-aos="fade-up"
        data-aos-duration="1800"
      >
        <h2 className={classes.messageHeading}>Send a message</h2>
        <form ref={form} onSubmit={sendEmail}>
          <label>
            Your Name:
            <input
              type="text"
              value={name}
              onChange={({ target: { value } }) => setName(value)}
            />
          </label>
          <label>
            Your Email Address:
            <input
              name="email_from"
              id="emailFrom"
              value={email}
              type="email"
              onChange={({ target: { value } }) => setEmail(value)}
            />
          </label>
          <label>
            Your message:
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={({ target: { value } }) => setMessage(value)}
            ></textarea>
          </label>
          <div className={classes.formControls}>
            <button>
              Send
              <MdSend />
            </button>
            <div className={classes.statusMessage}>
              <p
                className={`${
                  isEmailSent ? classes.msgSuccess : classes.msgFail
                }`}
              >
                {statusMessage}
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
