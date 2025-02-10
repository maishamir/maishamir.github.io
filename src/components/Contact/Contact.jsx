import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.scss";
import ghIcon from "/Users/maishamir/Documents/mySite-react/public/icons/github_icon.svg";
import liIcon from "/Users/maishamir/Documents/mySite-react/public/icons/linkedin_icon.svg";

function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        form.current,
        "Nbg4qGlUUFfDrxmDe"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("Failed to send message", error.text);
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__content">
        <div className="contact__blurb">
          <h1 className="contact__subtitle">I'm always up for a chat!</h1>
          <p className="">
            If you ever want to meet for a virtual coffee, or just want to have
            a quick chat, you can reach out to me on any of the socials below or
            send me a quick message here!
          </p>
          <div className="contact__socials">
            <a href="https://github.com/maishamir" target="_blank">
              <i className="fa-brands fa-github fa-3x contact__icon"></i>
            </a>
            <a href="https://www.linkedin.com/in/maishamir/" target="_blank">
              <i className="fa-brands fa-linkedin fa-3x contact__icon"></i>
            </a>
          </div>
        </div>
        <div className="contact__form">
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="contact__form-fields"
          >
            <input type="text" name="from_name" id="name" placeholder="name" />
            <input
              type="email"
              name="user_email"
              id="email"
              placeholder="email"
            />
            <textarea
              rows="5"
              name="message"
              id="message"
              placeholder="message"
            ></textarea>
            <button
              type="submit"
              className="contact__submit"
              disabled={isSending}
            >
              {isSending ? "sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
