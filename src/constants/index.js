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
    title: 'React.js Developer',
    company_name: 'Tata Consultancy Services(TCS)',
    icon: tcs,
    iconBg: '#383E56',
    date: 'August 2021 - January 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Fullstack Developer',
    company_name: 'IMPG Computer Programming pvt ltd',
    icon: impg,
    iconBg: '#E6DEDD',
    date: 'January 2023 - August 2023',
    points: [
      'Developed the React Js components, Virtual DOM, and command over the workflow of Redux',
      'Worked closely on Research and development project on developing and implementing new features to the project and fixing production and internal bugs',
      'creating and implementing valuable solutions, depending on the client’s requirements.',
      "Creating REST API's and Handling the API bugs in the Dev and Production environments",
      ' Proficient With the Agile Methodologies and it’s implementation.',
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'First Mile Global Consultancy Pvt Ltd',
    icon: firstmile,
    iconBg: '#383E56',
    date: 'March 2024 - Current',
    points: [
      'Developed an interactive data visualization application using React and Redux, integrated with Snowflake to deliver real-time insights and enhance accessibility for non-Snowflake users.',
      'Automated data synchronization processes with React and Redux between the Snowflake Native App and a custom web application, ensuring real-time data accuracy and significantly improving reporting efficiency.',
      'Designed and implemented a scalable Snowflake Streamlit Native App using Python, providing advanced data science and analytics capabilities for seamless data processing and interactive analysis.',
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
