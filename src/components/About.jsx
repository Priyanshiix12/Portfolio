import { useEffect, useRef } from 'react'
import './About.css'

const About = () => {
  const aboutRef = useRef(null)

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

    if (aboutRef.current) {
      const elements = aboutRef.current.querySelectorAll('.animate-on-scroll')
      elements.forEach((el) => observer.observe(el))
    }

    return () => {
      if (aboutRef.current) {
        const elements = aboutRef.current.querySelectorAll('.animate-on-scroll')
        elements.forEach((el) => observer.unobserve(el))
      }
    }
  }, [])

  return (
    <section id="about" className="section about" ref={aboutRef}>
      <div className="container">
        <h2 className="section-title animate-on-scroll">About Me</h2>
        <div className="about-content">
          <div className="about-text animate-on-scroll">
            <p>
              I'm a <strong>Freshman Computer Science major</strong> at{' '}
              <strong>KIET Group of Institutions</strong>, embarking on an exciting journey
              into the world of technology and software development.
            </p>
            <p>
              My passion lies in <strong>problem-solving</strong> and mastering{' '}
              <strong>core Computer Science fundamentals</strong>. I believe that a strong
              foundation in data structures, algorithms, and software engineering principles
              is essential for building impactful solutions.
            </p>
            <p>
              Currently, I'm focused on honing my skills in <strong>Java</strong>,{' '}
              <strong>Python</strong>, and <strong>C</strong>, while also exploring web
              technologies like <strong>HTML</strong>, <strong>CSS</strong>, and{' '}
              <strong>JavaScript</strong>. My goal is to contribute meaningfully to{' '}
              <strong>open source projects</strong> and collaborate with the developer
              community.
            </p>
            <p>
              I'm always eager to learn, grow, and take on new challenges. Whether it's
              solving complex algorithmic problems or building real-world applications, I
              approach every project with enthusiasm and dedication.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

