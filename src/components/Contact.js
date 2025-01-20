import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Contact Me</h1>
      <p className="text-center lead">
        Have questions or want to work together? Fill out the form below to get in touch!
      </p>
      
      <form className="mt-4 mx-auto" style={{ maxWidth: '600px' }}>
        {/* Name Field */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Your Name"
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Your Email"
            required
          />
        </div>

        {/* Subject Field */}
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="form-control"
            placeholder="Subject"
          />
        </div>

        {/* Message Field */}
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            className="form-control"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
