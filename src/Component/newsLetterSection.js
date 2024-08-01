import React from 'react';

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send email to server)
    // You can add your logic here
  };

  return (
    <section className="newsletter">
      <h3>Subscribe us for latest updates</h3>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="email">Email:</label> */}
        <input
          className="box"
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required // Add validation as needed
        />
        <button type="submit" className="btn">
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
