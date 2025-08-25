import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  tcs,
  tekg,
  bitlance,
  java,
  python,
  aws,
  ansible,
  mysql,
  pwa,
  ewaste,
  android
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud Engineer",
    icon: web,
  },
  {
    title: "Devops Engineer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Ansible",
    icon: ansible,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Technology Associate",
    company_name: "TekGeminus Solutions",
    icon: tekg,
    iconBg: "#383E56",
    date: "March 2023 - June 2023",
    points: [
      "Worked on Oracle C2M Billing Systems using Groovy and PL/SQL; optimized SQL queries reducing query execution time by 40%.", 
      "Reviewed and documented functional requirements, improving solution traceability and design accuracy.", 
      "Created automated scripts for billing simulations and payment workflows, improving testing turnaround by 25%.",
    ],
  },
  {
    title: "Assistant Systems Engineer",
    company_name: "Tata Consultancy Services",
    icon: tcs,
    iconBg: "#E6DEDD",
    date: "Nov 2020 - June 2022",
    points: [
      "Built and maintained RESTful APIs and backend services with Node.js and Java for scalable applications. ",
      "Deployed serverless applications on AWS Lambda using API Gateway and S3, improving system scalability. ",
      "Designed and maintained CI/CD pipelines with Jenkins and GitHub Actions, automating builds and deployments.",
      "Conducted code reviews and pair programming sessions, reducing bugs by 20% and improving code quality. ",
      "Automated development workflows using Bash and Python scripting, accelerating delivery cycles.",
      "Collaborated closely with React frontend developers and QA teams to ensure seamless integration and product quality. ",
      "Quickly adapted to new tools and technologies, contributing to process improvements and team efficiency."
    ],
  },
  {
    title: "Android Developer Intern",
    company_name: "Bitlance Tech-hub",
    icon: bitlance,
    iconBg: "#383E56",
    date: "Dec 2019 - Mar 2020",
    points: [
      "Collaborated on the design and development of Android applications using Java and Android SDK",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I had the pleasure of working closely with Prajwal for a year on our first project as freshers at TCS. Prajwal's problem-solving skills were commendable; he navigated challenges swiftly and effectively, earning praise not only from our discerning client but also from TCS management. His dedication to his work is noteworthy, and his attention to detail contributed greatly to the project's success. I’m certain he will be a great asset to any team he’s a part of. I wish him all the very best!",
    name: "Suaad Sayyed",
    designation: "Senior Analyst",
    company: "Optimus SBR",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Prajwal is a good team player and he is able to speak up to the point with his clear communication without any hesitation. His contribution for one of the use cases involved complex things that needed more interactions/understanding with other stakeholders and his ownership for the same was commendable. With these said, hopes shall be high that he will be valuable asset in the ambience he works with.",
    name: "Gurucharan S",
    designation: "Cyber Engineer",
    company: "KPMG",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Offline Plant Recognition PWA",
    description:
      "Developed a Plant Recognition PWA for collaborative plant identification. Users record sightings (details, photo), browse sorted lists (date, category), and chat about plants (real-time, offline support).",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: pwa,
    source_code_link: "https://github.com/",
  },
  {
    name: "eWaste Rescue",
    description:
      "Developed a secure eWaste recycling and data retrieval platform using Python, Flask, React, Tailwind CSS, and MySQL, featuring QR code generation, an admin dashboard, Agile collaboration, and 85% backend test coverage with pytest.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: ewaste,
    source_code_link: "https://github.com/",
  },
  {
    name: "Advanced Android Task Management Application",
    description:
      "Led the creation of a feature-rich Android To-do app with multimedia support, geofencing, and custom templates.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "jetpack compose",
        color: "green-text-gradient",
      },
      {
        name: "android",
        color: "pink-text-gradient",
      },
    ],
    image: android,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };