import "./Contact.css";

function Contact() {
  return (
    <div className="contactContainer">
      <h4>Contact form </h4>
      <form>
        <label>
          Lastname
          <input type="text" name="lastname" placeholder="Last name" required />
        </label>
        <label>
          Firstname
          <input
            type="text"
            name="firstname"
            placeholder="First name"
            required
          />
        </label>
        <label>
          Subject
          <input
            type="text"
            name="subject"
            placeholder="The subject of your message"
            required
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
          />
        </label>

        <label>
          Message
          <textarea
            className="contactTextarea"
            name="subject"
            placeholder="Your message"
            required
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
