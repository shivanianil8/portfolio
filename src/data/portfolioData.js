/**
 * Shivani Anil — Authentic Portfolio Data
 * Verified strictly against resume and official sources.
 */

export const PERSONAL_INFO = {
  name: "Shivani Anil",
  role: "Computer Science (Data Science) Undergraduate",
  tagline: "Curious by nature. Analytical by design.",
  bio: "I explore data, intelligent systems, and the ideas that turn complex problems into meaningful experiences.",
  location: "Kothamangalam, Kerala, India",
  college: "Mar Athanasius College of Engineering",
  degree: "B.Tech in Computer Science (Data Science)",
  period: "2024 – 2028",
  email: "shivani.ka8606@gmail.com",
  github: "https://github.com/shivanianil8",
  linkedin: "https://www.linkedin.com/in/shivani-anil8/",
};

export const PROJECTS = [
  {
    id: "urban-heat-island",
    slug: "urban-heat-island",
    title: "Urban Heat Island Explorer",
    subtitle: "Geospatial Temperature Pattern & Spatial Anomaly Analysis",
    category: "Data Science & Geospatial Analytics",
    year: "2024",
    status: "Completed Research Project",
    github: "https://github.com/shivanianil8/urban-heat-island",
    demo: null,
    summary:
      "Analyzed 5,000+ geospatial temperature records to identify urban heat patterns, microclimate variations, and spatial temperature anomalies using Python, Pandas, and NumPy, paired with interactive Folium and Matplotlib heatmaps.",
    overview:
      "Urban Heat Islands (UHIs) occur when built environments absorb and re-emit the sun's heat more intensely than surrounding rural areas. This project systematically analyzes over 5,000 spatial temperature data points to uncover micro-thermal anomalies, diurnal variance, and spatial distribution patterns.",
    problem:
      "Urban microclimates present complex non-linear spatial gradients where dense concrete clusters, asphalt roads, and sparse canopy cover create localized thermal hotspots that standard regional meteorological stations fail to resolve.",
    approach:
      "Implemented an end-to-end exploratory geospatial data analysis pipeline in Python. Cleaned raw geospatial records, handled sensor discrepancies, normalized multi-temporal readings, computed spatial variance statistics, and synthesized thermal gradient layers.",
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Folium", "Geospatial Analysis"],
    metrics: [
      { label: "Geospatial Records", value: "5,000+" },
      { label: "Core Analysis", value: "Pandas & NumPy" },
      { label: "Mapping Engine", value: "Folium & Matplotlib" },
      { label: "Domain", value: "Climate & Spatial Data" },
    ],
    verifiedNote: "Verified GitHub Repository available. Visualizations represent empirical geospatial thermal mapping workflows.",
    implementationDetails: [
      "Data ingestion pipeline normalizing 5,000+ timestamped GPS-tagged temperature sensor records.",
      "Statistical outlier rejection and IQR-based anomaly detection across urban surface zones.",
      "Multi-tier isotherm contour generation mapping ambient surface temperature deltas between 24°C and 39°C.",
      "Interactive Choropleth and HeatMap layer rendering with Folium for localized spatial exploration.",
    ],
    learnings:
      "Gained deep hands-on expertise in spatial data cleaning, handling coordinate projections, and understanding how data visualization plays a pivotal role in communicating climate and environmental science to researchers.",
    accentColor: "#E63926",
    theme: "light",
  },
  {
    id: "fairqueue",
    slug: "fairqueue",
    title: "FairQueue",
    subtitle: "Intelligent Queue Fairness Analyzer & Decision Support Platform",
    category: "Logic Programming & Full-Stack Systems",
    year: "2026",
    status: "Active Open-Source System",
    github: "https://github.com/shivanianil8/fairqueue",
    demo: "https://fairqueue-theta.vercel.app",
    summary:
      "An enterprise-grade, rule-based decision-support platform powered by First-Order Logic Programming (pure Prolog Horn clauses) and React 18 / Node.js. Solves opaque arithmetic scoring and low-urgency queue starvation through declarative, traceable reasoning.",
    overview:
      "Conventional commercial queue software calculates priority through arbitrary arithmetic formulas (e.g., score = urgency * 5 + wait * 2), creating 'black-box' priority assignments where neither citizens nor operators understand why one person was prioritized over another. Furthermore, lower-urgency visitors frequently suffer from starvation. FAIRQUEUE solves this through pure declarative First-Order Logic (Prolog Horn clauses) coupled with transparent reasoning inspection.",
    problem:
      "Opaque queue algorithms erode trust in public administration and healthcare triage, while naive priority systems induce starvation where non-critical visitors wait indefinitely as continuous higher-priority arrivals enter the queue.",
    approach:
      "Architected a dual-engine decision-support system: SWI-Prolog Horn clauses evaluate priority through relational unification and explicit cut (!) operators to enforce starvation threshold overrides. Built an enterprise React dashboard with multi-queue support (Citizen Services, Document Verification, Specialist Appointments) and Node/Express REST integration with SWI-Prolog CLI & Tau-Prolog in-process fallback.",
    techStack: [
      "Prolog (Horn Clauses)",
      "React 18",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Tau-Prolog",
    ],
    metrics: [
      { label: "Prolog Rules", value: "11 Horn Clauses" },
      { label: "Engine Fallback", value: "SWI-Prolog / Tau" },
      { label: "Multi-Queue", value: "3 Dedicated Desks" },
      { label: "Starvation Policy", value: "Guaranteed Threshold" },
    ],
    verifiedNote: "Verified GitHub Repository & Live Vercel Deployment. Full architectural and formal logic documentation suite included.",
    implementationDetails: [
      "Declarative rule engine with 11 formal Prolog Horn clauses evaluating priority deductions with transparent reasoning paths.",
      "Starvation prevention rule dynamically elevating waiting time when duration surpasses configured threshold limits.",
      "Multi-service queue routing supporting Citizen Services (CS), Document Verification (DV), and Specialist Appointments (SA).",
      "Controlled manual supervisor override with mandatory cryptographic audit trail.",
    ],
    learnings:
      "Demonstrated that symbolic AI and logic programming offer superior interpretability and auditability over heuristic arithmetic for human-critical decision-support systems.",
    accentColor: "#2563EB",
    theme: "light",
  },
  {
    id: "smart-traffic-violation",
    slug: "smart-traffic-violation",
    title: "Smart Traffic Violation Detection System",
    subtitle: "Computer Vision & Automated License Plate Recognition Pipeline",
    category: "Computer Vision & Database Architecture",
    year: "2025",
    status: "Academic Research Prototype",
    github: null,
    demo: null,
    summary:
      "Developed an automated computer vision pipeline using OpenCV for vehicle detection and license plate recognition. Engineered a structured image preprocessing workflow and integrated MySQL database for violation data storage and retrieval.",
    overview:
      "Automating road safety and traffic rule enforcement demands robust visual perception pipelines capable of isolating moving vehicles, locating plate contours under variable lighting, and indexing incident metadata into a relational schema.",
    problem:
      "Manual traffic monitoring is prone to human oversight and latency. Visual detection systems must handle environmental factors like glare, motion blur, and perspective distortion while persisting structured records for authorized review.",
    approach:
      "Built a specialized OpenCV computer vision pipeline in Python. Leveraged morphological transformations, adaptive thresholding, and contour filtering to segment license plate regions from moving vehicles. Designed a relational MySQL schema to store vehicle timestamps, plate strings, and violation status.",
    techStack: ["OpenCV", "Python", "MySQL", "Image Preprocessing", "Contour Detection"],
    metrics: [
      { label: "Vision Core", value: "OpenCV Pipeline" },
      { label: "Database", value: "MySQL Storage" },
      { label: "Preprocessing", value: "Adaptive Filtering" },
      { label: "Scope", value: "Automated Inspection" },
    ],
    verifiedNote: "Academic research prototype. Verified technologies from resume: OpenCV, Python, MySQL. No public repository published.",
    implementationDetails: [
      "Multi-stage preprocessing pipeline: grayscale conversion, bilateral noise filtering, and Otsu's adaptive thresholding.",
      "Contour analysis and aspect ratio constraints to localize candidate license plate bounding boxes.",
      "Segmented character region extraction for optical recognition matching.",
      "Normalized relational MySQL database architecture for violation logging, timestamps, and query retrieval.",
    ],
    learnings:
      "Mastered spatial image matrix manipulation, edge filtering trade-offs, and how preprocessing quality dictates downstream computer vision performance.",
    accentColor: "#E63926",
    theme: "dark",
  },
  {
    id: "pollution-hotspot-detection",
    slug: "pollution-hotspot-detection",
    title: "Pollution Hotspot Detection",
    subtitle: "Density-Based Spatial Clustering of Environmental Anomalies",
    category: "Machine Learning & Spatial Data",
    year: "2025",
    status: "Research Data Analysis",
    github: null,
    demo: null,
    summary:
      "Implemented DBSCAN (Density-Based Spatial Clustering of Applications with Noise) using Scikit-learn to discover high-density pollution zones from real-world environmental datasets without requiring pre-defined cluster counts.",
    overview:
      "Environmental pollutants do not adhere to neat spherical geometries, rendering traditional centroid-based algorithms like K-Means ineffective. This project leverages density-based spatial clustering to detect irregular pollution hotspots while isolating sensor noise.",
    problem:
      "Partitioning algorithms force arbitrary cluster counts (k) and misclassify background sensor noise as actionable pollution centers. Environmental monitoring requires discovering clusters of arbitrary shape and robustly flagging outliers.",
    approach:
      "Executed comprehensive exploratory data analysis, data cleaning, and feature normalization in Python using Pandas and Scikit-learn. Calibrated epsilon (ε) neighborhood distance and min_samples parameters via k-distance graph analysis to maximize silhouette and separation metrics.",
    techStack: [
      "Python",
      "Scikit-learn",
      "DBSCAN",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Data Cleaning",
    ],
    metrics: [
      { label: "Algorithm", value: "DBSCAN Clustering" },
      { label: "Libraries", value: "Scikit-learn & Pandas" },
      { label: "Noise Handling", value: "Robust Outlier Isolation" },
      { label: "Cluster Geometry", value: "Arbitrary Shapes" },
    ],
    verifiedNote: "Research data analysis project. Technologies verified from resume: Python, Pandas, NumPy, Scikit-learn, DBSCAN. Visualizations labeled as illustrative previews.",
    implementationDetails: [
      "End-to-end data cleaning and standard scaling of spatial and pollutant density features.",
      "K-nearest neighbor distance curve heuristic calculation to mathematically determine optimal epsilon (ε).",
      "DBSCAN model fitting isolating core points, density-reachable border points, and acoustic/sensor noise (-1 label).",
      "Spatial density visualizations illustrating high-risk environmental zones for actionable public health insights.",
    ],
    learnings:
      "Deepened practical understanding of unsupervised density estimation, spatial metrics, and the mathematical differences between centroid-based and density-based clustering paradigms.",
    accentColor: "#10B981",
    theme: "dark",
  },
  {
    id: "vyorra",
    slug: "vyorra",
    title: "Vyorra — E-Commerce Platform",
    subtitle: "Full-Stack MERN Architecture Engineering",
    category: "Full-Stack Web Development",
    year: "2026",
    status: "Internship Engineering Work",
    github: "https://github.com/shivanianil8/mern-frontend",
    backendGithub: "https://github.com/shivanianil8/mern-backend",
    demo: "https://mern-frontend-alpha-beige.vercel.app",
    summary:
      "Engineered during internship at Limenzy Technologies, Kozhikode. Built an e-commerce platform using the complete MERN stack (MongoDB, Express.js, React, Node.js) with product catalog management, cart state, and REST API integration.",
    overview:
      "Vyorra was developed as part of a MERN Stack internship at Limenzy Technologies in Kozhikode, Kerala. The application encompasses a decoupled client-server architecture with MongoDB persistence, Express routing, and dynamic React components.",
    problem:
      "Modern e-commerce necessitates seamless catalog navigation, consistent cart state synchronization, secure REST API communication, and scalable NoSQL document models for varied product schemas.",
    approach:
      "Designed a full MERN architecture from the ground up: Node.js/Express REST API with modular controllers, Mongoose schemas with indexed querying, and a modular React frontend with client-side routing, responsive UI, and robust state management.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs", "JavaScript"],
    metrics: [
      { label: "Organization", value: "Limenzy Technologies" },
      { label: "Role", value: "MERN Stack Intern" },
      { label: "Stack", value: "Complete MERN" },
      { label: "Architecture", value: "Decoupled REST API" },
    ],
    verifiedNote: "Verified Internship project (Limenzy Technologies, Jun 2026). Public repositories available for frontend and backend.",
    implementationDetails: [
      "RESTful API design with Express and Node.js implementing CRUD operations for product inventory and orders.",
      "Flexible NoSQL database modeling using MongoDB and Mongoose with schema validation.",
      "Component-driven React frontend with interactive product galleries, filtering, and responsive cart drawer.",
      "Asynchronous state orchestration and error boundary protection for resilient client experiences.",
    ],
    learnings:
      "Gained commercial engineering discipline in full-stack architecture, API contract design, deployment workflows, and professional software development practices.",
    accentColor: "#D97706",
    theme: "light",
  },
];

export const EXPERIENCE = [
  {
    role: "MERN Stack Intern",
    organization: "Limenzy Technologies",
    location: "Kozhikode, Kerala",
    period: "Jun 2026",
    type: "Industry Internship",
    description:
      "Built Vyorra, a modern e-commerce platform, leveraging the full MERN stack (MongoDB, Express.js, React, Node.js). Engineered RESTful API endpoints, integrated asynchronous client-side state, and managed database schemas.",
    highlight: "Full-Stack Web Development & Commercial API Architecture",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs"],
  },
  {
    role: "Vice Chair",
    organization: "IEEE Computer Society, MACE SB",
    location: "Kothamangalam, Kerala",
    period: "2026 – Present",
    type: "Student Leadership",
    description:
      "Elected to organize technical workshops and lead student initiatives in Data Science and Machine Learning, coordinating hands-on sessions for the student engineering community.",
    highlight: "Organized Data Science & ML workshops and technical events",
    tags: ["Leadership", "Data Science", "Machine Learning", "Workshops"],
  },
  {
    role: "Documentation Team Member",
    organization: "IEEE MACE Student Branch",
    location: "Kothamangalam, Kerala",
    period: "2025 – Present",
    type: "Technical Documentation",
    description:
      "Prepared structured technical reports, event summaries, and official documentation for institutional hackathons and symposiums.",
    highlight: "Structured technical reporting for flagship engineering events",
    tags: ["Technical Writing", "Documentation", "Event Archival"],
  },
  {
    role: "ExeCom Member & Documentation Lead",
    organization: "Artificial Intelligence Students Association (AISA)",
    location: "MACE, Kerala",
    period: "2025 – Present",
    type: "Executive Leadership",
    description:
      "Managed documentation workflows and maintained structured reporting systems for AI student initiatives and technical workshops.",
    highlight: "Managed documentation workflows for student AI initiatives",
    tags: ["AI Association", "Leadership", "Technical Workflows"],
  },
  {
    role: "Documentation Volunteer",
    organization: "MACE Model United Nations (MUN)",
    location: "Kothamangalam, Kerala",
    period: "2026",
    type: "Institutional Volunteer",
    description:
      "Maintained official procedural records and documentation for 200+ delegates across conference sessions.",
    highlight: "Maintained official records for 200+ conference delegates",
    tags: ["Procedural Archival", "Record Keeping", "Conference Operations"],
  },
  {
    role: "Sponsorship Subcore",
    organization: "Takshak Tech Fest",
    location: "MACE, Kerala",
    period: "2025",
    type: "Event Coordination",
    description:
      "Assisted in sponsor outreach and coordination for the college's annual national-level technical festival.",
    highlight: "Sponsor outreach and coordination for national tech fest",
    tags: ["Sponsorship Outreach", "Operations", "Event Coordination"],
  },
];

export const SKILL_CATEGORIES = [
  {
    id: "languages",
    category: "Programming Languages",
    description: "Core computational problem solving and algorithmic scripting.",
    skills: ["Python", "SQL", "C", "Java", "JavaScript"],
  },
  {
    id: "data-ml",
    category: "Data Science & Machine Learning",
    description: "Empirical analysis, statistical modeling, and unsupervised spatial clustering.",
    skills: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "DBSCAN Clustering",
      "Exploratory Data Analysis (EDA)",
      "Data Cleaning",
      "Feature Engineering",
      "Statistical Analysis",
      "Predictive Modeling",
    ],
  },
  {
    id: "web-systems",
    category: "Web & Full-Stack Systems",
    description: "Decoupled web applications, REST APIs, and database schemas.",
    skills: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "MERN Stack",
      "REST APIs",
    ],
  },
  {
    id: "tools",
    category: "Tools & Environments",
    description: "Development environments, version control, and computer vision tools.",
    skills: [
      "OpenCV",
      "Git",
      "GitHub",
      "Jupyter Notebook",
      "Google Colab",
      "VS Code",
      "Excel Data Analysis",
      "MySQL",
    ],
  },
];

export const EDUCATION = {
  degree: "B.Tech — Computer Science (Data Science)",
  institution: "Mar Athanasius College of Engineering",
  location: "Kothamangalam, Kerala, India",
  period: "2024 – 2028 (Expected)",
  details:
    "Curriculum focused on algorithms, data structures, linear algebra, probability, machine learning, databases, and computer systems.",
};

export const CERTIFICATIONS = [
  {
    title: "Data Analysis in Excel",
    issuer: "Coursera",
    year: "Course Certificate",
    focus: "Advanced spreadsheet modeling, statistical functions, data transformation, and analysis.",
  },
  {
    title: "Python Programming",
    issuer: "G-Tech",
    year: "Certification",
    focus: "Python programming fundamentals, data structures, and algorithmic scripting.",
  },
  {
    title: "C Programming",
    issuer: "G-Tech",
    year: "Certification",
    focus: "Low-level memory management, pointers, and foundational computer systems.",
  },
];
