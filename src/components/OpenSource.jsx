import { useEffect, useRef } from 'react'
import './OpenSource.css'

const OpenSource = () => {
  const openSourceRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (openSourceRef.current) {
      const elements = openSourceRef.current.querySelectorAll('.animate-on-scroll')
      elements.forEach((el) => observer.observe(el))
    }

    return () => {
      if (openSourceRef.current) {
        const elements = openSourceRef.current.querySelectorAll('.animate-on-scroll')
        elements.forEach((el) => observer.unobserve(el))
      }
    }
  }, [])

  return (
    <section id="opensource" className="section opensource" ref={openSourceRef}>
      <div className="container">
        <h2 className="section-title animate-on-scroll">Open Source</h2>
        <div className="opensource-content">
          <div className="opensource-card animate-on-scroll">
            <div className="opensource-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="opensource-title">Contributions Coming Soon</h3>
            <p className="opensource-description">
              I'm actively preparing to contribute to open source projects. My focus areas include:
            </p>
            <ul className="opensource-list">
              <li>GitHub Contributions & Pull Requests</li>
              <li>Hacktoberfest Participation</li>
              <li>Google Summer of Code (GSoC) Readiness</li>
              <li>Building meaningful projects for the community</li>
            </ul>
            <div className="opensource-cta">
              <a
                href="https://github.com/YOUR_GITHUB_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View My GitHub
              </a>
            </div>
          </div>
          <div className="opensource-stats animate-on-scroll">
            <div className="stat-item">
              <div className="stat-number">Coming Soon</div>
              <div className="stat-label">Contributions</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Coming Soon</div>
              <div className="stat-label">Pull Requests</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Coming Soon</div>
              <div className="stat-label">Repositories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OpenSource

