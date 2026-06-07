export type FilterValue = 'all' | 'professional' | 'extracurricular' | 'education';

export interface ExperienceItem {
  id: string;
  type: Exclude<FilterValue, 'all'>;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  tags: string[];
}

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    type: 'professional',
    role: 'Frontend Developer',
    company: 'Rintisar',
    location: 'Indonesia',
    period: 'Apr 2026 — Present',
    description: [
      'Developing and maintaining scalable web applications using React, Vite, and modern frontend development practices.',
      'Collaborating closely with backend engineers and UI/UX designers to deliver responsive and user-friendly digital products.',
      'Implementing API integrations, optimizing application performance, and resolving production issues in agile development environments.'
    ],
    tags: ['React', 'Vite', 'JavaScript', 'REST API', 'Tailwind CSS']
  },

  {
    id: 'exp-2',
    type: 'professional',
    role: 'Frontend Developer',
    company: 'CV FlyHigh Sinergi Indonesia',
    location: 'Indonesia',
    period: 'Aug 2025 — Dec 2025',
    description: [
      'Developed responsive web interfaces based on business requirements and UI/UX designs.',
      'Implemented reusable frontend components to improve development efficiency and maintainability.',
      'Worked collaboratively with cross-functional teams to ensure seamless integration between frontend and backend systems.'
    ],
    tags: ['React', 'JavaScript', 'Bootstrap', 'Responsive Design', 'Web Development']
  },

  {
    id: 'exp-6',
    type: 'education',
    role: 'Machine Learning Cohort',
    company: 'Asah Program by Dicoding & Accenture',
    location: 'Indonesia',
    period: '2025',
    description: [
      'Completed intensive training in machine learning fundamentals, data preprocessing, model development, and evaluation.',
      'Built practical machine learning projects involving classification, prediction, and data analysis.',
      'Gained hands-on experience with industry-standard tools and workflows used in AI development.'
    ],
    tags: ['Python', 'Machine Learning', 'TensorFlow', 'Data Analysis', 'Scikit-Learn']
  },

  {
    id: 'exp-7',
    type: 'education',
    role: 'Complete Full-Stack Web Development Bootcamp',
    company: 'Udemy',
    location: 'Online Learning',
    period: '2024',
    description: [
      'Completed comprehensive training covering frontend, backend, databases, APIs, authentication, and deployment.',
      'Built full-stack web applications using modern development tools and frameworks.',
      'Strengthened understanding of software engineering best practices and application architecture.'
    ],
    tags: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Full-Stack Development']
  },

  {
    id: 'exp-3',
    type: 'extracurricular',
    role: 'Chief Organizer',
    company: 'Sambut Mahasiswa Baru Sistem Informasi 2024',
    location: 'UPN Veteran Jawa Timur',
    period: '2024',
    description: [
      'Led the planning and execution of orientation programs for incoming Information Systems students.',
      'Coordinated multiple divisions and managed event operations to ensure successful program delivery.',
      'Developed leadership, project management, and stakeholder communication skills through large-scale event coordination.'
    ],
    tags: ['Leadership', 'Project Management', 'Team Coordination', 'Event Management']
  },

  {
    id: 'exp-4',
    type: 'extracurricular',
    role: 'Chief Organizer',
    company: 'Day With Sistem Informasi 2024',
    location: 'UPN Veteran Jawa Timur',
    period: '2024',
    description: [
      'Directed the organization of academic and networking events for Information Systems students.',
      'Managed event timelines, committee coordination, and collaboration with speakers and partners.',
      'Successfully facilitated student engagement and community-building initiatives.'
    ],
    tags: ['Leadership', 'Communication', 'Team Management', 'Public Relations']
  },

  {
    id: 'exp-5',
    type: 'extracurricular',
    role: 'Chief Organizer',
    company: 'Sistem Informasi Cup 2024',
    location: 'UPN Veteran Jawa Timur',
    period: '2024',
    description: [
      'Led the execution of a faculty-wide sports and competition event involving multiple teams and participants.',
      'Managed event logistics, scheduling, budgeting, and cross-committee collaboration.',
      'Strengthened organizational and leadership capabilities through high-impact event management.'
    ],
    tags: ['Leadership', 'Event Management', 'Teamwork', 'Coordination']
  }
];