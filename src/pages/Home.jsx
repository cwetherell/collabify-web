import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
  const navigate = useNavigate()
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Collabify</h1>
          <p className="tagline">Where Creators Come Together</p>
          <p className="description">
            Connect, collaborate, and create amazing content with fellow creators.
            Whether you're a musician, artist, writer, or video creator, Collabify
            provides the perfect platform for your next collaboration.
          </p>
          <button className="cta-button" onClick={() => navigate('/collaborate')}>Get Started</button>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Collabify?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Easy Collaboration</h3>
            <p>Find and connect with creators who share your vision and passion.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Creative Spaces</h3>
            <p>Dedicated workspaces for your projects with all the tools you need.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Launch Together</h3>
            <p>Share your collaborative work with the world and grow your audience.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
