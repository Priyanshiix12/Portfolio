import { useEffect, useRef } from 'react'
import './Projects.css'

const Projects = () => {
  const projectsRef = useRef(null)

  const projects = [
    {
      title: 'DSA Practice',
      description: 'Consistent practice of algorithmic problems and data structures using Java. Building a strong foundation in problem-solving and algorithmic thinking.',
      tech: ['Java', 'Data Structures', 'Algorithms'],
      link: '#'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing my projects and skills. Built with React, featuring smooth animations and a clean design.',
      tech: ['React', 'HTML', 'CSS', 'JavaScript'],
      link: '#'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible')
            }, index * 150)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (projectsRef.current) {
      const cards = projectsRef.current.querySelectorAll('.project-card')
      cards.forEach((card) => observer.observe(card))
    }

    return () => {
      if (projectsRef.current) {
        const cards = projectsRef.current.querySelectorAll('.project-card')
        cards.forEach((card) => observer.unobserve(card))
      }
    }
  }, [])

  return (
    <section id="projects" className="section projects" ref={projectsRef}>
      <div className="container">
        <h2 className="section-title animate-on-scroll">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card animate-on-scroll"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-links">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`View ${project.title}`}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

