/* Customized portfolio data for Sandeep Kumar.
 * This file follows the original ashutosh1919/masterPortfolio data structure.
 */

// Website related settings
const settings = {
  isSplash: true, // Keep the SK splash/loading animation before the home page.
};

// SEO related settings
const seo = {
  title: "Sandeep Kumar (Choudhary) – PhD Researcher, IIT Bombay",
  description:
    "Sandeep Kumar (Sandeep Choudhary) is a PhD researcher at CMInDS, IIT Bombay, working on computer vision, medical image analysis and vision-language models. Publications at NeurIPS, BMVC and EMNLP workshops.",
  og: {
    title: "Sandeep Kumar IITB Portfolio",
    type: "website",
    url: "https://sandeepkumar96808.github.io/",
  },
};

// Home Page
const greeting = {
  title: "Sandeep Kumar",
  logo_name: "Sandeep Kumar",
  nickname: "PhD Researcher · IIT Bombay",
  profile_image_path: "sandeep_profile.png",
  subTitle:
    "PhD researcher at the Centre for Machine Intelligence and Data Science, IIT Bombay, specializing in Computer Vision, Medical Image Analysis and Vision-Language Models. I build end-to-end deep learning pipelines for CT/MRI, including 2D/3D CNNs, U-Net, nnU-Net, DICOM/NIfTI preprocessing and clinically grounded evaluation.",
  highlights: ["IIT Bombay", "Medical Imaging AI", "Computer Vision", "Vision-Language Models", "Deep Learning"],
  logoHighlights: [
    { name: "IIT Bombay", logo_path: "iitb_logo.png", link: "https://www.iitb.ac.in/" },
    { name: "CMInDS", logo_path: "iitb_logo.png", link: "https://www.minds.iitb.ac.in/" },
    { name: "CURAJ", logo_path: "curaj_logo.gif", link: "https://www.curaj.ac.in/" },
    { name: "TNSQAI", logo_path: "tnsqai_logo.jpg", link: "https://github.com/SandeepKumar96808" },
    { name: "Great Learning", logo_path: "great_learning_logo.jpg", link: "https://www.mygreatlearning.com/" },
    { name: "GeeksforGeeks", logo_path: "gfg_logo.png", link: "https://www.geeksforgeeks.org/" },
    { name: "Chegg", logo_path: "chegg_logo.png", link: "https://www.chegg.com/" },
    { name: "Coursera", logo_path: "coursera_logo.webp", link: "https://www.coursera.org/" },
  ],
  resumeLink: "/resume",
  portfolio_repository: "https://github.com/SandeepKumar96808",
  githubProfile: "https://github.com/SandeepKumar96808",
  googleScholar: "https://scholar.google.com/citations?user=5MtkzYsAAAAJ&hl=en",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/SandeepKumar96808",
    fontAwesomeIcon: "fa-github",
    iconPrefix: "fab",
    backgroundColor: "#181717",
  },
  {
    name: "Google Scholar",
    link: "https://scholar.google.com/citations?user=5MtkzYsAAAAJ&hl=en",
    fontAwesomeIcon: "fa-graduation-cap",
    iconPrefix: "fas",
    backgroundColor: "#4285F4",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sandeep-kumar-7a3a091a6/",
    fontAwesomeIcon: "fa-linkedin-in",
    iconPrefix: "fab",
    backgroundColor: "#0077B5",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_sandeeep_choudhary/?hl=en",
    fontAwesomeIcon: "fa-instagram",
    iconPrefix: "fab",
    backgroundColor: "#E4405F",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/Sandeep.kumar.96808",
    fontAwesomeIcon: "fa-facebook-f",
    iconPrefix: "fab",
    backgroundColor: "#1877F2",
  },
  {
    name: "X",
    link: "https://x.com/Sandeep47093149",
    fontAwesomeIcon: "fa-x-twitter",
    iconPrefix: "fab",
    backgroundColor: "#000000",
  },
  {
    name: "Gmail",
    link: "mailto:sandeepkumar96808@gmail.com",
    fontAwesomeIcon: "fa-envelope",
    iconPrefix: "fas",
    backgroundColor: "#D14836",
  },
  {
    name: "IIT Bombay Profile",
    link: "https://www.minds.iitb.ac.in/people/students/sandeep-kumar",
    fontAwesomeIcon: "fa-university",
    iconPrefix: "fas",
    backgroundColor: "#0E1B2C",
  },
];

const skills = {
  data: [
    {
      title: "Medical Imaging AI & Computer Vision",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building end-to-end deep learning pipelines for CT/MRI medical imaging, from DICOM/NIfTI preprocessing to model evaluation.",
        "⚡ Developing classification and segmentation systems for brain abnormality detection using 2D/3D CNNs, U-Net and nnU-Net variants.",
        "⚡ Applying clinically relevant preprocessing including windowing, skull stripping, intensity normalization and PHI anonymization.",
        "⚡ Evaluating models with Dice, IoU, sensitivity, specificity and AUC for robust medical AI reporting.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { backgroundColor: "transparent", color: "#3776AB" },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: { backgroundColor: "transparent", color: "#5C3EE8" },
        },
        {
          skillName: "Deep Learning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Machine Learning Research",
      fileName: "FullStackImg",
      skills: [
        "⚡ Working across machine learning, deep learning, computer vision, NLP, data mining and multimodal learning.",
        "⚡ Designing experiments with cross-validation, augmentation, class imbalance handling, Dice loss and Focal loss.",
        "⚡ Strong foundations from coursework in ML, advanced ML, deep learning for CV/NLP, statistics, optimization, linear systems and mathematical structures.",
      ],
      softwareSkills: [
        {
          skillName: "scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: { color: "#F7931E" },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "logos-jupyter",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "MATLAB",
          fontAwesomeClassname: "simple-icons:matrix",
          style: { color: "#0076A8" },
        },
        {
          skillName: "LaTeX",
          fontAwesomeClassname: "simple-icons:latex",
          style: { color: "#008080" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
        },
      ],
    },
    {
      title: "Programming & Application Development",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Programming experience in Python, Java, C++, C, SQL, JavaScript, HTML and CSS.",
        "⚡ Experience building APIs, web applications and data-driven solutions using Python, SQL, React, WordPress and Zoho Creator.",
        "⚡ Additional experience in feature engineering, statistical modeling, hypothesis testing, time-series analysis and data visualization.",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "vscode-icons:file-type-cpp3",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { backgroundColor: "#000000", color: "#F7DF1E" },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "WordPress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: { color: "#21759B" },
        },
      ],
    },
    {
      title: "Teaching, Mentorship & Academic Writing",
      fileName: "DesignImg",
      skills: [
        "⚡ Teaching Assistant for EE 782, DS 303 and EE 769 at IIT Bombay, supporting undergraduate and postgraduate machine learning courses.",
        "⚡ Mentoring B.Tech. and M.Tech. students in literature review, implementation, experimentation, result analysis and technical report writing.",
        "⚡ Academic experience as Assistant Professor of Computer Science at Central University of Rajasthan.",
      ],
      softwareSkills: [
        {
          skillName: "Research Writing",
          fontAwesomeClassname: "fa-solid:pen-nib",
          style: { color: "#0E1B2C" },
        },
        {
          skillName: "Teaching",
          fontAwesomeClassname: "fa-solid:chalkboard-teacher",
          style: { color: "#0E7C8C" },
        },
        {
          skillName: "Mentorship",
          fontAwesomeClassname: "fa-users",
          style: { color: "#C2347B" },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "GitHub",
      iconifyClassname: "simple-icons:github",
      style: { color: "#181717" },
      profileLink: "https://github.com/SandeepKumar96808",
    },
    {
      siteName: "Google Scholar",
      iconifyClassname: "simple-icons:googlescholar",
      style: { color: "#4285F4" },
      profileLink: "https://scholar.google.com/citations?user=5MtkzYsAAAAJ&hl=en",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: { color: "#0077B5" },
      profileLink: "https://www.linkedin.com/in/sandeep-kumar-7a3a091a6/",
    },
    {
      siteName: "IIT Bombay",
      iconifyClassname: "mdi:school",
      style: { color: "#0E1B2C" },
      profileLink: "https://www.minds.iitb.ac.in/people/students/sandeep-kumar",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indian Institute of Technology Bombay",
      subtitle: "PhD, Centre for Machine Intelligence and Data Science",
      logo_path: "iitb_logo.png",
      alt_name: "IIT Bombay",
      duration: "2024 - Present",
      descriptions: [
        "⚡ Research focus: Computer Vision, Medical Image Analysis, Vision-Language Models, Machine Learning, Deep Learning and Multimodal Learning.",
        "⚡ Relevant coursework: Introduction to Machine Learning, Advanced Topics in Machine Learning, Deep Learning for NLP, Deep Learning for Computer Vision, Engineering Statistics, Optimization, Linear Systems and Mathematical Structures for Control.",
      ],
      website_link: "https://www.iitb.ac.in/",
    },
    {
      title: "Central University of Rajasthan",
      subtitle: "Integrated Master's in Computer Science",
      logo_path: "curaj_logo.gif",
      alt_name: "Central University of Rajasthan",
      duration: "2018 - 2023",
      descriptions: [
        "⚡ CGPA: 8.40.",
        "⚡ Relevant coursework: Operating Systems, Analysis of Algorithms, Artificial Intelligence, Machine Learning, Data Mining, Natural Language Processing, DBMS, Compiler Design, Probability and Statistics and Network Security.",
        "⚡ Served as Department Representative, Mega Mess Committee Member and member of Svatva Foundation.",
      ],
      website_link: "https://www.curaj.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning Specialization",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.webp",
      certificate_link: "https://www.coursera.org/",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Machine Learning Specialization",
      subtitle: "- Internshala",
      logo_path: "internshala_logo.jpg",
      certificate_link: "https://trainings.internshala.com/",
      alt_name: "Internshala",
      color_code: "#00A5EC",
    },
    {
      title: "Google IT Support Professional Certificate",
      subtitle: "- Coursera / Google",
      logo_path: "google_logo.png",
      certificate_link: "https://www.coursera.org/professional-certificates/google-it-support",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Programming, Data Structures and Algorithms Using Python",
      subtitle: "- NPTEL",
      logo_path: "nptel_logo.png",
      certificate_link: "https://nptel.ac.in/",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Programming in Java",
      subtitle: "- NPTEL",
      logo_path: "nptel_logo.png",
      certificate_link: "https://nptel.ac.in/",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "NET-JRF Qualified",
      subtitle: "- December 2022",
      logo_path: "ugc_net_logo.png",
      certificate_link: "https://ugcnet.nta.nic.in/",
      alt_name: "NET-JRF",
      color_code: "#0E1B2C",
    },
    {
      title: "GATE 2023",
      subtitle: "- 93.13 percentile",
      logo_path: "iitb_logo.png",
      certificate_link: "https://gate.iitk.ac.in/",
      alt_name: "GATE",
      color_code: "#0E7C8C",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Research, Teaching, Academic and Professional Work",
  description:
    "My experience combines PhD research in medical imaging AI, machine learning teaching at IIT Bombay, academic instruction, project mentorship and software/data science roles across industry and education.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Research & Teaching",
      work: true,
      experiences: [
        {
          title: "PhD Researcher",
          company: "Centre for Machine Intelligence and Data Science, IIT Bombay",
          company_url: "https://www.minds.iitb.ac.in/people/students/sandeep-kumar",
          logo_path: "iitb_logo.png",
          duration: "2024 - Present",
          location: "Mumbai, Maharashtra, India",
          description:
            "Researching Computer Vision, Medical Image Analysis and Vision-Language Models with emphasis on robust deep learning pipelines for CT/MRI, model evaluation and clinically grounded AI systems.",
          color: "#0E1B2C",
        },
        {
          title: "Teaching Assistant",
          company: "Indian Institute of Technology Bombay",
          company_url: "https://www.iitb.ac.in/",
          logo_path: "iitb_logo.png",
          duration: "Jan 2025 - Present",
          location: "Mumbai, Maharashtra, India",
          description:
            "Teaching Assistant for EE 782 (Advanced Topics in Machine Learning), DS 303 (Introduction to Machine Learning) and EE 769 (Introduction to Machine Learning). Conduct tutorials, resolve doubts, assist with assignments and support evaluation for undergraduate and postgraduate students.",
          color: "#0E1B2C",
        },
        {
          title: "Teaching Assistant - Deep Learning and Generative AI",
          company: "Great Learning and IIT Bombay",
          company_url: "https://www.mygreatlearning.com/",
          logo_path: "great_learning_logo.jpg",
          duration: "Jan 2026 - Present",
          location: "India",
          description:
            "Provide teaching support for a Deep Learning and Generative AI program, including learner guidance, technical mentoring, concept clarification, neural network workflows, model training and emerging generative AI topics.",
          color: "#0073E6",
        },
        {
          title: "Research and Project Mentor",
          company: "Student Mentorship and Academic Guidance",
          company_url: "https://github.com/SandeepKumar96808",
          logo_path: "mentor_logo.svg",
          duration: "2025 - Present",
          location: "India",
          description:
            "Mentored 12 B.Tech. and M.Tech. students in academic and research projects, guiding problem formulation, literature review, implementation, experimentation, result analysis and technical report preparation.",
          color: "#0E7C8C",
        },
      ],
    },
    {
      title: "Research Internship",
      experiences: [
        {
          title: "Research Intern - Medical Imaging AI",
          company: "Transformer Neural Scan Quest Pvt. Ltd. (TNSQAI)",
          company_url: "https://github.com/SandeepKumar96808",
          logo_path: "tnsqai_logo.jpg",
          duration: "May 2025 - Feb 2026",
          location: "Remote",
          description:
            "Developed multi-class classification and segmentation pipelines for brain abnormality detection from CT scans. Curated DICOM/NIfTI datasets; implemented brain/subdural windowing, skull stripping, intensity normalization and PHI anonymization; built 2D/3D CNN, U-Net and nnU-Net variants; addressed class imbalance with Dice loss, Focal loss, augmentation and cross-validation; evaluated using Dice, IoU, sensitivity, specificity and AUC.",
          color: "#C2347B",
        },
      ],
    },
    {
      title: "Academic & Professional Roles",
      experiences: [
        {
          title: "Assistant Professor, Computer Science",
          company: "Central University of Rajasthan",
          company_url: "https://www.curaj.ac.in/",
          logo_path: "curaj_logo.gif",
          duration: "Sep 2023 - Jan 2024",
          location: "Ajmer, Rajasthan, India",
          description:
            "Delivered lectures, mentored students, supported academic instruction in computer science courses, contributed to curriculum refinement and departmental activities, and guided student projects and career development.",
          color: "#21409A",
        },
        {
          title: "Content Reviewer and Writer",
          company: "GeeksforGeeks",
          company_url: "https://www.geeksforgeeks.org/",
          logo_path: "gfg_logo.png",
          duration: "Jan 2023 - Dec 2023",
          location: "Remote",
          description:
            "Reviewed technical articles and code examples for correctness and authored tutorials on computer science topics.",
          color: "#2F8D46",
        },
        {
          title: "Software Developer",
          company: "Seva LLP",
          company_url: "https://github.com/SandeepKumar96808",
          logo_path: "seva_logo.svg",
          duration: "Feb 2023 - Aug 2023",
          location: "Ajmer, Rajasthan, India",
          description:
            "Designed, documented and maintained Zoho Creator applications; resolved bugs and implemented new features in collaboration with cross-functional teams.",
          color: "#0E7C8C",
        },
        {
          title: "Data Science Intern",
          company: "Elamigo Ecom Pvt. Ltd.",
          company_url: "https://github.com/SandeepKumar96808",
          logo_path: "elamigo_logo.jpg",
          duration: "Dec 2022 - Feb 2023",
          location: "Remote",
          description:
            "Developed data-driven solutions using Python, R and SQL.",
          color: "#F7931E",
        },
        {
          title: "WordPress Developer",
          company: "Unvoiced Media and Entertainment Pvt. Ltd.",
          company_url: "https://github.com/SandeepKumar96808",
          logo_path: "wordpress_logo.svg",
          duration: "Apr 2021 - Oct 2022",
          location: "Remote",
          description:
            "Customized themes, maintained site performance and ensured website functionality and security.",
          color: "#21759B",
        },
        {
          title: "Subject Matter Expert",
          company: "Chegg",
          company_url: "https://www.chegg.com/",
          logo_path: "chegg_logo.png",
          duration: "Nov 2020 - Jun 2021",
          location: "India",
          description:
            "Answered 1000+ computer science questions with detailed and accurate technical explanations.",
          color: "#EB7100",
        },
        {
          title: "IT Intern",
          company: "Seva Enterprise Limited",
          company_url: "https://github.com/SandeepKumar96808",
          logo_path: "seva_logo.svg",
          duration: "Jan 2021 - Mar 2021",
          location: "Ajmer, Rajasthan, India",
          description:
            "Developed Zoho-based solutions and contributed to web development tasks for the organization.",
          color: "#0E7C8C",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Selected projects across medical imaging, vision-language modeling, anomaly detection, classical machine learning, MLOps and time-series learning.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "My research uses AI to help doctors read medical images and radiology scans. I work on predicting patient survival, classifying PD-L1 status in cancer, segmenting tumors and organs, and generating radiology reports from 3D scans with vision-language models. I also study trustworthy language models and mathematical modeling.",
  avatar_image_path: "projects_image.svg",
  // Name as it appears in author lists; it is highlighted on each card.
  authorName: "Kumar, S.",
};

// type: "Conference" | "Journal" | "Workshop"
// Leave url / code / pdf empty ("") to hide that button on the card.
// logo: file in src/assets/images/venues/ (leave empty to show a text badge).
const publications = {
  data: [
    {
      id: "wasserstein-routing-wsi-neurips-2026",
      title:
        "Concept-Aware Wasserstein Routing with Vision-Language Guidance for Few-Shot WSI Classification",
      authors: ["Kumar, A.", "Das, S.", "Kumar, S.", "Atey, K.", "Sethi, A."],
      venue: "Conference on Neural Information Processing Systems",
      venueShort: "NeurIPS",
      logo: "neurips.png",
      year: 2026,
      type: "Conference",
      url: "",
      pdf: "",
      code: "",
    },
    {
      id: "omnisurvival-bmvc-2026",
      title:
        "OmniSurvival: Ensemble Mixture Density Learning for Oncology Survival Prediction",
      authors: ["Soni, V.", "Kumar, S.", "Kumar, A.", "Atey, K.", "Sekhar, A.", "Sethi, A."],
      venue: "British Machine Vision Conference",
      venueShort: "BMVC",
      logo: "bmvc.png",
      year: 2026,
      type: "Conference",
      url: "",
      pdf: "",
      code: "",
    },
    {
      id: "dts-hallucination-emnlp-2026",
      title:
        "DTS: Discriminant Truthfulness Scoring for Training-Free Hallucination Detection",
      authors: ["Atey, K.", "Bangera, S.", "Kumar, S.", "Kumar, A.", "Sethi, A."],
      venue:
        "Grounding Language Models: Learning Faithfully and Efficiently Workshop, EMNLP",
      venueShort: "EMNLP Workshop",
      logo: "emnlp.png",
      year: 2026,
      type: "Workshop",
      url: "",
      pdf: "",
      code: "",
    },
    {
      id: "allee-effect-harvesting-amensalism",
      title:
        "Dynamic Interplay of Allee Effect and Harvesting in a Diseased Amensalism Model: Unraveling Ecological Complexity",
      authors: ["Bugalia, S.", "Kumar, S.", "Tripathi, J.P.", "Martcheva, M."],
      venue: "Mathematics and Computers in Simulation (Elsevier)",
      venueShort: "MATCOM",
      logo: "elsevier.png",
      year: 2026,
      type: "Journal",
      url: "https://www.sciencedirect.com/journal/mathematics-and-computers-in-simulation",
      pdf: "",
      code: "",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Sandeep Kumar",
    profile_image_path: "sandeep_profile.png",
    description:
      "I am open to research collaborations, academic opportunities, teaching and mentorship conversations around medical imaging, computer vision, deep learning and vision-language models.",
  },
  blogSection: {
    title: "Research Profile",
    subtitle:
      "Sandeep Kumar IITB / Sandeep Choudhary IITB research profile: Computer Vision · Medical Image Analysis · Vision-Language Models · Machine Learning · Deep Learning · Multimodal Learning.",
    link: "https://www.minds.iitb.ac.in/people/students/sandeep-kumar",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Mumbai, Maharashtra, India",
    locality: "Mumbai",
    country: "India",
    region: "Maharashtra",
    postalCode: "",
    streetAddress: "IIT Bombay",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.google.com/?q=IIT+Bombay+Mumbai",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+91-9680833221",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
