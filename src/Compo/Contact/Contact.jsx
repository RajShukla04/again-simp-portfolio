import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div id="Contact" className="contact">
       <div className="space"></div>
      <h1>Feel Free To Contact</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7258.323679672822!2d81.28704358476847!3d24.549068834682306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39845a2d984df80d%3A0xfdf8eaa5990193a6!2sCivil%20Lines%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1676908385772!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        className="map"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="form">
        <div className="contact-form">
          <form action="https://formspree.io/f/mgebkyvj" method="POST">
            <input
              type="text"
              name="name"
              placeholder="Write Your Name To Send Raj?"
              autoCapitalize="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              autoCapitalize="off"
              required
            />
            <textarea
              name="message"
              placeholder=" Enter Your Text Here!"
              id=""
              cols="30"
              rows="6"
              autoComplete="off"
              required
            ></textarea>
            <input type="submit" value="Send" className="inp"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
