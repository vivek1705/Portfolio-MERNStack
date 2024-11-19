const data = {
  name: "Vivek Vishwanath Patil",
  roles: ["UI/UX Developer", "MERN Stack Developer", "Software Developer", "Java Developer"],
  shortbio: "A highly skilled Software developer with a passion for crafting seamless user experiences. Proficient in JavaScript, React, and modern web technologies. Eager to bring ideas to life through thoughtful design and responsive interfaces.",
  briefbio: "Dedicated and detail-oriented computer science graduate seeking to leverage my skills in software development,full-stack development, as well as cloud, and database management to drive innovative projects and learn from industry experts in the tech industry.",
  profileImage: require("./gallery/mypic.jpeg"), 
  skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "MongoDB", " C/C++", "Java", "Python", "React JS", "Express", "Node.js", "Bootstrap", "MySQL", "AWS", "Google Cloud", "Problem Solving", "Time Management", "Teamwork", "Leadership"],
  resumeLink:"https://drive.google.com/file/d/1UeGSiyXz1xOIhpQE94sl1KFLFhLVnMBe/view?usp=drive_link",
  experience: [
    { company: "Neasao Tech, Pvt ltd. Kolhapur", role: "UI Developer Intern", year: "2021-2022", description: "Developed and maintained web pages using HTML, CSS, and JavaScript. Collaborated with the design team to implement responsive design and for optimizing site performance."},
    { company: "The Spark Foundation. ", role: "Data Science and Business Analytics (Virtual Intern)", year: "2022", description:"Completed various tasks using different Machine learning Algorithms. Gained valuable experience in Business Analytics, and perform Data Analysis of COVID19 cases worldwide."},
    { company: "NIIT Foundation, (DXC Technologies)", role: "Global Service Desk Trainee", year: "2022-2023", description: "Completed a hands-on training program in Global Service Desk operations, supported by DXC Technology. Gained practical experience in IT service desk management, customer support, and troubleshooting. Worked on real-world scenarios to improve communication, technical problem-solving. Enhanced skills in managing and resolving service requests and incidents in a corporate environment."},
  ],
  education: [
    { degree: "B.Tech in CSE", institute: "D Y Patil College of Engineering and Technology, Kolhapur", year: "2022" },
    { degree: "XII (12th)", institute: "CJC, Kolhapur", year: "2018" },
    { degree: "X (10th)", institute: "RCSPS, Bhogawati, kolhapur", year: "2016" },
  ],
  projects: [
    {
      image: require("./gallery/recordC++.png"),
      title: "Record Database Management System",
      techStack: ["C", "C++", "Object-Oriented Programing"],
      description: "Designed and implemented a scalable database management system using C++ and Object-Oriented Programming concepts. Implemented automated unique ID generation, CRUD functions, and persistent data storage using .txt files.",
      link: "https://github.com/vivek1705/",
    },{
      image: require("./gallery/Job-website.jpg"),
      title: "Web Application (Online Job Platform)",
      techStack: ["PHP", "JavaScript", "Object-Oriented Programing", "MySQL"],
      description: " Developed a robust Job Application System using PHP and MySQL database. Implemented essential features like job listing and application submission and user authentication.",
      link: "https://github.com/vivek1705/",
    },{
      image: "./gallery/tumor.webp",
      title: "Detection and Classification of Brain Lesions in Machine Learning",
      techStack: ["Java", "Python", "Machine Learning", "keras", "tesnerflow"],
      description: "Trained a machine learning model with 80% accuracy in predicting brain abnormalities from MRI images. Utilized Python, Java, Android Studio, Google-Colab, Machine Learning technologies. Created an Android app for efficient detection and classification.",
      link: "https://github.com/vivek1705/",
    },{
      image: "./gallery/fabrication.png",
      title: "MERN Stack Web Application (Fabrication Company Website)",
      techStack: ["React", "CSS", "JavaScript", "Express", "MongoDB", "NodeJS", "XML"],
      description: "Developed a dynamic MERN Stack web application for a Fabrication Company, utilized React, JavaScript for frontend and Node.js, express for Backend. Used MongoDB for Database.",
      link: "https://github.com/vivek1705/",
    },{
      image: require("./gallery/profile-card.png"),
      title: "Portfolio Card",
      techStack: ["React", "CSS", "JavaScript"],
      description: "A personal portfolio card showcasing my skills, details.",
      link: "https://github.com/vivek1705/",
    },{
      image: "./gallery/portfolio.png",
      title: "Portfolio Website",
      techStack: ["React", "CSS", "JavaScript"],
      description: "A personal portfolio showcasing my projects, about my academic, my personal details and skills.",
      link: "https://github.com/vivek1705/",
    },
  ],
  contact: {
    address: "Pune-411062, Maharashtra",
    phone: "+91 9763189395",
    email: "vivekvpatil1705@gmail.com",
    socialMedia: {
      twitter: "https://twitter.com/vivekpatil_17",
      linkedin: "https://linkedin.com/in/vivek-patil-b6615b190",
      github: "https://github.com/vivek1705/",
      whatsapp: "https://wa.me/9763189395", // WhatsApp link
      instagram: "https://instagram.com/vivekvpatil_17?igshid=OGQ5ZDc2ODk2ZA==", // Instagram link
      telegram: "https://t.me/Vivekpatil_17" // Telegram link
    },
  },
};

export default data;
