import { useState } from 'react'
import './Collaborate.css'

function Collaborate() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    creatorType: '',
    projectIdea: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', creatorType: '', projectIdea: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="collaborate">
      <div className="collaborate-container">
        <h1>Start Collaborating Today</h1>
        <p className="subtitle">
          Join our community of creators and start your next collaborative project
        </p>

        <div className="collab-content">
          <section className="collab-info">
            <h2>How It Works</h2>
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Create Your Profile</h3>
                  <p>Tell us about yourself and what you create</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Find Collaborators</h3>
                  <p>Browse creators or get matched based on your interests</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Create Together</h3>
                  <p>Use our collaboration tools to bring your ideas to life</p>
                </div>
              </div>
            </div>
          </section>

          <section className="collab-form-section">
            <h2>Get Early Access</h2>
            <form onSubmit={handleSubmit} className="collab-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="creatorType">I am a...</label>
                <select
                  id="creatorType"
                  name="creatorType"
                  value={formData.creatorType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select your creator type</option>
                  <option value="musician">Musician</option>
                  <option value="artist">Visual Artist</option>
                  <option value="writer">Writer</option>
                  <option value="videographer">Videographer</option>
                  <option value="developer">Developer</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="projectIdea">Project Idea (Optional)</label>
                <textarea
                  id="projectIdea"
                  name="projectIdea"
                  value={formData.projectIdea}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about what you'd like to create..."
                />
              </div>
              <button type="submit" className="submit-button">
                Join the Waitlist
              </button>
              {submitted && (
                <div className="success-message">
                  Thank you for your interest! We will be in touch soon.
                </div>
              )}
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Collaborate
