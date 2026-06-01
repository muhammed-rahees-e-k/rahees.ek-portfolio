export interface Project {
  slug: string;
  name: string;
  category: string;
  tech: string[];
  description: string;
  fullDescription: string;
  image: string;
  role: string;
  year: string;
  liveUrl?: string;
  githubUrl?: string;
  features?: string[];
}

export const projects: Project[] = [
  {
    slug: 'irshadiyya-womens-college',
    name: 'Irshadiyya Womens College',
    category: 'Web Apps',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    description: 'A responsive educational portal website developed for Irshadiyya Womens College, featuring a clean layout, modern design, and optimized performance.',
    fullDescription: 'This project involved the complete design and front-end development of the official website for Irshadiyya Womens College. The goal was to provide students, faculty, and prospective applicants with a centralized portal to access academic schedules, announcements, courses offered, and college resources. Special attention was paid to mobile responsiveness and speed optimization to ensure the website is accessible on all devices, even in low-connectivity areas.',
    image: '/projects/Irshadiyya womens college.jpg',
    role: 'Frontend Developer',
    year: '2024',
    liveUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    features: [
      'Responsive navigation and adaptive mobile layouts',
      'Dedicated academic departments and courses directory',
      'Notice board and latest news & announcements feed',
      'Clean typography and modern grid structures'
    ]
  },
  {
    slug: 'teamikigai',
    name: 'Teamikigai',
    category: 'Web Apps',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    description: 'A portfolio-style website showcasing team achievements, collaborative project milestones, and professional profiles with an elegant user interface.',
    fullDescription: 'Teamikigai is a team portfolio website built to showcase a collaborative developer group\'s project highlights, core expertise, and individual contributor profiles. The design is clean and minimalist, focusing on high-contrast typography, interactive team cards, and smooth scroll animations. The layout guides potential clients through the team\'s service offerings, past success stories, and contact channels.',
    image: '/projects/Teamikigai.jpg',
    role: 'UI Designer & Developer',
    year: '2024',
    liveUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    features: [
      'Interactive team member profiles and cards',
      'Categorized project portfolio and milestone timelines',
      'Sleek custom CSS scroll animations and transitions',
      'Optimized lightweight assets for fast page loads'
    ]
  },
  {
    slug: 'santhwanam-care',
    name: 'Santhwanam care',
    category: 'Web Apps',
    tech: ['Python', 'Django', 'MySQL', 'React'],
    description: 'A palliative care services portal providing patient logs, volunteer registration, and scheduling features.',
    fullDescription: 'Santhwanam care is a full-stack platform designed to support a non-profit palliative care network. The system enables coordinators to manage patient logs securely, register new volunteers, coordinate home visits, and log medical equipment loans. Built with a React frontend for high responsiveness and a Django backend for robust security and database handling.',
    image: '/projects/Santhwanam care.jpg',
    role: 'Full Stack Developer',
    year: '2024',
    liveUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    features: [
      'Secure patient database with advanced search and filters',
      'Volunteer signup form and visitation calendar management',
      'Palliative care resources directory and public information board',
      'Admin dashboard for monitoring visits and logging equipment loans'
    ]
  },
  {
    slug: 'raihsoft',
    name: 'raihsoft',
    category: 'Web Apps',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    description: 'An official website for Raihsoft Technologies showcasing software services, client testimonials, and product offerings.',
    fullDescription: 'The official web presence of Raihsoft Technologies. This website highlights the agency\'s custom software development services, mobile app development capabilities, and enterprise solutions. The design features a premium color palette, professional grid structures, interactive client review sliders, and structured contact funnels to convert visitors into prospective leads.',
    image: '/projects/raihsoft.jpg',
    role: 'Frontend Developer',
    year: '2024',
    liveUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    features: [
      'Interactive service catalog tabs detailing technologies',
      'Dynamic customer testimonial slider component',
      'Modern portfolio gallery for software solutions',
      'Optimized, SEO-friendly HTML structures'
    ]
  },
  {
    slug: 'raihsuite',
    name: 'raihsuite',
    category: 'Web Apps',
    tech: ['Python', 'Django', 'PostgreSQL', 'Next.js'],
    description: 'A comprehensive business suite and CRM featuring lead tracking, contact forms, invoice management, and reporting dashboards.',
    fullDescription: 'Raihsuite is a business automation platform and CRM system. It helps small to medium enterprises track client inquiries, manage lead status, issue invoices, and track overall business revenue. The platform integrates contact forms from client websites directly into a centralized dashboard, helping teams follow up on inquiries faster.',
    image: '/projects/raihsuite.jpg',
    role: 'Software Engineer',
    year: '2025',
    liveUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    features: [
      'Centralized customer inquiry and ticket manager',
      'Dynamic invoicing generator with tracking and export options',
      'Pipeline manager with custom drag-and-drop status stages',
      'Role-based access control and system audit logs'
    ]
  },
  {
    slug: 'docoach',
    name: 'Docoach',
    category: 'Mobile Apps',
    tech: ['Flutter', 'Dart', 'Firebase'],
    description: 'A coaching and mentorship mobile application facilitating scheduling, video call integrations, and customized goal tracking for users.',
    fullDescription: 'Docoach is a mobile application developed in Flutter, enabling fitness and business coaches to list their services and manage client bookings. Users can search for coaches, schedule sessions, pay online, track their fitness/career goals, and communicate through in-app chat. Firebase acts as the backend for real-time messages, user authentication, and data synchronization.',
    image: '/projects/Docoach.jpg',
    role: 'Mobile App Developer',
    year: '2024',
    liveUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    features: [
      'Cross-platform codebase compiling to both Android and iOS',
      'Real-time booking and scheduling system with calendar sync',
      'Interactive goal-setting trackers with progress visualizations',
      'Instant chat messaging with push notifications support'
    ]
  },
  {
    slug: 'capiello',
    name: 'Capiello',
    category: 'Web Apps',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    description: 'An elegant digital menu and ordering platform designed for restaurants, streamlining the customer dining experience.',
    fullDescription: 'Capiello is a digital restaurant menu and contactless table-ordering application. Customers scan a QR code at their table to view a beautiful image-rich menu, customize dishes (add-ons, spice level), and place their order directly. The system features a real-time kitchen display screen that updates cooks when new orders arrive.',
    image: '/projects/Capiello.jpg',
    role: 'Full Stack Developer',
    year: '2025',
    liveUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    features: [
      'Contactless QR code menu rendering optimized for mobile views',
      'Real-time kitchen order board powered by WebSockets',
      'Detailed item modifiers, custom options, and price calculator',
      'Dashboard panel for menu editing and sales reporting'
    ]
  },
  {
    slug: 'sksbv-malappuram-dist',
    name: 'SKSBV Malappuram dist.',
    category: 'Web Apps',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    description: 'A community-focused website for the SKSBV Malappuram District, featuring local news, event schedules, member registration, and educational materials.',
    fullDescription: 'A regional community portal built for the Samastha Kerala Sunni Balavedi (SKSBV) Malappuram District committee. It handles organization registrations, publishes regional educational guidelines, lists upcoming training sessions, and shares local activities news. An admin portal allows district coordinators to publish official circulars and results.',
    image: '/projects/SKSBV Malappuram dist..jpg',
    role: 'Backend Developer',
    year: '2023',
    liveUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    features: [
      'Regional unit and committee member registers',
      'PDF circular notice board with upload capabilities',
      'District competition event registrations and results tracker',
      'Secure multi-tier administrator panels'
    ]
  },
  {
    slug: 'vtsmall',
    name: 'vtsmall',
    category: 'UI/UX Design',
    tech: ['Figma', 'HTML', 'CSS', 'JavaScript'],
    description: 'A clean and lightweight web interface optimized for small business tracking, featuring invoice generation and basic inventory logging.',
    fullDescription: 'VT Small is a lightweight utility application focusing on inventory and ledger tracking for micro-enterprises. It began as a detailed UI/UX prototyping project in Figma to establish a highly intuitive interface for users with minimal tech literacy. The high-fidelity mockups were then translated into static responsive HTML pages.',
    image: '/projects/vtsmall.jpg',
    role: 'UI/UX Designer & Developer',
    year: '2023',
    liveUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    features: [
      'Detailed Figma high-fidelity interface mockup system',
      'Simple cash ledger and expense tracking layout',
      'Mobile-first responsive grids for on-the-go utility',
      'Zero-dependency JavaScript for high speed operation'
    ]
  }
];
