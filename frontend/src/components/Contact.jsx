import "./Contact.css";
import { useState } from "react";

function Contact() {
  const [lastName, setLastName] = useState("");
  const [fistName, setFistName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = (event) => {
    event.preventDefault();
  };

  return (
    <div className="contactContainer">
      <h4>Contact form </h4>
      <form onSubmit={(event) => sendMail(event)}>
        <label>
          Lastname
          <input
            type="text"
            name="lastname"
            placeholder="Last name"
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
            placeholder="First name"
            required
            value={fistName}
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
            className="contactInput"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <label>
          Message
          <textarea
            className="contactTextarea"
            name="subject"
            placeholder="Your message"
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </label>
        <div className="contactBtn">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
