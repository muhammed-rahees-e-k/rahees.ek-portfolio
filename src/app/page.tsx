'use client';

import { useState } from 'react';
import Link from 'next/link';

import { projects } from '@/data/projects';

export default function HomePage() {
  const [isNavActive, setIsNavActive] = useState(false);

  // Contact form state
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Projects filter state
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage(null);

    try {
      const res = await fetch('https://staging-api.raihsuite.com/v1/crm/enquiries/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          message: formData.message,
          tenant: 39
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus('error');
        setErrorMessage(data.detail || data.error || 'Failed to submit the form.');
      } else {
        setStatus('success');
        setFormData({ name: '', email: '', mobile: '', message: '' });
      }
    } catch (err: unknown) {
      setStatus('error');
      const message = err instanceof Error ? err.message : 'Network error';
      setErrorMessage(message);
    }
  };

  return (
    <div className="portfolio-wrapper">
      {/* Header */}
      <header className="header">
        <h1 className="logo">RAHEES</h1>

        {/* Navbar Toggle (visible only on mobile) */}
        <button
          className={`nav-toggle ${isNavActive ? 'active' : ''}`}
          id="nav-toggle"
          onClick={() => setIsNavActive(!isNavActive)}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`nav ${isNavActive ? 'show' : ''}`} id="navbar">
          <a href="/" onClick={() => setIsNavActive(false)}>Home</a>
          <a href="#about" onClick={() => setIsNavActive(false)}>About</a>
          <a href="#services" onClick={() => setIsNavActive(false)}>Services</a>
          <a href="#skills" onClick={() => setIsNavActive(false)}>Skills</a>
          <a href="#projects" onClick={() => setIsNavActive(false)}>Projects</a>
          <a href="#contact" onClick={() => setIsNavActive(false)}>Contact Me</a>
        </nav>

        <button className="btn-cv">Download CV</button>
      </header>

      {/* Main Section */}
      <main className="portfolio-section">
        {/* Portfolio Header */}
        <header className="portfolio-header">
          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
            <a href="https://wa.me/917510538468" target="_blank" rel="noopener noreferrer"><i className="bi bi-whatsapp"></i></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
          </div>
        </header>

        <div className="portfolio-content">
          <h1 className="portfolio-title">RAHEES EK</h1>
          <h3 className="portfolio-sub-title">Software Engineer</h3>

          <div className="profile-img-wrap">
            <img src="/images/rahees.png" alt="Rahees" className="profile-photo" />
          </div>

          <div className="tag year">{"COME ON LET'S TALK"}</div>

          <svg className="dotted-line" viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 150 C150 50, 300 250, 590 100"
              stroke="#7a8b6f"
              strokeWidth="2"
              fill="transparent"
              strokeDasharray="6,8"
            />
          </svg>
        </div>

        <footer className="portfolio-footer">
          <p>+91 7510538468</p>
          <p>raheesckd123@gmail.com</p>
          <p>www.rahees.com</p>
        </footer>
      </main>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          {/* Left Text Area */}
          <div className="about-text">
            <h2 className="about-title">
              ABOUT ME
              <span className="arrow-icon"><i className="bi bi-arrow-up-right"></i></span>
            </h2>
            <h3 className="about-subtitle">Design With Purpose, Creativity With Passion.</h3>
            <p>
              I’m <strong>Muhammed Rahees EK</strong>, a passionate <strong>Software Engineer</strong> and{' '}
              <strong>UI/UX Designer</strong>. I specialize in building responsive, creative, and efficient
              web and mobile applications.
            </p>
            <p>
              I strive to create designs that not only look stunning but also communicate effectively and
              deliver seamless user experiences.
            </p>
          </div>

          {/* Right Image */}
          <div className="about-image">
            <img src="/images/about-image-portfolio.png" alt="About Rahees" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="services-header">
          <h2 className="section-title">WHAT I OFFER</h2>
        </div>

        <div className="services-cards">
          <div className="service-card">
            <div className="arrow"></div>
            <p>I build responsive and modern web applications using HTML, CSS, JavaScript, and frameworks like React.</p>
            <h4>Web Development</h4>
          </div>

          <div className="service-card">
            <div className="arrow"></div>
            <p>Creating beautiful, high-performance mobile apps with Flutter for both Android and iOS platforms.</p>
            <h4>App Development</h4>
          </div>

          <div className="service-card">
            <div className="arrow"></div>
            <p>Designing clean and user-friendly interfaces to create smooth and engaging digital experiences.</p>
            <h4>UI / UX Design</h4>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        {/* Dotted Background Lines */}
        <div className="dotted-line dotted-line-1"></div>
        <div className="dotted-line dotted-line-2"></div>

        <div className="skills-content">
          <h1 className="skills-title">SKILLS</h1>
          <div className="skills-header">
            <div className="skills-label">
              Skills & Expertise <i className="bi bi-arrow-up-right"></i>
            </div>
          </div>

          <div className="skills-grid">
            <div className="skill-item"><i className="bi bi-filetype-html"></i> <span>HTML</span></div>
            <div className="skill-item"><i className="bi bi-filetype-css"></i> <span>CSS</span></div>
            <div className="skill-item"><i className="bi bi-filetype-js"></i> <span>JavaScript</span></div>
            <div className="skill-item"><i className="bi bi-filetype-py"></i> <span>Python</span></div>
            <div className="skill-item"><i className="bi bi-database"></i> <span>MySQL</span></div>
            <div className="skill-item"><i className="bi bi-palette"></i> <span>Figma</span></div>
            <div className="skill-item"><i className="bi bi-brush"></i> <span>Photoshop</span></div>
            <div className="skill-item"><i className="bi bi-brush-fill"></i> <span>Canva</span></div>
            <div className="skill-item"><i className="bi bi-react"></i> <span>React</span></div>
            <div className="skill-item"><i className="bi bi-bootstrap"></i> <span>Bootstrap</span></div>
            <div className="skill-item"><i className="bi bi-git"></i> <span>Git</span></div>
          </div>
        </div>
      </section>

      {/* Career Journey Section */}
      <section className="career-journey">
        <h2 className="section-title">CAREER JOURNEY</h2>

        <div className="timeline">
          <div className="timeline-item">
            <div className="circle">01</div>
            <div className="content">
              <h3>APJ Abdul Kalam Technological University</h3>
              <h4>B.Tech</h4>
              <p>Built a strong foundation in engineering principles and technology, developing problem-solving and
                analytical skills.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="circle">02</div>
            <div className="content">
              <h3>Inmakes Infotech Pvt. Ltd</h3>
              <h4>Python Full Stack Development</h4>
              <p>Gained hands-on experience in Python, Django, and frontend technologies, mastering full-stack web
                development.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="circle">03</div>
            <div className="content">
              <h3>Liscom Solutions & Services</h3>
              <h4>Technical Support Executive</h4>
              <p>Provided technical assistance and troubleshooting support, enhancing communication and problem-resolution
                skills.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="circle">04</div>
            <div className="content">
              <h3>Raihsoft Technologies</h3>
              <h4>Software Developer</h4>
              <p>Contributed to building and maintaining web applications, focusing on clean code, API integration, and
                user experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="projects-header">
          <h2 className="section-title">MY PROJECTS</h2>
        </div>

        <div className="project-filters">
          {['All', 'Web Apps', 'Mobile Apps', 'UI/UX Design'].map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {projects
            .filter((p) => selectedCategory === 'All' || p.category === selectedCategory)
            .map((project) => (
              <div key={project.slug} className="project-card">
                <div className="project-img">
                  <img src={project.image} alt={project.name} />
                </div>
                <div className="project-content">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tech-used">
                    {project.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <Link href={`/projects/${project.slug}`} className="source-link">
                    View Details <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        {/* Animated Dotted Lines */}
        <div className="dotted-line dotted-line-1"></div>
        <div className="dotted-line dotted-line-2"></div>
        <div className="green-dot dot-1"></div>
        <div className="green-dot dot-2"></div>

        <div className="contact-content">
          <div className="contact-year">2025</div>
          <h1 className="contact-title">{"LET'S CONNECT"}</h1>
          <div className="contact-badge">
            <i className="bi bi-arrow-up-right"></i> For Your Attention
          </div>

          <div className="contact-info">
            <div className="info-item">
              <h4>Phone</h4>
              <p>+91 7510538468</p>
            </div>
            <div className="info-item">
              <h4>Mail</h4>
              <p>raheesckd123@gmail.com</p>
            </div>
            <div className="info-item">
              <h4>Website</h4>
              <p>www.rahees.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Your Mobile Number"
              value={formData.mobile}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            <button type="submit" className="btn-submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p style={{ color: '#7a8b6f', fontWeight: 600, marginTop: '10px', fontSize: '0.95rem' }}>
                Your message has been sent successfully!
              </p>
            )}
            {status === 'error' && (
              <p style={{ color: '#d9534f', fontWeight: 600, marginTop: '10px', fontSize: '0.95rem' }}>
                {errorMessage || 'Failed to send your message. Please try again.'}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}