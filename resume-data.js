/* =====================================================================
   RESUME DATA
   ===================================================================== */

const resumeData = {

  // ---------- BASIC INFO ----------
  name: "Mahrukh Owais",
  role: "Robotics & Intelligent Systems Engineer",
  tagline: "Robotics & Intelligent Systems student building at the intersection of automation, AI, and systems engineering.",
  about: "Motivated undergraduate in Robotics & Intelligent Systems at Bahria University with hands-on expertise in kinematics, path planning, and automation. Currently interning with DecodeLabs on advanced robotics projects. Proficient in ROS 2, Gazebo, Python, C++, and MATLAB, with additional cross-functional experience in sales, client relations, and digital/technical skills.",

  // ---------- HERO SLIDESHOW ----------

  heroSlides: [
    { icon: "arm", title: "Robotics Engineering", desc: "6-DOF arm kinematics, path planning & motion control" },
    { icon: "brain", title: "Artificial Intelligence", desc: "Computer vision, NLP, and machine learning models" },
    { icon: "gear", title: "Industrial Automation", desc: "PLC logic, FSMs, and safety-critical control systems" },
    { icon: "code", title: "Full-Stack Builder", desc: "Shipping projects end-to-end, from idea to deployment" }
  ],

  // ---------- CONTACT ----------
  contact: {
    email: "maharukhh1@gmail.com",
    github: "https://github.com/maharukhh",
    linkedin: "https://linkedin.com/in/mahrukh-owais-49a8b7315"
  },

  // ---------- EXPERIENCE & EDUCATION ----------
  timeline: [
    {
      type: "Experience",
      title: "Machine Learning Fundamentals Intern",
      place: "NeuroFive Solutions",
      duration: "16 Jul 2026 — 26 Aug 2026 · Remote",
      desc: "Selected internship covering core machine learning fundamentals, real-time projects, and mentorship from industry experts."
    },
    {
      type: "Experience",
      title: "Full Stack Web Development Intern",
      place: "NeuroFive Solutions",
      duration: "16 Jul 2026 — 26 Aug 2026 · Remote",
      desc: "Selected internship focused on full stack web development, real-time projects, and mentorship from industry experts."
    },
    {
      type: "Experience",
      title: "Artificial Intelligence (AI) Intern",
      place: "Decode Labs",
      duration: "7 Jul 2026 — 7 Aug 2026 · Remote",
      desc: "AI track internship focused on assigned projects, milestone delivery, and mentor-led sessions. Awarded a verified Certificate of Completion and Letter of Recommendation on successful completion."
    },
    {
      type: "Experience",
      title: "Online Internship — Robotics & Automation",
      place: "DecodeLabs",
      duration: "Jun 2026 — Jul 2026 . Remote",
      desc: "6-DOF robotic arm kinematics & inverse kinematics, path planning & trajectory generation, ROS 2 and Gazebo simulation with collision detection, motion control & hardware interfaces."
    },
    {
      type: "Experience",
      title: "Sales Agent — Real Estate & Property Services",
      place: "4 Direction Developments, Dubai",
      duration: "Jan 2026 — Jun 2026",
      desc: "Client communication & relationship management, lead management & sales coordination."
    },
    {
      type: "Experience",
      title: "Lead Generator — Sales & Business Development",
      place: "Forever Dream Achievers",
      duration: "Nov 2025 — Jan 2026",
      desc: "Client prospecting, lead qualification, record management."
    },
    {
      type: "Education",
      title: "B.S. Robotics & Intelligent Systems",
      place: "Bahria University, Karachi",
      duration: "2024 — 2028",
      desc: "Undergraduate degree focused on robotics, automation, and intelligent systems."
    },
    {
      type: "Education",
      title: "HSC — Pre-Engineering",
      place: "Karachi Board of Intermediate Education",
      duration: "2023 — 2024",
      desc: ""
    },
    {
      type: "Education",
      title: "SSC — Class IX–X",
      place: "Karachi Board of Secondary Education",
      duration: "2021 — 2022",
      desc: ""
    }
  ],

  // ---------- PROJECTS ----------
  // GitHub link har card pe apne profile se generic diya hai — jab har
  // project ko alag repo mein upload kar dein, to us card ka "code" link
  // us specific repo ke URL se replace kar dein.
  projects: [
    {
      name: "Robotic Arm Kinematics & Path Planning",
      category: "Robotics Internship",
      desc: "6-DOF robotic arm simulation: forward/inverse kinematics via damped least squares, plus collision-aware trajectory generation using quintic time-scaling.",
      tags: ["Python", "NumPy", "Kinematics", "Matplotlib"],
      demo: null,
      code: "https://github.com/maharukhh",
      featured: true,
      featuredNote: "Full IK solver + smooth trajectory generation for a 6-DOF arm — the core robotics stack in one project."
    },
    {
      name: "Autonomous Mobile Robot Navigation",
      category: "Robotics Internship",
      desc: "Simulated LiDAR builds a 2D occupancy grid in real time; A* pathfinding plans routes and dynamically re-plans when unexpected obstacles appear.",
      tags: ["Python", "A* Search", "SLAM", "LiDAR Simulation"],
      demo: null,
      code: "https://github.com/maharukhh",
      featured: true,
      featuredNote: "Real-time mapping and re-planning — the closest thing here to a real autonomous-robot pipeline."
    },
    {
      name: "PLC-Based Conveyor Sorting System",
      category: "Robotics Internship",
      desc: "Industrial control logic for a sorting conveyor: full I/O mapping, a finite state machine, debounce/edge-detection, and hardwired E-Stop safety interlocks.",
      tags: ["Python", "PLC Logic", "FSM", "Automation"],
      demo: null,
      code: "https://github.com/maharukhh"
    },
    {
      name: "Rule-Based AI Chatbot",
      category: "AI Internship",
      desc: "Dictionary-driven chatbot with O(1) intent lookup (no if-elif ladder), two-stage intent mapping, and a continuous conversation loop.",
      tags: ["Python", "NLP Basics", "Dictionaries"],
      demo: null,
      code: "https://github.com/maharukhh"
    },
    {
      name: "Iris Flower Classification",
      category: "AI Internship",
      desc: "K-Nearest Neighbors classifier on the Iris dataset following the Input→Process→Output framework, with confusion matrix and accuracy evaluation.",
      tags: ["Python", "scikit-learn", "KNN"],
      demo: null,
      code: "https://github.com/maharukhh"
    },
    {
      name: "Tech Stack Recommender",
      category: "AI Internship",
      desc: "Content-based recommendation engine that matches a user's skills to the best-fit job roles using TF-IDF vectorization and cosine similarity.",
      tags: ["Python", "scikit-learn", "TF-IDF"],
      demo: null,
      code: "https://github.com/maharukhh"
    },
    {
      name: "Building the Machine's Optic Nerve",
      category: "AI Internship",
      desc: "Computer vision pipeline with two paths: OCR text extraction (OpenCV + Tesseract) and object detection with a MobileNet-SSD deep learning model, both gated at ≥80% confidence.",
      tags: ["Python", "OpenCV", "OCR", "Object Detection"],
      demo: null,
      code: "https://github.com/maharukhh",
      featured: true,
      featuredNote: "Two-path CV pipeline (OCR + deep-learning detection) with a confidence gate — the strongest AI/ML build."
    },
    {
      name: "Reinforcement Learning Game Agent",
      category: "AI Game Development",
      desc: "Tabular Q-learning agent that learns to navigate a grid world from start to goal purely through trial-and-error reward signals — epsilon-greedy exploration, no hardcoded path.",
      tags: ["Python", "Q-Learning", "Reinforcement Learning"],
      demo: null,
      code: "https://github.com/maharukhh/AI-game-projects/tree/main/Reinforcement%20Learning%20Game%20Agent"
    },
    {
      name: "3D Game Simulation (from scratch)",
      category: "AI Game Development",
      desc: "A minimal 3D engine built with no 3D library — manual perspective projection, rotation matrices, and a flyable first-person camera rendering wireframe cubes.",
      tags: ["Python", "3D Math", "Projection", "Camera Control"],
      demo: null,
      code: "https://github.com/maharukhh/AI-game-projects/tree/main/3D%20Game%20Simulation"
    },
    {
      name: "Snake Game with AI",
      category: "AI Game Development",
      desc: "Classic Snake with a BFS autopilot that routes to the food while avoiding its own body, falling back to a flood-fill safety check when no path exists.",
      tags: ["Python", "BFS", "Pathfinding", "Pygame"],
      demo: null,
      code: "https://github.com/maharukhh/AI-game-projects/tree/main/Snake%20Game%20with%20AI"
    },
    {
      name: "Tower Defense Game AI",
      category: "AI Game Development",
      desc: "Enemies pathfind through a maze with BFS and reroute live when towers block their path, while towers auto-target the nearest enemy in range.",
      tags: ["Python", "BFS", "Real-time AI"],
      demo: null,
      code: "https://github.com/maharukhh/AI-game-projects/tree/main/Tower%20Defense%20Game%20AI"
    },
    {
      name: "Object Detection System",
      category: "Detection & Classification",
      desc: "Identifies and classifies objects in images using computer vision and a trained detection model.",
      tags: ["Python", "OpenCV", "Computer Vision"],
      demo: null,
      code: "https://github.com/maharukhh/AI-detection-systems/tree/main/Object%20Detection%20System"
    },
    {
      name: "Fake News Detector",
      category: "Detection & Classification",
      desc: "Classifies news articles as genuine or fake using text analysis and a supervised ML classifier.",
      tags: ["Python", "scikit-learn", "Text Classification"],
      demo: null,
      code: "https://github.com/maharukhh/AI-detection-systems/tree/main/Fake%20News%20Detector"
    },
    {
      name: "Spam Email Detector",
      category: "Detection & Classification",
      desc: "Flags spam emails from message content using a trained machine learning classification pipeline.",
      tags: ["Python", "scikit-learn", "Text Classification"],
      demo: null,
      code: "https://github.com/maharukhh/AI-detection-systems/tree/main/Spam%20Email%20Detector"
    },
    {
      name: "NLP Text Summarizer",
      category: "NLP & Language Tools",
      desc: "Automatically condenses lengthy text into concise summaries using Natural Language Processing techniques.",
      tags: ["Python", "NLTK", "Text Processing"],
      demo: null,
      code: "https://github.com/maharukhh/nlp-ai-tools/tree/main/NLP%20Text%20Summarizer"
    },
    {
      name: "AI Autocorrect Tool",
      category: "NLP & Language Tools",
      desc: "Detects and corrects spelling mistakes in text in real time using NLP-based logic.",
      tags: ["Python", "NLTK", "Regex"],
      demo: null,
      code: "https://github.com/maharukhh/nlp-ai-tools/tree/main/AI%20Autocorrect%20Tool"
    },
    {
      name: "Employee Salary Prediction",
      category: "Machine Learning Track",
      desc: "Predicts employee salaries from historical and demographic data using a regression model.",
      tags: ["Python", "scikit-learn", "Regression"],
      demo: null,
      code: "https://github.com/maharukhh/ml-projects/tree/main/Employee%20Salary%20Prediction"
    },
    {
      name: "Student Result Prediction",
      category: "Machine Learning Track",
      desc: "Predicts student academic performance from educational data using a trained ML model.",
      tags: ["Python", "scikit-learn", "Classification"],
      demo: null,
      code: "https://github.com/maharukhh/ml-projects/tree/main/Student%20Result%20Prediction"
    },
    {
      name: "Age Group Prediction System",
      category: "Machine Learning Track",
      desc: "A computer vision and deep learning model that predicts a person's age group from facial images.",
      tags: ["Python", "Deep Learning", "Computer Vision"],
      demo: null,
      code: "https://github.com/maharukhh/ml-projects/tree/main/Age%20Group%20Prediction%20System"
    },
    {
      name: "This Portfolio Website",
      category: "Personal Project",
      desc: "A fully data-driven personal site — one file holds all resume data and the entire page renders and updates from it automatically.",
      tags: ["HTML", "CSS", "JavaScript"],
      demo: "https://maharukhh.github.io",
      code: "https://github.com/maharukhh/maharukhh.github.io"
    },
    {
      name: "Coffee Shop Landing Page",
      category: "Web Development",
      desc: "Responsive coffee shop landing page built during the Neurofive Full Stack track — semantic layout, custom styling, and interactive JS touches.",
      tags: ["HTML", "CSS", "JavaScript"],
      demo: null,
      code: "https://github.com/maharukhh/neurofive-full-stack-web-development-track/tree/main/coffee%20shop%20landing(TASK%231)"
    },
    {
      name: "Weather App",
      category: "Web Development",
      desc: "Live weather lookup app built with vanilla JavaScript, fetching real-time conditions from a weather API and rendering them into a clean, responsive UI.",
      tags: ["HTML", "CSS", "JavaScript", "API Integration"],
      demo: null,
      code: "https://github.com/maharukhh/web-dev-basics/tree/main/Weather%20App"
    },
    {
      name: "Random Quote Generator",
      category: "Web Development",
      desc: "Interactive quote generator that pulls from an array/object dataset and updates the DOM instantly on each click, with clipboard/share-friendly output.",
      tags: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
      demo: null,
      code: "https://github.com/maharukhh/web-dev-basics/tree/main/Random%20Quote%20Generator"
    },
    {
      name: "Countdown Timer",
      category: "Web Development",
      desc: "Real-time countdown built with the Date/Time API and interval functions, handling live date calculations and dynamic UI updates.",
      tags: ["HTML", "CSS", "JavaScript", "Date/Time API"],
      demo: null,
      code: "https://github.com/maharukhh/web-dev-basics/tree/main/Countdown%20timer"
    }
  ],

  // ---------- SKILLS (grouped by category) ----------
  skillGroups: [
    { category: "Programming", items: ["Python (NumPy, SciPy)", "C++", "MATLAB","HTML", "CSS", "JavaScript"] },
    { category: "Robotics", items: ["ROS 2", "Gazebo", "Inverse/Forward Kinematics", "Path Planning", "Collision Detection", "6-DOF Arm Control"] },
    { category: "CAD / Design", items: ["SolidWorks", "AutoCAD", "Multisim", "Proteus", "Xilinx"] },
    { category: "Embedded", items: ["Arduino", "Real-time Systems", "Sensor Integration", "Motor Control"] },
    { category: "AI / ML", items: ["Neural Networks", "Computer Vision (OpenCV)", "Prompt Engineering"] },
    { category: "Software & Tools", items: ["Git/GitHub", "Linux/Ubuntu", "LaTeX"] },
    { category: "Web / Digital", items: ["HTML5", "CSS3", "JavaScript (ES6+)","React.js","Node.js", "DOM Manipulation", "Responsive Design", "Form Validation", "REST API Integration", "WordPress", "AI-Assisted Website Building", "Digital Design", "Video Editing"] },
    { category: "Business & Sales", items: ["Lead Generation", "Client Relations", "International Sales", "Real Estate", "Strategic Communication"] },
    { category: "Marketing", items: ["Social Media Marketing", "Freelancing (Fiverr)", "Content Creation"] },
    { category: "Core Competencies", items: ["Communication", "Problem Solving", "Critical Thinking", "Adaptability", "Teamwork", "Leadership", "Attention to Detail", "Analytical Thinking"] },
    { category: "Other", items: ["Data Entry", "Organizational Skills", "Fast Learner"] }
  ],

  // ---------- CERTIFICATIONS ----------
  certifications: [
    { name: "Python Course", issuer: "Kaggle", date: "Aug 2026" },
    { name: "Python (Beyond the Basics)", issuer: "10Pearls Universaty", date: "Aug 2026" },
    { name: "AI Fluency: Framework & Foundations", issuer: "Anthropic", date: "Aug 2026" },
    { name: "AI Fundamentals: Foundations for Understanding AI", issuer: "IBM SkillsBuild", date: "Aug 2026", verify: "https://www.credly.com/go/hs4VyyNX" },
    { name: "Technology Job Simulation", issuer: "Deloitte (via Forage)", date: "Jul 2026" },
    { name: "Python Developer", issuer: "SoloLearn", date: "Jul 2026" },
    { name: "Machine Learning for Beginners", issuer: "SoloLearn", date: "Jul 2026" },
    { name: "Prompt Engineering", issuer: "SoloLearn", date: "Jul 2026" },
    { name: "Fiverr & Freelancing Skills", issuer: "Learning With Earning", date: "Feb 2026" },
    { name: "Social Media Sales Marketing Specialist", issuer: "Learning With Earning", date: "Feb 2026" },
    { name: "WordPress & AI Website Building", issuer: "Learning With Earning", date: "Feb 2026" }
  ],

  // ---------- LANGUAGES ----------
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Urdu", level: "Native" },
    { name: "Turkish", level: "Intermediate (Learning)" }
  ]

};
