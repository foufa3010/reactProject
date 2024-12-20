import React from "react";
import "../assets/style/AboutUs.css";

function AboutUs() {
    return (
        <div>
          {/* Main About Us Container */}
          <div className="about-us-container">
            <h1 className="about-us-title">About Us</h1>
            <p className="intro-text">
              Welcome to <span className="website-name">Food Magpie & Co</span>, your go-to destination for discovering delicious recipes tailored to your tastes and dietary preferences. Whether you're a seasoned chef or just getting started in the kitchen, our platform is designed to inspire your culinary journey.
            </p>
            <section className="mission-section">
              <h2>What We Offer:</h2>
              <ul className="offerings-list">
                <li>Recipe Search: Easily find recipes based on ingredients, cuisine, or dietary restrictions like vegetarian, vegan, gluten-free, and more.</li>
                <li>Personalized Recommendations: With a simple sign-up, we offer tailored recipe suggestions based on your preferences and past searches.</li>
                <li>Chatbot Assistance: Our AI-powered chatbot is here to help you find the perfect recipe, answer questions, and offer cooking tips.</li>
              </ul>
            </section>
            <section className="values-section">
              <h2>Our Values:</h2>
              <ul className="values-list">
                <li><strong>Diversity:</strong> We offer a variety of recipes from around the world, embracing all cultures and flavors.</li>
                <li><strong>Sustainability:</strong> We encourage eco-friendly cooking practices by featuring vegetarian, plant-based, and low-waste recipes.</li>
                <li><strong>Innovation:</strong> We're always evolving our platform to introduce new features that enhance your cooking experience.</li>
              </ul>
            </section>
          </div>
    
          {/* Separate Testimonials Section */}
          <div className="testimonials-container">
            <section className="testimonials-section">
              <h2>What Our Users Say</h2>
              <blockquote className="testimonial-quote">
                "Food Magpie & Co has completely transformed the way I cook. I’ve discovered so many new recipes!" – Jane D.
              </blockquote>
              <blockquote className="testimonial-quote">
                "The AI assistant is a game-changer! I love how it helps me find recipes quickly and even suggests alternatives when I’m missing ingredients." – Mark R.
              </blockquote>
              <blockquote className="testimonial-quote">
                "I can't imagine cooking without this platform now. It’s so easy to find great recipes for every occasion!" – Sarah L.
              </blockquote>
            </section>
          </div>
    
          {/* Separate How It Works Section */}
          <div className="how-it-works-container">
            <section className="how-it-works-section">
              <h2>How It Works</h2>
              <ol>
                <li>Sign up and set your preferences.</li>
                <li>Search for recipes or chat with our AI assistant.</li>
                <li>Save your favorites and share them with friends!</li>
              </ol>
            </section>
          </div>
        </div>
      );
}

export default AboutUs;
