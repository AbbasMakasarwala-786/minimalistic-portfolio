export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
  { name:"Experience",link:'#Experience'}
];

export const gridItems = [
  {
    id: 1,
    title: "I craft intelligent solutions with clarity, precision, and impact ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:text-xs lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "I turn ideas into intelligent systems and playful experiences",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together ?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Personal AI Agent",
    des: "This is a personal AI agent that can automate your daily task like sending tweets creating documents,Summarizing Emails,doing research and much more",
    img: "/AI Agent.png",
    iconLists: ["/langgraph.png ", "/langsmith.png", "/python.png", "/groq.DEFAULT", "/gcp.png"],
    link: "https://github.com/AbbasMakasarwala-786/personal-AI-Agent-advanced-",
  },
  {
    id: 2,
    title: "Anime Personalized Engine",
    des: "Built a hybrid anime recommendation system with MLOps best practices — experiment tracking, model/data versioning, containerization, and CI/CD — ensuring scalability, reproducibility, and seamless deployment.",
    img: "/Anime Recommender.png",
    iconLists: ["comet-ml.jpeg", "/ml-flow.jpeg", "/dag.jpeg", "/docker.png", "/gcp.png",'gitlb.png'],
    link: "https://github.com/AbbasMakasarwala-786/Anime-Recommender-pipeline",
  },
  {
    id: 3,
    title: "LipNet: End-to-End Sentence-Level Lip Reading",
    des: "Developed an end-to-end LipNet model using CNNs and LSTMs to achieve sentence-level lip reading with 95% accuracy.",
    img: "/lipnet.png",
    iconLists: ["/python.png", "/tensorflow.png", "/nn.png", "/pytorch.png"],
    link: "",
  },
  {
    id: 4,
    title: "Vehicle Segmentation and Real-Time Speed Detection",
    des: "Vehicle Segmentation and Real-Time Speed Detection: Developed a 98% accurate Vehicle Segmentation Model (U-Net) and fine-tuned YOLOv8 for high-speed, real-time vehicle detection in video streams.",
    img: "/speed_detection.png",
    iconLists: ["/tensorflow.png", "/roboflow.png", "/streamlit.png", "/yolo.png",'/ultralytics.jpeg'],
    link: "",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Machine Learning Intern",
    company:"Caprae Capitals Partners",
    desc:  `Engineered backend APIs using Flask, Pandas, and NumPy for an AI-powered financial report SaaS, serving 
            1,000+ users and streamlining report generation. Developed data pipelines to automate 
            100+ KPI calculations and implemented AI-driven PDF reporting using models like DeepSeek, Grok, and Claude. This work drastically cut manual financial commentary preparation time by 
            85% and reduced overall report preparation from hours to minutes.`,
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Data Science Intern",
    company:"Celebal Technologies",
    desc: `Developed a Vehicle Segmentation Model using the U-Net architecture, achieving 98% accuracy and improving the previous baseline by 3%. I also fine-tuned YOLOv8 for real-time vehicle speed detection in live video streams. This significantly boosted both detection accuracy and processing speed for critical traffic monitoring applications.`,
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Intern",
    company:"Acmegrade",
    desc: "Gained hands-on experience and foundational knowledge in Artificial Intelligence and Machine Learning using Python and Scikit-Learn",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:'https://github.com/AbbasMakasarwala-786'
  },
  {
    id: 2,
    img: "email.png",
    link:"mailto:abbasmakasarwala1@gmail.com"
  },
  {
    id: 3,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/abbas-makasarwala"
  },
  {
    id: 4,
    img: "/resume.png",
    link:"https://drive.google.com/file/d/1LIRuPn9X38nfr6_v1v2XjQc-eoXkZ18P/view?usp=drivesdk"
  },
];