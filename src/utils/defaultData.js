// Default/Fallback data for the application
// This data is used when API calls fail or while data is being fetched

import { SOCIAL_LINKS } from '../config/api';

export const defaultFaqs = [
  {
    question: "Are You aware of AI Tools used by industry?",
    answer: "Yes, I'am aware. I commonly use Cursor, Github-copilot, ChaGPT, and GrokAI."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in Java, Spring Boot, React, Artificial Intelligence, and SQL. I have extensive experience building full-stack web applications with modern frameworks and best practices. Also, I have developed applications containing agents."
  },
  {
    question: "How many years of experience do you have?",
    answer: "I have begun my professional journey as software development engineer, working on various microservices under fraud detection category used to block VPNs, Account Sharing, ChargeBacks, and Payment Risk Identification."
  },
  {
    question: "Can I work with you 1-on-1?",
    answer: "Absolutely! I offer one-on-one collaboration for both project development and mentoring. This includes direct communication via video calls, screen sharing sessions, and collaborative coding. Whether you need help with a specific project, want to learn new technologies, or require technical guidance, I'm available for personalized support tailored to your needs."
  },
  {
    question: "What if main issue goes different?",
    answer: "Flexibility is key in software development. If project requirements change or unexpected challenges arise, I adapt accordingly. All projects include regular check-ins and milestone reviews to ensure we're aligned. If scope changes significantly, I'll provide updated timelines and cost estimates. My agile approach ensures we can pivot when needed while maintaining project quality and meeting your core objectives."
  },
  {
    question: "Are you available for freelance projects?",
    answer: "Yes, I am available for freelance projects. Please feel free to reach out to me through the contact form or via email."
  }
];


export const defaultExperiences = [
  {
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/wbd.png",
    title: "Software Engineer 1",
    subtitle: "Warner Bros Discovery",
    duration: "2025 • Present • Hyderabad, India",
    points: [
      "Architected and developed a multi-microservice fraud prevention platform comprising 3 Spring Boot services handling real-time decision-making with gRPC inter-service communication and ML model integration for predictive fraud scoring.",
      "Designed and implemented an event-driven decisioning pipeline processing Kafka streams through state machines, with automated dispute evidence generation using Databricks, enabling data-driven fraud mitigation at scale with comprehensive Micrometer-based observability."
    ],
    link: "#experience/wbd",
    githubLink: "https://github.com/noob-starter",
    technologies: ["Java", "Spring Boot", "CSS3", "Flask", "Kafka", "GRPC", "JUnit", "Docker", "System Design", "PostGresSQL", "Collaboration", "Adaptability", "Patience"],
    useModal: true
  }
];

export const defaultTechnologies = [
  { 
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/java.png", 
    title: "Java", 
    subtitle: "Backend • Intermediate", 
    description: "Building robust backend systems and enterprise applications with Java.", 
    link: "#", 
    githubLink: "https://github.com/noob-starter" 
  },
  { 
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/python.png", 
    title: "Python", 
    subtitle: "Scripting • Expert", 
    description: "Building data processing pipelines and machine learning models with Python.", 
    link: "#", 
    githubLink: "https://github.com/noob-starter" 
  },
  { 
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/cpp.png", 
    title: "C/C++", 
    subtitle: "System • Intermediate", 
    description: "Developing high-performance system-level applications and algorithms.", 
    link: "#", 
    githubLink: "https://github.com/noob-starter" 
  },
  { 
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/sql.png", 
    title: "SQL", 
    subtitle: "Query • Advanced", 
    description: "Designing and optimizing database queries for efficient data management.", 
    link: "#", 
    githubLink: "https://github.com/noob-starter" 
  },
  { 
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/javascript.png", 
    title: "JavaScript", 
    subtitle: "Scripting • Beginner", 
    description: "Creating interactive web applications with modern JavaScript.", 
    link: "#", 
    githubLink: "https://github.com/noob-starter" 
  },
  { 
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/html.png", 
    title: "HTML5", 
    subtitle: "Frontend • Advanced", 
    description: "Building semantic and accessible web pages with modern HTML5.", 
    link: "#", 
    githubLink: "https://github.com/noob-starter" 
  },
  { 
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/css.png", 
    title: "CSS3", 
    subtitle: "Styling • Intermediate", 
    description: "Designing beautiful, responsive interfaces with modern CSS3.", 
    link: "#", 
    githubLink: "https://github.com/noob-starter" 
  },
  { 
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/springboot.png", 
    title: "Spring Boot", 
    subtitle: "Framework • Expert", 
    description: "Building enterprise-grade microservices with Spring Boot framework.", 
    link: "#", 
    githubLink: "https://github.com/noob-starter" 
  },
  { 
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/react.png", 
    title: "React", 
    subtitle: "Frontend • Intermediate", 
    description: "Building dynamic and interactive user interfaces with modern React.", 
    link: "#", 
    githubLink: "https://github.com/noob-starter" 
  },
  { 
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/nodejs.png", 
    title: "Node", 
    subtitle: "Backend • Intermediate", 
    description: "Creating scalable backend services and RESTful APIs with Node.js.", 
    link: "#", 
    githubLink: "https://github.com/noob-starter" 
  },
  { 
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/flask.png", 
    title: "Flask", 
    subtitle: "Framework • Beginner", 
    description: "Building lightweight web applications with Python Flask framework.", 
    link: "#", 
    githubLink: "https://github.com/noob-starter" 
  },
  { 
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/kafka.png", 
    title: "Kafka", 
    subtitle: "Messaging • Intermediate", 
    description: "Implementing real-time data streaming and event-driven architectures.", 
    link: "#", 
    githubLink: "https://github.com/noob-starter" 
  },
  { 
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/grpc.png", 
    title: "GRPC", 
    subtitle: "Communication • Beginner", 
    description: "Building high-performance RPC systems with gRPC framework.", 
    link: "#", 
    githubLink: "https://github.com/noob-starter" 
  },
  { 
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/junit.png", 
    title: "JUnit", 
    subtitle: "Testing • Intermediate", 
    description: "Writing comprehensive unit tests for Java applications.", 
    link: "#", 
    githubLink: "https://github.com/noob-starter" 
  },
  { 
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/docker.png", 
    title: "Docker", 
    subtitle: "Containerization • Intermediate", 
    description: "Containerizing applications for consistent deployment across environments.", 
    link: "#", 
    githubLink: "https://github.com/noob-starter" 
  },
  { 
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/systemdesign.png", 
    title: "System Design", 
    subtitle: "Design • Intermediate", 
    description: "Architecting scalable and reliable distributed systems.", 
    link: "#", 
    githubLink: "https://github.com/noob-starter" 
  },
  { 
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/aws.png", 
    title: "AWS", 
    subtitle: "Cloud Computing • Intermediate", 
    description: "Deploying and managing cloud infrastructure on Amazon Web Services.", 
    link: "#", 
    githubLink: "https://github.com/noob-starter" 
  },
  { 
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/postgress.png", 
    title: "PostGresSQL", 
    subtitle: "Database • Intermediate", 
    description: "Designing robust relational database solutions with PostgreSQL.", 
    link: "#", 
    githubLink: "https://github.com/noob-starter" 
  },
  { 
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/dynamodb.png", 
    title: "DynamoDB", 
    subtitle: "Database • Advanced", 
    description: "Building scalable NoSQL database solutions with AWS DynamoDB.", 
    link: "#", 
    githubLink: "https://github.com/noob-starter" 
  },
  { 
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/mongodb.png", 
    title: "MongoDB", 
    subtitle: "Database • Beginner", 
    description: "Developing database solutions with MongoDB NoSQL database.", 
    link: "#", 
    githubLink: "https://github.com/noob-starter" 
  }
];

export const defaultInterpersonalSkills = [
  {
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/problemsolving.png",
    title: "Problem Solving",
    subtitle: "Personal • Advanced",
    description: "Strong analytical and critical thinking skills to identify issues, evaluate solutions, and implement effective technical strategies.",
    link: "#skills/problem-solving",
    githubLink: "https://github.com/noob-starter"
  },
  {
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/collaboration.png",
    title: "Collaboration",
    subtitle: "Social • Beginner",
    description: "Working effectively with cross-functional teams to deliver high-quality products and solutions.",
    link: "#skills/collaboration",
    githubLink: "https://github.com/noob-starter"
  },
  {
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/adaptability.png",
    title: "Adaptability",
    subtitle: "Personal • Expert",
    description: "Quick to learn new technologies and adapt to changing project requirements, thriving in fast-paced development environments.",
    link: "#skills/adaptability",
    githubLink: "https://github.com/noob-starter"
  },
  {
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/patience.png",
    title: "Patience",
    subtitle: "Personal • Intermediate",
    description: "Maintaining composure and persistence when facing complex challenges and debugging difficult issues.",
    link: "#skills/patience",
    githubLink: "https://github.com/noob-starter"
  },
  {
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/activelistening.png",
    title: "Active Listening",
    subtitle: "Personal • Intermediate",
    description: "Attentively understanding requirements, feedback, and team communication to deliver better solutions.",
    link: "#skills/active-listening",
    githubLink: "https://github.com/noob-starter"
  },
  {
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/trustbuilding.png",
    title: "Trust Building",
    subtitle: "Social • Advanced",
    description: "Building strong professional relationships through reliability, transparency, and consistent delivery of quality work.",
    link: "#skills/trust-building",
    githubLink: "https://github.com/noob-starter"
  }
];

export const defaultAchievements = [
  {
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/airjodhpur.png",
    title: "Conference Paper",
    subtitle: "Advances In Robotics • 2025",
    description: "Published research paper titled \"Robot Motion Planning by Non-prehensile Obstruction Handling in Cluttered Environment\" at Advances in Robotics, IIT Jodhpur under \"Planning and navigation in unstructured environments\".",
    link: "https://advancesinrobotics.com/2025/",
    githubLink: "https://github.com/noob-starter"
  },
  {
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/jstjapanvisit.png",
    title: "Technology Exchange visit Japan",
    subtitle: "Japan Science and Technology Agency (JST) • 2024",
    description: "Selected out of 200 students of the AI Dept. IITH to visit Ehime University, Matsuyama, Japan under Sakura Science Program managed by Japan Science and Technology Agency.",
    link: "https://ssp.jst.go.jp/en/",
    githubLink: "https://github.com/noob-starter"
  },
  {
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/gate2023.png",
    title: "Graduate Aptitude Test in Engineering 2023",
    subtitle: "GATE 2023 Committee (IIT Kanpur) • 2023",
    description: "Secured Top 0.2% in CS & IT stream with AIR-370.",
    link: "https://gate.iitk.ac.in/GATE2023/",
    githubLink: "https://github.com/noob-starter"
  }
];

export const defaultEducation = [
  {
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/iith.png",
    title: "Indian Institute of Technology, Hyderabad",
    subtitle: "Master of Technology in Artificial Intelligence and Machine Learning",
    duration: "2023 - 2025 • 8.90 CGPA",
    description: "Focused on artificial intelligence, deep learning, and data science, with a particular emphasis on robotics applications. I developed an innovative trajectory-planning algorithm designed specifically for fruit-picking robots. The algorithm integrates contextual environmental data—such as branch density, fruit location, and obstacle proximity—into the planning process. By doing so, it significantly improves the robot's ability to navigate complex orchard environments efficiently and safely. I also enhanced traditional path-planning methods, particularly the A algorithm, by embedding environmental cost factors directly into its objective function. This modification allows the system to distinguish and manage both \"soft\" obstacles (like leaves or flexible branches) and \"hard\" obstacles (like tree trunks or rigid structures). The result is a more adaptive, context-aware navigation approach that offers better performance than standard A in real-world agricultural settings.",
    link: "https://iith.ac.in",
    githubLink: "https://github.com/noob-starter",
    useModal: true
  },
  {
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/rcoem.png",
    title: "Shri Ramdeobaba College of Engineering and Management, Nagpur",
    subtitle: "Bachelor of Engineering in Computer Science and Engineering (Honors)",
    duration: "2019 - 2023 • 8.48 CGPA",
    description: "Focused on core areas of computer science and engineering. Developed a gender recognition system using voice, applying signal processing, data analytics and machine learning techniques. Extracted key acoustic features and trained classification models to accurately distinguish male and female voices, improving recognition reliability across diverse speech samples.",
    link: "https://www.rknec.edu/",
    githubLink: "https://github.com/noob-starter",
    useModal: true
  },
  {
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/dharampethscience.png",
    title: "Dharampeth M.P. Deo Memorial Science College, Nagpur",
    subtitle: "Senior Secondary Education (HSC) - Science Stream",
    duration: "2018 - 2019 • 89.85%",
    description: "Completed HSC in Science with Computer Science as an elective, gaining foundational knowledge in programming, algorithms, and computational thinking. Built strong fundamentals in physics and mathematics while developing practical skills in coding, problem-solving, and logical reasoning.",
    link: "https://www.dharampethscience.com/",
    githubLink: "https://github.com/noob-starter",
    useModal: true
  },
  {
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/tiptopconvent.png",
    title: "Tip Top Convent, Nagpur",
    subtitle: "Secondary Education (SSC) - General Education",
    duration: "2016 - 2017 • 92.80%",
    description: "Completed SSC with all general subjects, building a solid foundation in core academic areas including mathematics, science, and languages. Developed essential skills in analytical thinking, communication, and overall academic discipline.",
    link: "https://www.tiptopconvent.com/",
    githubLink: "https://github.com/noob-starter",
    useModal: true
  }
];

export const defaultProjects = [
  {
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/robot.png",
    title: "Trajectory Planning using Contextual Information (AI in Robotics)",
    subtitle: "Robotics Research • 2024-2025",
    duration: "Jul 2024 - May 2025",
    points: [
      "Developed an innovative trajectory planning algorithm that integrates contextual environmental data to optimize performance (specific to fruit picking), addressing how this integration improves efficiency in navigating obstacles.",
      "Enhanced Traditional Algorithms (A*) by incorporating environmental cost factors into the objective function, enabling the effective management of both soft and hard obstacles in a novel manner.",
      "Mentor: Dr. Rekha Raja, Assistant Professor in AI Dept. at IIT Hyderabad."
    ],
    link: "#project/trajectory-planning",
    githubLink: "https://github.com/noob-starter",
    technologies: ["Python"],
    useModal: true
  },
  {
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/fraud.png",
    title: "Financial Fraud Detection and Classification with Synthetic Data Generation",
    subtitle: "Machine Learning • 2024",
    duration: "Jan 2024 - May 2024",
    points: [
      "Collaboratively Enhanced transactional security using AutoEncoder Model by uncovering underlying patterns utilizing Node2Vec, Graph CNN & SC Tech. along with Synthetic data generation for model upgrades",
      "The selected model which integrates the Variational Autoencoder with Cost-Sensitive Logistic Regression (Bhansen) significantly outperformed traditional models, achieving a 50% improvement."
    ],
    link: "#project/fraud-detection",
    githubLink: "https://github.com/noob-starter",
    technologies: ["Python"],
    useModal: true
  },
  {
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/packaging.png",
    title: "Product Packaging Application",
    subtitle: "Web Application • 2022",
    duration: "Apr 2022 - Jun 2022",
    points: [
      "Spearheaded the development of the Dynamic SPAs titled \"IMDB\" using Restful Web APIs and Model View Controller Architecture with the primary focus on illuminating Cinematic Highlights.",
      "Engineered an app that integrates an extensive IMDB movie database, delivering detailed information and enabling user-generated ratings and reviews, empowering over 100 users to create personalized watch-lists & share insights"
    ],
    link: "#project/product-packaging",
    githubLink: "https://github.com/noob-starter",
    technologies: ["SQL", "JavaScript", "HTML5", "CSS3"],
    useModal: true
  }
];

export const defaultContacts = [
  {
    title: "LinkedIn",
    subtitle: "Professional networking and career development",
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/linkedin.png",
    url: "https://www.linkedin.com/in/pratik-yawalkar"
  },
  {
    title: "GitHub",
    subtitle: "Open source projects and code repositories",
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/github.png",
    url: "https://github.com/noob-starter"
  },
  {
    title: "Location",
    subtitle: "Nagpur, India • Open for Remote and Onsite",
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/location.png",
    url: "https://maps.app.goo.gl/kzAK39WxDgD2sUWy9"
  },
  {
    title: "Email",
    subtitle: "pratikyawalkar71@gmail.com",
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/email.png",
    url: "mailto:pratikyawalkar71@gmail.com"
  },
  {
    title: "Working Hours",
    subtitle: "Standard 9:30 to 15:30 hours (Flexible)",
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/workinghours.png",
    url: "#contact"
  },
  {
    title: "Instagram",
    subtitle: "Connect with me personally",
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/instagram.png",
    url: "https://www.instagram.com/yawalkar.pratik_370"
  },
  {
    title: "Phone",
    subtitle: "+91-7016621949",
    image: "https://github.com/noob-starter/portfoliojava/blob/main/urls/banners/languages/phone.png",
    url: "tel:+917016621949"
  }
];

export const defaultAddresses = [
  {
    type: "Home",
    street: "33, Ingle Layout, Bhamti Ring Road",
    landmark: "Near Nageshwar Mandir",
    city: "Nagpur",
    state: "Maharashtra",
    country: "India",
    pincode: "440022",
    email: "pratikyawalkar71@gmail.com",
    phone: "+91-7016621949",
    url: "https://maps.app.goo.gl/kzAK39WxDgD2sUWy9"
  }
];
