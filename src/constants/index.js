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
  tcs,
  impg,
  shopify,
  otm,
  movieapp,
  mockdata,
  threejs,
  firstmile,
  softtek,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React JS Developer',
    icon: reactjs,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  // {
  //     name: "docker",
  //     icon: docker,
  // },
];

const experiences = [
  {
    title: 'Software Engineer',
    company_name: 'Softtek India Private Limited',
    icon: softtek,
    iconBg: '#E6DEDD',
    date: 'March 2025 - Present',
    points: [
      'Built a scalable invoice system using React.js and Next.js for single and bulk invoice generation.',
      'Optimized invoice workflows, reducing manual effort and improving efficiency.',
      'Developed an admin dashboard for real-time invoice tracking and reporting.',
      'Integrated REST APIs and built reusable components for scalable and maintainable architecture.',
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'First Mile Global Consultancy Pvt Ltd',
    icon: firstmile,
    iconBg: '#383E56',
    date: 'March 2024 - November 2024',
    points: [
      'Built an interactive data visualization app using React.js and Redux for real-time insights beyond Snowflake.',
      'Automated data synchronization between Snowflake and web apps, ensuring real-time accuracy and consistency.',
      'Enhanced reporting efficiency by optimizing data workflows and reducing manual effort.',
      'Developed a scalable Snowflake Native App using  Python for advanced analytics and data processing.',
    ],
  },
  {
    title: 'Fullstack Developer',
    company_name: 'IMPG Computer Programming pvt ltd',
    icon: impg,
    iconBg: '#E6DEDD',
    date: 'January 2023 - August 2023',
    points: [
      'Developed and optimized React.js components with efficient state management using Redux.',
      'Implemented new features and resolved production issues to improve application stability and performance.',
      'Built and maintained REST APIs with JWT-based authentication, handling bugs across dev and production environments.',
      'Collaborated in Agile teams to deliver features efficiently and ensure smooth development workflows.',
    ],
  },
  {
    title: 'Associate System Engineer',
    company_name: 'Tata Consultancy Services(TCS)',
    icon: tcs,
    iconBg: '#383E56',
    date: 'August 2021 - January 2023',
    points: [
      'Assisted in gathering and understanding client requirements to support development tasks.',
      'Contributed to feature development and bug fixes, ensuring smooth application functionality.',
      'Used Git for version control, including branching, merging, and pull request workflows.',
      'Collaborated with design and development teams to deliver user-friendly interfaces.',
    ],
  },
  // {
  //     title: "Full stack Developer",
  //     company_name: "Meta",
  //     icon: meta,
  //     iconBg: "#E6DEDD",
  //     date: "Jan 2023 - Present",
  //     points: [
  //         "Developing and maintaining web applications using React.js and other related technologies.",
  //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //         "Implementing responsive design and ensuring cross-browser compatibility.",
  //         "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  // },
];

const testimonials = [
  {
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    name: 'Random Name',
    designation: 'XYZ',
    company: 'ABC Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    name: 'Random Name',
    designation: 'XYZ',
    company: 'ABC Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    name: 'Random Name',
    designation: 'XYZ',
    company: 'ABC Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Ecommerce',
    description:
      'The web-based e-commerce platform facilitates online shopping, order customization, and payments. Users can choose between online transactions and cash on delivery. Sellers manage products, inventory, and get user ratings.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'express',
        color: 'pink-text-gradient',
      },
      {
        name: 'restapi',
        color: 'orange-text-gradient',
      },
    ],
    image: otm,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Movie Ticket App',
    description:
      'A web application enables users to view movie shows, local events, and book tickets online. It offers convenience and accessibility for entertainment seekers. Customize the dates and Generates the QR code once the ticket is booked',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'express',
        color: 'pink-text-gradient',
      },
      {
        name: 'scss',
        color: 'orange-text-gradient',
      },
    ],
    image: movieapp,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Mock Data',
    description:
      "A basic React app to showcase the given dummy data by adding a beautiful interface, backend part is handled in node and express, created the restapi's  and also added the search functionality, partitioned the data depending on the requirements.",
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'express',
        color: 'green-text-gradient',
      },
      {
        name: 'restapi',
        color: 'pink-text-gradient',
      },
    ],
    image: mockdata,
    source_code_link: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
