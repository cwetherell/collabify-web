import './About.css'

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <h1>About Collabify</h1>
        <div className="about-content">
          <section className="mission">
            <h2>Our Mission</h2>
            <p>
              Collabify is dedicated to breaking down barriers between creators and 
              fostering meaningful collaborations. We believe that the best creative 
              work happens when talented individuals come together with a shared vision.
            </p>
          </section>

          <section className="story">
            <h2>Our Story</h2>
            <p>
              Founded in 2025, Collabify emerged from the need for a dedicated platform 
              where creators could easily find collaborators, manage projects, and bring 
              their creative visions to life. We've built a community where artists, 
              musicians, writers, developers, and creators of all types can connect 
              and create together.
            </p>
          </section>

          <section className="values">
            <h2>What We Believe</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>🌟 Quality Over Quantity</h3>
                <p>We focus on meaningful connections that lead to great collaborations.</p>
              </div>
              <div className="value-item">
                <h3>🎯 Creator-First</h3>
                <p>Every feature is designed with the creator's needs in mind.</p>
              </div>
              <div className="value-item">
                <h3>🌍 Global Community</h3>
                <p>Connect with creators from around the world, anytime, anywhere.</p>
              </div>
              <div className="value-item">
                <h3>💡 Innovation</h3>
                <p>We continuously improve to provide the best collaboration experience.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About
