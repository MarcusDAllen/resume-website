import React from 'react';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      {/* Section 1: Hero Section */}
      <section className="hero">
        <h1>Hi, I'm Marcus Allen</h1>
        <h2>
          A Passionate Computer Science Student and Competitive Pool Player
        </h2>
        <p>
          I’m currently pursuing my Bachelor’s degree in Computer Science,
          developing innovative software solutions, and seeking opportunities
          to grow as a software developer.
        </p>
        <div className="hero-buttons">
          <a href="/projects" className="button">View My Projects</a>
          <a href="/contact" className="button">Contact Me</a>
        </div>
      </section>

      {/* Section 2: About Me */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I’m a Computer Science student at Dakota State University with a
          strong foundation in Python and the C programming language. I’m
          passionate about creating new software solutions that people can
          interact with and use in meaningful ways.
        </p>
        <a href="/about" className="about-link">Learn More About Me</a>
      </section>

      {/* Section 3: Skills */}
      <section className="skills">
        <h2>Skills & Technologies</h2>
        <div className="skills-container">
          <div className="skill-box">
            <h3>Languages</h3>
            <p>Python, C, C++, C#, HTML/CSS</p>
          </div>
          <div className="skill-box">
            <h3>Frameworks & Tools</h3>
            <p>React, Node.js, GitHub, VS Code, Nano</p>
          </div>
          <div className="skill-box">
            <h3>Soft Skills</h3>
            <p>Problem-solving, Teamwork, Adaptability, Communication</p>
          </div>
        </div>
      </section>

      {/* Section 4: Projects */}
      <section className="projects">
        <h2>Projects</h2>
        <p>
          Stay tuned! I’m currently working on new projects to showcase here.
          In the meantime, feel free to <a href="/contact">contact me</a> or
          download my resume below.
        </p>
      </section>

      {/* Section 5: Resume CTA */}
      <section className="resume">
        <h2>Download My Resume</h2>
        <p>
          Interested in my work? Download my resume to learn more about my
          experience and skills.
        </p>
        <a href={`${process.env.PUBLIC_URL}/Marcus_Allen_Resume.pdf`} target="_blank" rel="noopener noreferrer" download className="resume-button">
          Download My Resume
        </a>

      </section>
      
      {/* Section 6: Footer */}
      <footer className="footer">
        <p>© 2024 Marcus Allen. All rights reserved.</p>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default Home;

