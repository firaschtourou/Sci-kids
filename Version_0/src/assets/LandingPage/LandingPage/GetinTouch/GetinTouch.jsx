import * as React from "react";
import './getintouch.css'
export default function ContactForm() {
  return (
    <form className="contact-form">
      <div className="form-header">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1886e2495ce61ee32bc5a5761c58fc0e52c7fafaa03231a91b041e701342df0f?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb"
          alt=""
          className="form-icon"
        />
        <div className="form-titles">
          <h3 className="form-subtitle">GET IN TOUCH</h3>
          <h2 className="form-title">Needs Help? Let's Get in Touch</h2>
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name" className="visually-hidden">Your name</label>
          <input 
            type="text"
            id="name"
            className="form-input"
            placeholder="Your name"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email" className="visually-hidden">Your email</label>
          <input
            type="email" 
            id="email"
            className="form-input2"
            placeholder="Your email"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="subject" className="visually-hidden">Subject</label>
        <input
          type="text"
          id="subject" 
          className="form-input1"
          placeholder="Subject"
        />
      </div>

      <div className="form-group">
        <label htmlFor="message" className="visually-hidden">Message</label>
        <textarea
          id="message"
          className="form-textarea"
          placeholder="Message"
        />
      </div>

      <div className="form-footer">
        <button type="submit" className="submit-btn">Submit</button>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/93a52a7bed6e20d2280160c79148802664778935b14b7086c0bf852c6b6d97c3?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb"
          alt=""
          className="submit-icon"
        />
      </div>
    </form>
  );
}