import { COLORS } from '@/constants/vars';

import MobileWebPhoto from '@/images/js-Images/general/mobile-web-app.jpg';
import ApiPhoto from '@/images/js-Images/general/api.jpg';
import DataPhoto from '@/images/js-Images/general/data-analytics.jpg';
import TroopLogo from '@/images/js-Images/general/troop.png';
import ISWADLogo from '@/images/js-Images/general/iswad.png';
import CanStartCoLogo from '@/images/js-Images/general/canstartco.jpeg';
import BaseDesignProject from '@/images/js-Images/general/basedesign-project.jpg';
import DockerizedProject from '@/images/js-Images/general/dockerized-project.jpg';
import TroopProject from '@/images/js-Images/general/troop-project.jpg';
import CryptoCheckProject from '@/images/js-Images/general/crypto-check-app.jpeg';
import MyPhoto from '@/images/js-Images/general/myProfilePhoto.jpg';

export const LANDING_TRIANGLE_CSS_CONFIG = {
  size: 50,
  color: COLORS.themeThree,
  direction: 'right'
};

export const LANDING_TRIANGLE_CSS_CONTAINER_UID = 'landingTriangle';

export const ARRAY_OF_MY_SKILLS = [
  'Software Developer',
  'Full Stack Developer',
  'Web App Developer',
  'Mobile App Developer'
];

export const ABOUT_ME = (Paragraph) => (
  <>
    <Paragraph>
      I am a passionate software developer with a strong analytical mindset who really enjoys
      dealing with different challenges in the world of computer science and information technology.
      I am focused on the development of web/mobile applications based on artificial intelligence. I
      am able to take all the required steps of smart application development, including data
      analysis, machine learning implementation, API development, and front-end development, to
      build a highly scalable application.
    </Paragraph>
    <Paragraph>
      I am open to any new exciting job opportunities to expand my knowledge as well as my network
      in in the industry of technology.
    </Paragraph>
  </>
);

export const My_PERSONAL_INFO = [
  { iconType: 'envelope', value: 'mmmohajer70@gmail.com' },
  { iconType: 'phone-fill', value: '+1(226)977-0855' },
  { iconType: 'location-fill', value: 'Ottawa, ON, Canada' }
];

export const TOP_SKILLS = [
  {
    photo: MobileWebPhoto,
    skill: 'Web/Mobile App Development',
    proficiencyPercentage: 90,
    yearsOfExperience: 4,
    listOfSkills: [
      { title: 'Html', percentage: 85 },
      { title: 'Sass & Css', percentage: 80 },
      { title: 'Java Script', percentage: 75 },
      { title: 'React & Redux', percentage: 80 },
      { title: 'Next.js', percentage: 70 }
    ],
    progressBarUID: 'frontEndID'
  },
  {
    photo: ApiPhoto,
    skill: 'API Development',
    proficiencyPercentage: 80,
    yearsOfExperience: 2,
    listOfSkills: [
      { title: 'Django Rest Framework', percentage: 80 },
      { title: 'Flask Rest API', percentage: 75 },
      { title: 'Node.js-Express', percentage: 65 },
      { title: 'Postman', percentage: 85 }
    ],
    progressBarUID: 'APIID'
  },
  {
    photo: DataPhoto,
    skill: 'Data Analytics',
    proficiencyPercentage: 65,
    yearsOfExperience: 1.5,
    listOfSkills: [
      { title: 'Numpy', percentage: 70 },
      { title: 'Pandas', percentage: 75 },
      { title: 'scikit-learn', percentage: 50 },
      { title: 'Matplotlib', percentage: 60 },
      { title: 'seaborn', percentage: 75 }
    ],
    progressBarUID: 'AIUID'
  }
];

export const EXPERIENCE = [
  {
    logo: TroopLogo,
    company: 'Troop Impact Inc.',
    companyWebsite: 'https://hitroop.com',
    role: 'Lead Software Developer',
    detailsList: [
      'Working as a full stack Django-react app developer in an agile environment',
      'Development of a slack bot and integrate it via Troop App from scratch, in less than one month that could increase the participation rate of employees.',
      'Constantly bug fixing and features improvement to the business/admin dashboard and making the dashboard looks much handier.',
      'Leading some of sprint plan meeting and distributing tasks among all existing developers.',
      'Stripe integration with Troop application for online purchases that could generate that could generate more revenues for business.',
      'Management of JIRA tickets, creating some backlogs, and prioritizing tasks based on the performance and time needed to complete a task.'
    ],
    period: 'Dec 2021 - Current'
  },
  {
    logo: ISWADLogo,
    company: 'ISWAD Inc.',
    companyWebsite: 'https://iswad.tech',
    role: 'Principal CEO',
    detailsList: [
      'Development of Robo-Reader application that will help users to find the most relevant information about any topics in a time-saving manner.',
      'Development of a clean and highly scalable base design react repository that can be integrated with any new projects to make coding much faster. This repository consists of multiple reusable components that are fully flexible and can be easily modified project by project.',
      'Development of a fully scalable dockerized react-django application that can help us to complete a project in a much faster way. This project is used as a fundamental platform for our team to work on any new projects and it is enormously help us to have the same language and same pattern on the development of a new feature.'
    ],
    period: 'Dec 2021 - Current'
  },
  {
    logo: CanStartCoLogo,
    company: 'Canada Startup Company',
    companyWebsite: 'https://canstartco.com',
    role: 'Junior Software Developer',
    detailsList: [
      'Development of well-written pieces of code in VSCode to build a MERN Stack application in an agile environment',
      'Using react.js and Bootstrap to develop a fully responsive graphical user interface',
      'Using asymmetric cryptographic algorithm for secure data transmission.',
      'Development of third-party login/registration and using SendGrid SMTP services to send emails to the users.'
    ],
    period: 'Dec 2021 - Current'
  }
];

export const PROJECTS = [
  {
    photo: BaseDesignProject,
    title: 'Base Design',
    codeLink: 'https://github.com/mmmohajer/baseDesign'
  },
  { photo: TroopProject, title: 'Troop', themeLink: 'https://app.hitroop.com/login' },
  {
    photo: DockerizedProject,
    title: 'Automated Structure',
    codeLink: 'https://github.com/mmmohajer/dockerizednextdjango'
  },
  { photo: CryptoCheckProject, title: 'Crypto Check', themeLink: 'https://canstartco.com/project' }
];

export const TESTIMONIALS = [
  {
    quote: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    photo: MyPhoto,
    name: 'Mohammad Mohajer',
    career: 'Software Developer',
    email: 'mmmohajer70@gmail.com'
  },
  {
    quote: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    photo: MyPhoto,
    name: 'Mohammad Mohajer',
    career: 'Software Developer',
    email: 'mmmohajer70@gmail.com'
  },
  {
    quote: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    photo: MyPhoto,
    name: 'Mohammad Mohajer',
    career: 'Software Developer',
    email: 'mmmohajer70@gmail.com'
  },
  {
    quote: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    photo: MyPhoto,
    name: 'Mohammad Mohajer',
    career: 'Software Developer',
    email: 'mmmohajer70@gmail.com'
  },
  {
    quote: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    photo: MyPhoto,
    name: 'Mohammad Mohajer',
    career: 'Software Developer',
    email: 'mmmohajer70@gmail.com'
  }
];
