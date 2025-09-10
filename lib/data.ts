import { Skill, Experience, Project } from '@/types';

export const skills: Skill[] = [
  { name: 'React', level: 85, color: '#61DAFB' },
  { name: 'Node.js', level: 80, color: '#339933' },
  { name: 'JavaScript', level: 88, color: '#F7DF1E' },
  { name: 'MongoDB', level: 75, color: '#47A248' },
  { name: 'Express.js', level: 78, color: '#000000' },
  { name: 'HTML', level: 92, color: '#E34F26' },
  { name: 'CSS', level: 87, color: '#1572B6' },
  { name: 'Tailwind', level: 85, color: '#06B6D4' },
  { name: 'Figma', level: 70, color: '#F24E1E' }
];

export const frontendSkills = skills.filter(skill => 
  ['React', 'HTML', 'CSS', 'Tailwind'].includes(skill.name)
);

export const backendSkills = skills.filter(skill => 
  ['Node.js', 'Express.js'].includes(skill.name)
);

export const toolsSkills = skills.filter(skill => 
  ['MongoDB', 'Figma'].includes(skill.name)
);

export const experiences: Experience[] = [
  {
    title: 'Started B.E. CSE',
    company: 'Dhaanish Ahmed College of Engineering',
    duration: '2022',
    location: 'Chennai, India',
    description: ['Began Computer Science Engineering journey', 'Focus on software development and algorithms'],
    type: 'education'
  },
  {
    title: 'Software Testing Intern',
    company: 'Pyroferus Technologies',
    duration: 'Feb 2024 – Mar 2024',
    location: 'Chennai, India',
    description: [
      'Completed a 45-day internship focused on manual and automation testing',
      'Performed manual testing by creating and executing test cases',
      'Worked on automation testing to validate functionality and improve efficiency'
    ],
    type: 'internship'
  },
  {
    title: 'Front End Developer Intern',
    company: 'CodSoft',
    duration: 'Feb 2024 – Mar 2024',
    location: 'Chennai, India',
    description: [
      'Completed a 4-week virtual internship in full-stack development',
      'Built responsive web pages using HTML, CSS, and JavaScript',
      'Worked on improving UI design and ensuring cross-browser compatibility'
    ],
    type: 'internship'
  },
  {
    title: 'AI Foundation Certificate',
    company: 'Wipro',
    duration: '2024',
    location: 'Online',
    description: ['Completed comprehensive AI and machine learning fundamentals course'],
    type: 'achievement'
  },
  {
    title: 'Final Year Project & Hackathons',
    company: 'Current Focus',
    duration: '2025',
    location: 'Chennai, India',
    description: [
      'Working on innovative final year project',
      'Participating in hackathons like Walmart Statathon and Smart India Hackathon'
    ],
    type: 'project'
  }
];

export const projects: Project[] = [
  {
    title: 'Smart Cart AI',
    description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    github: 'https://github.com/rizwan2610/Smart-Cart-AI.git',
    live: 'https://smart-cart-ai-2bib.vercel.app/'
  },
  {
    title: 'CROWD VISION AI',
    description: 'Modern task management application with real-time updates',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/rizwan2610/CROWD-VISION-AI.git',
    live: 'https://crowd-vision-ai.vercel.app/'
  },
  {
    title: 'E-COMMERCE',
    description: 'Interactive weather dashboard with location-based forecasts',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/rizwan2610/E-COMMERCE.git',
    live: 'https://arr-creation.vercel.app/'
  }
];


export const chatResponses: Record<string, string> = {
  'who are you': '👋 Hey there! I\'m Mohammed Rizwan G, a Final Year B.E. CSE Student at Dhaanish Ahmed College of Engineering. I\'m passionate about web development and currently exploring full-stack technologies!',
  'where did you study': '🎓 I\'m currently pursuing my B.E. in Computer Science Engineering at Dhaanish Ahmed College of Engineering, Chennai. Started my journey in 2022!',
  'what\'s your latest project': '🚀 I\'m currently working on my final year project and actively participating in hackathons like the Walmart Statathon and Smart India Hackathon. Also building cool web applications with React and Node.js!',
  'skills': '💻 I work with React, Node.js, Express.js, MongoDB, JavaScript, HTML, CSS, Tailwind CSS, and Figma. Always learning new technologies!',
  'experience': '💼 I\'ve completed internships at Pyroferus Technologies (Software Testing) and CodSoft (Frontend Development). Also earned an AI Foundation Certificate from Wipro!',
  'contact': '📧 You can reach out to me through the contact form or connect with me on LinkedIn and GitHub. I\'d love to chat about tech and opportunities!',
  'default': '🤖 Thanks for asking! I can tell you about my background, studies, projects, skills, or experience. What would you like to know?'
};