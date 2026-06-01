'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

import { projects } from '@/data/projects';

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    return (
      <div className="error-wrapper">
        <div className="error-container">
          <h1 className="error-title">PROJECT NOT FOUND</h1>
          <p className="error-text">The project you are looking for does not exist or has been moved.</p>
          <Link href="/" className="btn-cv" style={{ textDecoration: 'none', display: 'inline-block' }}>
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const prevProject = projects[projectIndex - 1] || projects[projects.length - 1];
  const nextProject = projects[projectIndex + 1] || projects[0];

  return (
    <div className="portfolio-wrapper project-detail-wrapper">
      {/* Header */}
      <header className="header">
        <Link href="/" className="logo" style={{ textDecoration: 'none' }}>RAHEES</Link>
        <Link href="/#projects" className="btn-cv" style={{ textDecoration: 'none' }}>
          <i className="bi bi-arrow-left" style={{ marginRight: '8px' }}></i> Back to Projects
        </Link>
      </header>

      {/* Hero Banner */}
      <div 
        className="detail-hero" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.75)), url("${project.image}")` 
        }}
      >
        <div className="detail-hero-content">
          <span className="detail-category">{project.category}</span>
          <h1 className="detail-title">{project.name}</h1>
          <p className="detail-tagline">{project.description}</p>
        </div>
      </div>

      {/* Content Container */}
      <main className="detail-container">
        {/* Left Side: Main Information */}
        <div className="detail-main">
          <div className="detail-image-card">
            <img src={project.image} alt={project.name} />
          </div>

          <div className="detail-section">
            <h2 className="detail-section-title">About the Project</h2>
            <p className="detail-description-text">{project.fullDescription}</p>
          </div>

          {project.features && project.features.length > 0 && (
            <div className="detail-section">
              <h2 className="detail-section-title">Key Features</h2>
              <ul className="features-list">
                {project.features.map((feature, idx) => (
                  <li key={idx}>
                    <i className="bi bi-check2-circle"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Side: Sidebar Widget */}
        <aside className="detail-sidebar">
          <div className="detail-sidebar-card">
            <h3 className="sidebar-card-title">PROJECT INFO</h3>
            
            <div className="info-grid">
              <div className="info-row">
                <span className="info-label">Role</span>
                <span className="info-value">{project.role}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Year</span>
                <span className="info-value">{project.year}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Category</span>
                <span className="info-value">{project.category}</span>
              </div>
            </div>

            <div className="tech-section">
              <h4 className="tech-section-title">Tech Stack</h4>
              <div className="tech-pills">
                {project.tech.map((t) => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
            </div>

            <div className="cta-section">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  className="btn-cta btn-live" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Live Preview <i className="bi bi-box-arrow-up-right"></i>
                </a>
              )}
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  className="btn-cta btn-code" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Source Code <i className="bi bi-github"></i>
                </a>
              )}
            </div>
          </div>
        </aside>
      </main>

      {/* Sequential Navigation */}
      <nav className="detail-navigation">
        <Link href={`/projects/${prevProject.slug}`} className="nav-project-link prev">
          <span className="nav-dir">
            <i className="bi bi-arrow-left"></i> Previous Project
          </span>
          <span className="nav-name">{prevProject.name}</span>
        </Link>
        
        <Link href={`/projects/${nextProject.slug}`} className="nav-project-link next">
          <span className="nav-dir">
            Next Project <i className="bi bi-arrow-right"></i>
          </span>
          <span className="nav-name">{nextProject.name}</span>
        </Link>
      </nav>
    </div>
  );
}
