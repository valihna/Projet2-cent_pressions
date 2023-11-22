import emailjs from "@emailjs/browser";
import "./Contact.css";
import { useState } from "react";

function Contact() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFistName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = (event) => {
    event.preventDefault();

    const {
      VITE_EMAILJS_SERVICE_ID,
      VITE_EMAILJS_TEMPLATE_ID,
      VITE_EMAILJS_PUBLIC_KEY,
    } = import.meta.env;
    const emailServiceId = VITE_EMAILJS_SERVICE_ID;
    const emailTemplateId = VITE_EMAILJS_TEMPLATE_ID;
    const emailPublicKey = VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .send(
        emailServiceId,
        emailTemplateId,
        {
          lastName,
          firstName,
          subject,
          email,
          message,
        },
        emailPublicKey
      )
      .then((response) => {
        console.info("Your message was taken into account!", response);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className="contact-container">
      <h4>Contact form </h4>
      <form onSubmit={(event) => sendMail(event)}>
        <label>
          Lastname
          <input
            type="text"
            name="lastname"
            placeholder="Lastname"
            required
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>
        <label>
          Firstname
          <input
            type="text"
            name="firstname"
            placeholder="Firstname"
            required
            value={firstName}
            onChange={(event) => setFistName(event.target.value)}
          />
        </label>

        <label>
          Subject
          <input
            type="text"
            name="subject"
            placeholder="The subject of your message"
            required
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="contact-input"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <label>
          Message
          <textarea
            className="contact-textarea"
            name="subject"
            placeholder="Your message"
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </label>
        <div className="contact-btn">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
