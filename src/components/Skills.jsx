import { useEffect, useRef } from 'react'
import './Skills.css'

const Skills = () => {
  const skillsRef = useRef(null)

  const skills = [
    { name: 'Java', category: 'Programming' },
    { name: 'Python', category: 'Programming' },
    { name: 'C', category: 'Programming' },
    { name: 'HTML', category: 'Web' },
    { name: 'CSS', category: 'Web' },
    { name: 'JavaScript', category: 'Web' },
    { name: 'Data Structures', category: 'CS Fundamentals' },
    { name: 'Problem Solving', category: 'CS Fundamentals' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible')
            }, index * 100)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (skillsRef.current) {
      const cards = skillsRef.current.querySelectorAll('.skill-card')
      cards.forEach((card) => observer.observe(card))
    }

    return () => {
      if (skillsRef.current) {
        const cards = skillsRef.current.querySelectorAll('.skill-card')
        cards.forEach((card) => observer.unobserve(card))
      }
    }
  }, [])

  return (
    <section id="skills" className="section skills" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title animate-on-scroll">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <span className="skill-category">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

