// Default/Fallback data for the application
// This data is used when API calls fail or while data is being fetched

import { SOCIAL_LINKS } from '../config/api';

export const defaultFaqs = [
  {
    question: "What services does offer MindEdge?",
    answer: "MindEdge offers a comprehensive range of services including full-stack web development, AI/ML solutions, cloud architecture design, DevOps implementation, and technical consulting. I specialize in building scalable applications using modern technologies like React, Node.js, Python, and AWS. Each project is tailored to meet your specific business needs and objectives."
  },
  {
    question: "How much does a single coaching session cost?",
    answer: "Coaching sessions are priced at $150 per hour for individual sessions. I also offer package deals: a 5-session bundle for $650 (saving $100) or a 10-session bundle for $1,200 (saving $300). Each session includes personalized guidance, code reviews, and follow-up resources to help you achieve your learning goals."
  },
  {
    question: "Can I work with you 1-on-1?",
    answer: "Absolutely! I offer one-on-one collaboration for both project development and mentoring. This includes direct communication via video calls, screen sharing sessions, and collaborative coding. Whether you need help with a specific project, want to learn new technologies, or require technical guidance, I'm available for personalized support tailored to your needs."
  },
  {
    question: "Do you work with students and mid-business?",
    answer: "Yes, I work with a diverse range of clients including students, startups, and mid-size businesses. For students, I offer educational discounts and flexible payment plans. For businesses, I provide scalable solutions that grow with your organization. I've successfully delivered projects for companies ranging from early-stage startups to established enterprises with teams of 50+ employees."
  },
  {
    question: "What if main issue goes different?",
    answer: "Flexibility is key in software development. If project requirements change or unexpected challenges arise, I adapt accordingly. All projects include regular check-ins and milestone reviews to ensure we're aligned. If scope changes significantly, I'll provide updated timelines and cost estimates. My agile approach ensures we can pivot when needed while maintaining project quality and meeting your core objectives."
  }
];


export const defaultExperiences = [
  {
    image: "https://picsum.photos/id/180/800/450",
    title: "Senior Software Engineer",
    subtitle: "Tech Corp",
    duration: "2021 • Present • Remote",
    points: [
      "Led development of scalable microservices architecture, improving system performance by 40%",
      "Reduced deployment time by 60% through CI/CD pipeline optimization",
      "Mentored team of 5 junior developers and conducted code reviews"
    ],
    link: "#experience/senior-engineer",
    githubLink: `${SOCIAL_LINKS.github}/microservices-project`,
    technologies: ["React", "Node.js", "Docker", "Kubernetes", "AWS", "MongoDB"],
    useModal: true
  },
  {
    image: "https://picsum.photos/id/0/800/450",
    title: "Full Stack Developer",
    subtitle: "StartUp Inc",
    duration: "2019 • 2021 • San Francisco",
    points: [
      "Built responsive web applications using React, Node.js, and MongoDB",
      "Collaborated with cross-functional teams to deliver high-quality products",
      "Implemented Redux for state management across multiple applications"
    ],
    link: "#experience/fullstack",
    githubLink: `${SOCIAL_LINKS.github}/fullstack-projects`,
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Tailwind CSS"],
    useModal: true
  },
  {
    image: "https://picsum.photos/id/119/800/450",
    title: "Tech Lead",
    subtitle: "Innovation Labs",
    duration: "2017 • 2019 • New York",
    points: [
      "Mentored junior developers and conducted regular code reviews",
      "Established best practices for the development team of 10+ engineers",
      "Led migration from JavaScript to TypeScript across multiple projects"
    ],
    link: "#experience/tech-lead",
    githubLink: `${SOCIAL_LINKS.github}/team-resources`,
    technologies: ["JavaScript", "TypeScript", "React", "Vue.js", "Git", "Agile"],
    useModal: true
  },
  {
    image: "https://picsum.photos/id/1/800/450",
    title: "AI/ML Engineer",
    subtitle: "DataTech Solutions",
    duration: "2015 • 2017 • Boston",
    points: [
      "Developed machine learning models for predictive analytics",
      "Achieved 85% accuracy in customer behavior prediction",
      "Optimized model performance reducing inference time by 40%"
    ],
    link: "#experience/ai-ml",
    githubLink: `${SOCIAL_LINKS.github}/ml-models`,
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
    useModal: true
  },
  {
    image: "https://picsum.photos/id/74/800/450",
    title: "DevOps Engineer",
    subtitle: "Cloud Systems",
    duration: "2013 • 2015 • Seattle",
    points: [
      "Automated deployment pipelines using Docker, Kubernetes, and CI/CD tools",
      "Reduced deployment time by 75% through infrastructure optimization",
      "Implemented monitoring and alerting systems for production environments"
    ],
    link: "#experience/devops",
    githubLink: `${SOCIAL_LINKS.github}/devops-tools`,
    technologies: ["Docker", "Kubernetes", "Jenkins", "AWS", "Terraform", "Ansible"],
    useModal: true
  }
];

export const defaultTechnologies = [
  { 
    image: "https://picsum.photos/id/180/800/450", 
    title: "React.js", 
    subtitle: "Frontend Framework • Advanced", 
    description: "Building dynamic and interactive user interfaces with modern React patterns and hooks.", 
    link: "#", 
    githubLink: SOCIAL_LINKS.github 
  },
  { 
    image: "https://picsum.photos/id/0/800/450", 
    title: "Node.js", 
    subtitle: "Backend Runtime • Advanced", 
    description: "Creating scalable backend services and RESTful APIs with Express and Node.js ecosystem.", 
    link: "#", 
    githubLink: SOCIAL_LINKS.github 
  },
  { 
    image: "https://picsum.photos/id/119/800/450", 
    title: "Tailwind CSS", 
    subtitle: "CSS Framework • Intermediate", 
    description: "Designing beautiful, responsive interfaces with utility-first CSS framework.", 
    link: "#", 
    githubLink: SOCIAL_LINKS.github 
  },
  { 
    image: "https://picsum.photos/id/1/800/450", 
    title: "MongoDB", 
    subtitle: "NoSQL Database • Advanced", 
    description: "Developing robust database solutions with NoSQL database management systems.", 
    link: "#", 
    githubLink: SOCIAL_LINKS.github 
  },
  { 
    image: "https://picsum.photos/id/74/800/450", 
    title: "Python", 
    subtitle: "Programming Language • Advanced", 
    description: "Building data processing pipelines and machine learning models with Python.", 
    link: "#", 
    githubLink: SOCIAL_LINKS.github 
  },
  { 
    image: "https://picsum.photos/id/201/800/450", 
    title: "AWS", 
    subtitle: "Cloud Platform • Intermediate", 
    description: "Deploying and managing cloud infrastructure on Amazon Web Services platform.", 
    link: "#", 
    githubLink: SOCIAL_LINKS.github 
  }
];

export const defaultInterpersonalSkills = [
  {
    image: "https://picsum.photos/id/103/800/450",
    title: "Communication",
    subtitle: "Effective Collaboration • Expert",
    description: "Exceptional verbal and written communication skills, with ability to convey complex technical concepts to diverse audiences and stakeholders.",
    link: "#skills/communication",
    githubLink: SOCIAL_LINKS.github
  },
  {
    image: "https://picsum.photos/id/1005/800/450",
    title: "Leadership & Teamwork",
    subtitle: "Team Excellence • Advanced",
    description: "Proven ability to lead cross-functional teams, mentor junior developers, and collaborate effectively in agile environments.",
    link: "#skills/leadership",
    githubLink: SOCIAL_LINKS.github
  },
  {
    image: "https://picsum.photos/id/20/800/450",
    title: "Problem Solving",
    subtitle: "Analytical Thinking • Expert",
    description: "Strong analytical and critical thinking skills to identify issues, evaluate solutions, and implement effective technical strategies.",
    link: "#skills/problem-solving",
    githubLink: SOCIAL_LINKS.github
  },
  {
    image: "https://picsum.photos/id/60/800/450",
    title: "Adaptability",
    subtitle: "Continuous Learning • Advanced",
    description: "Quick to learn new technologies and adapt to changing project requirements, thriving in fast-paced development environments.",
    link: "#skills/adaptability",
    githubLink: SOCIAL_LINKS.github
  },
  {
    image: "https://picsum.photos/id/10/800/450",
    title: "Time Management",
    subtitle: "Efficient Execution • Advanced",
    description: "Expert at prioritizing tasks, meeting deadlines, and managing multiple projects simultaneously while maintaining high quality standards.",
    link: "#skills/time-management",
    githubLink: SOCIAL_LINKS.github
  },
  {
    image: "https://picsum.photos/id/15/800/450",
    title: "Creative Thinking",
    subtitle: "Innovation Mindset • Expert",
    description: "Innovative approach to software development, consistently finding unique solutions to complex challenges and improving user experiences.",
    link: "#skills/creativity",
    githubLink: SOCIAL_LINKS.github
  }
];

export const defaultAchievements = [
  {
    image: "https://picsum.photos/id/1/800/450",
    title: "Building Scalable Microservices Architecture",
    subtitle: "Tech Conference • 2024",
    description: "A comprehensive guide to designing and implementing microservices using Docker, Kubernetes, and best practices for cloud-native applications.",
    link: "#achievement/microservices",
    githubLink: SOCIAL_LINKS.github
  },
  {
    image: "https://picsum.photos/id/20/800/450",
    title: "Machine Learning in Production",
    subtitle: "AI Summit • 2023",
    description: "Learn how to deploy ML models at scale, monitor performance, and maintain reliability in production environments with real-world examples.",
    link: "#achievement/ml-production",
    githubLink: SOCIAL_LINKS.github
  },
  {
    image: "https://picsum.photos/id/119/800/450",
    title: "Modern React Development Patterns",
    subtitle: "Frontend Conference • 2023",
    description: "Exploring advanced React patterns including hooks, context API, and state management solutions to build maintainable applications.",
    link: "#achievement/react-patterns",
    githubLink: SOCIAL_LINKS.github
  },
  {
    image: "https://picsum.photos/id/60/800/450",
    title: "DevOps Best Practices for 2025",
    subtitle: "DevOps Summit • 2025",
    description: "Essential DevOps strategies covering CI/CD pipelines, infrastructure as code, monitoring, and security practices for modern development teams.",
    link: "#achievement/devops-2025",
    githubLink: SOCIAL_LINKS.github
  }
];

export const defaultEducation = [
  {
    image: "https://picsum.photos/id/180/800/450",
    title: "University of Technology",
    subtitle: "Bachelor of Science in Computer Science",
    duration: "2009 - 2013 • 3.8 CGPA",
    description: "Graduated with honors from University of Technology. Specialized in Software Engineering, Data Structures, and Algorithm Design with a GPA of 3.8/4.0.",
    link: "#education/bachelor",
    githubLink: SOCIAL_LINKS.github,
    useModal: true
  },
  {
    image: "https://picsum.photos/id/1005/800/450",
    title: "Institute of Advanced Studies",
    subtitle: "Master of Science in Artificial Intelligence",
    duration: "2013 - 2015 • 85%",
    description: "Advanced degree focused on Machine Learning, Deep Learning, and Natural Language Processing. Completed thesis on neural network optimization techniques.",
    link: "#education/master",
    githubLink: SOCIAL_LINKS.github,
    useModal: true
  },
  {
    image: "https://picsum.photos/id/201/800/450",
    title: "Amazon Web Services",
    subtitle: "AWS Certified Solutions Architect",
    duration: "2020 • 90%",
    description: "Professional certification demonstrating expertise in designing and deploying scalable, highly available systems on Amazon Web Services platform.",
    link: "#education/aws-cert",
    githubLink: SOCIAL_LINKS.github,
    useModal: true
  },
  {
    image: "https://picsum.photos/id/103/800/450",
    title: "Coding Academy",
    subtitle: "Full Stack Web Development Bootcamp",
    duration: "2018 • 95%",
    description: "Intensive 6-month program covering modern web technologies including React, Node.js, MongoDB, and RESTful API development with hands-on projects.",
    link: "#education/bootcamp",
    githubLink: SOCIAL_LINKS.github,
    useModal: true
  }
];

export const defaultProjects = [
  {
    image: "https://picsum.photos/id/180/800/450",
    title: "E-Commerce Platform",
    subtitle: "Full Stack Web App • 2024",
    duration: "Jan 2024 - Mar 2024",
    points: [
      "Built a full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration",
      "Implemented multiple payment gateways including Stripe and PayPal for secure transactions",
      "Developed real-time inventory management system with automated stock updates",
      "Created advanced search functionality with filters, sorting options, and faceted navigation",
      "Optimized for scalability to handle thousands of concurrent users with fast response times"
    ],
    link: "#project/ecommerce",
    githubLink: `${SOCIAL_LINKS.github}/ecommerce-platform`,
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT", "Redux"],
    useModal: true
  },
  {
    image: "https://picsum.photos/id/0/800/450",
    title: "AI Chatbot Assistant",
    subtitle: "Machine Learning • 2024",
    duration: "Apr 2024 - Jun 2024",
    points: [
      "Developed an intelligent chatbot powered by natural language processing and machine learning",
      "Implemented advanced NLP techniques to parse user intent and maintain conversation context",
      "Built self-learning system that improves responses based on user interactions over time",
      "Created seamless integration capabilities for web, mobile, and messaging platforms",
      "Achieved 92% accuracy in understanding user queries and providing relevant responses"
    ],
    link: "#project/ai-chatbot",
    githubLink: `${SOCIAL_LINKS.github}/ai-chatbot`,
    technologies: ["Python", "TensorFlow", "Natural Language Processing", "Flask", "Docker", "PostgreSQL"],
    useModal: true
  },
  {
    image: "https://picsum.photos/id/119/800/450",
    title: "Task Management System",
    subtitle: "Productivity App • 2023",
    duration: "Oct 2023 - Dec 2023",
    points: [
      "Created a comprehensive task Wmanagement application with real-time collaboration features",
      "Implemented board, list, and card organization system similar to popular productivity tools",
      "Integrated file attachments, comments, and real-time notifications for team communication",
      "Developed WebSocket-based synchronization ensuring all team members stay updated instantly",
      "Built analytics dashboard providing insights into team productivity and project progress"
    ],
    link: "#project/task-management",
    githubLink: `${SOCIAL_LINKS.github}/task-manager`,
    technologies: ["React", "Firebase", "WebSockets", "Material-UI", "Chart.js", "Node.js"],
    useModal: true
  },
  {
    image: "https://picsum.photos/id/1/800/450",
    title: "Weather Forecast App",
    subtitle: "Mobile Application • 2023",
    duration: "Jul 2023 - Sep 2023",
    points: [
      "Built a beautiful weather application providing accurate forecasts and severe weather alerts",
      "Integrated multiple weather APIs to ensure the most accurate and reliable forecasts",
      "Developed interactive radar maps with precipitation overlays and weather pattern visualization",
      "Implemented push notifications for severe weather alerts and daily forecast summaries",
      "Created multi-location support with detailed hourly and 10-day forecasts"
    ],
    link: "#project/weather-app",
    githubLink: `${SOCIAL_LINKS.github}/weather-app`,
    technologies: ["React Native", "OpenWeather API", "Redux", "TypeScript", "Google Maps API"],
    useModal: true
  },
  {
    image: "https://picsum.photos/id/74/800/450",
    title: "Portfolio Website Builder",
    subtitle: "SaaS Platform • 2023",
    duration: "Jan 2023 - Jun 2023",
    points: [
      "Developed a drag-and-drop portfolio builder enabling users to create websites without coding",
      "Created visual editor with pre-designed templates and fully customizable components",
      "Implemented automatic responsive design ensuring portfolios look great on all devices",
      "Built content management system for projects, skills, experience, and contact information",
      "Integrated SEO optimization tools and analytics for tracking portfolio performance"
    ],
    link: "#project/portfolio-builder",
    githubLink: `${SOCIAL_LINKS.github}/portfolio-builder`,
    technologies: ["React", "Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "AWS S3"],
    useModal: true
  },
  {
    image: "https://picsum.photos/id/201/800/450",
    title: "Fitness Tracking Platform",
    subtitle: "Health & Wellness App • 2022",
    duration: "Aug 2022 - Dec 2022",
    points: [
      "Created a comprehensive fitness tracking application with workout planning and nutrition tracking",
      "Developed calorie and macro tracking system with extensive food database",
      "Built progress analytics with detailed charts, statistics, and goal tracking features",
      "Implemented social features allowing users to share achievements and compete with friends",
      "Integrated with Fitbit API and Apple HealthKit for seamless device synchronization"
    ],
    link: "#project/fitness-tracker",
    githubLink: `${SOCIAL_LINKS.github}/fitness-tracker`,
    technologies: ["Vue.js", "Python", "FastAPI", "MongoDB", "D3.js", "Fitbit API", "Apple HealthKit"],
    useModal: true
  }
];

export const defaultContacts = [
  {
    title: "Email",
    subtitle: "pratik.yawalkar@example.com • contact@pratik.dev",
    image: "https://picsum.photos/id/1002/800/450",
    url: "mailto:pratik.yawalkar@example.com"
  },
  {
    title: "Phone",
    subtitle: "+1 (555) 123-4567 • +1 (555) 987-6543",
    image: "https://picsum.photos/id/1003/800/450",
    url: "tel:+15551234567"
  },
  {
    title: "Location",
    subtitle: "San Francisco, CA • United States",
    image: "https://picsum.photos/id/1004/800/450",
    url: "https://maps.google.com/?q=San+Francisco,+CA"
  },
  {
    title: "Working Hours",
    subtitle: "Monday - Friday: 9:00 AM - 6:00 PM • Weekend: By appointment",
    image: "https://picsum.photos/id/1005/800/450",
    url: "#contact"
  },
  {
    title: "LinkedIn",
    subtitle: "Connect with me professionally",
    image: "https://picsum.photos/id/180/800/450",
    url: "https://linkedin.com/in/pratik-yawalkar"
  },
  {
    title: "GitHub",
    subtitle: "Check out my projects and code",
    image: "https://picsum.photos/id/0/800/450",
    url: "https://github.com/pratik-yawalkar"
  },
  {
    title: "Twitter",
    subtitle: "Follow me for tech updates",
    image: "https://picsum.photos/id/119/800/450",
    url: "https://twitter.com/pratik_yawalkar"
  },
  {
    title: "Instagram",
    subtitle: "See my visual journey",
    image: "https://picsum.photos/id/1/800/450",
    url: "https://instagram.com/pratik.yawalkar"
  }
];

export const defaultAddresses = [
  {
    type: "Office",
    street: "123 Tech Street",
    landmark: "Near Innovation Park",
    city: "San Francisco",
    state: "California",
    country: "United States",
    pincode: "94102",
    email: "office@pratik.dev",
    phone: "+1 (555) 123-4567",
    url: "https://picsum.photos/id/1006/800/450"
  },
  {
    type: "Home",
    street: "456 Residence Avenue",
    landmark: null,
    city: "Palo Alto",
    state: "California",
    country: "United States",
    pincode: "94301",
    email: "pratik.yawalkar@example.com",
    phone: "+1 (555) 987-6543",
    url: "https://picsum.photos/id/1007/800/450"
  }
];
