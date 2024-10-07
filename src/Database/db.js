import html from '../Assets/Image/Skills/html.svg';
import css from '../Assets/Image/Skills/css.svg';
import tailwind from '../Assets/Image/Skills/tailwind.svg';
import vscode from '../Assets/Image/Skills/vscode.svg'
import antDesign from '../Assets/Image/Skills/ant-design.svg'
import bootstrap from '../Assets/Image/Skills/bootstrap.svg'
import javascript from '../Assets/Image/Skills/Javascript.png'
import json from '../Assets/Image/Skills/json.svg'
import github from '../Assets/Image/Skills/github.svg'
import git from '../Assets/Image/Skills/git.svg'
import bitbucket from '../Assets/Image/Skills/bitbucket.svg'
import next from '../Assets/Image/Skills/next.png';
import reduxToolkit from '../Assets/Image/Skills/redux-toolkit.svg';
import postman from '../Assets/Image/Skills/postman.svg'
import mui from '../Assets/Image/Skills/mui.png'
import socketIo from '../Assets/Image/Skills/socketIo.svg'
import react from '../Assets/Image/Skills/react.svg'

import sjbit from '../Assets/Image/Education/sjbit.jpeg'
import puc from '../Assets/Image/Education/puc.gif'
import school from '../Assets/Image/Education/jnv.jpeg'

import ggLogo from '../Assets/Image/Experience/gg-logo.svg'





const skills = [
    {
        name:"HTML5",
        icons:html
    },
    {
        name:"CSS3",
        icons:css
    },
    // {
    //     name:"Tailwind",
    //     icons:
    // },
    {
        name:"Material Tailwind",
        icons:tailwind
    },
    {
        name:"Ant Design",
        icons:antDesign
    },
    {
        name:"Bootstrap",
        icons:bootstrap
    },
    {
        name:"Javascript",
        icons:javascript
    },
    // {
    //     name:"JSON",
    //     icons:json
    // },
    // {
    //     name:"Axios",
    //     icons:''
    // },
    // {
    //     name:"Socket.IO",
    //     icons:socketIo
    // },
    {
        name:"React",
        icons:react
    },
    {
        name:"Next.js",
        icons:next
    },
    {
        name:"Redux",
        icons:reduxToolkit
    },
    {
        name:"Redux Toolkit",
        icons:reduxToolkit
    },
    {
        name:"Material UI",
        icons:mui
    },
    {
        name:"Git",
        icons:git
    },
    // {
    //     name:"GitHub",
    //     icons:github
    // },
    // {
    //     name:"Bitbucket",
    //     icons:bitbucket
    // },
    // {
    //     name:"Postman",
    //     icons:postman
    // },
    // {
    //     name:"VS Code",
    //     icons:vscode
    // },
]

const education = [
    {
        icon:sjbit,
        name:"SJB Institute of Technology | Bengaluru, Karnataka, India.",
        course:"Bachelor of Engineering - Computer Science and Engineering",
        duration:"2016 - 2020",
        about:"At SJBIT College, I engaged in coursework on algorithms, data structures, and software engineering, highlighted by a web app project for real-time collaboration. This experience sharpened my coding and teamwork skills, preparing me to tackle real-world challenges."
    },
    {
        icon:puc,
        name:"Kumadvathi Science and Commerce PU College | Shivamogga, Karnataka, India.",
        course:"Pre-university college - Science - PCMB",
        duration:"2014 - 2016",
        about:"During my PUC, I focused on core Science subjects Physics, Chemistry, Mathematics, and Biology which built a strong foundation for my future studies. My participation in science related events and projects fueled my passion for scientific exploration and sharpened my critical thinking skills."
    },
    // {
    //     icon:school,
    //     name:"Jawahar Navodaya Vidyalaya, | Gajanuru, Shivamogga, Karnataka, India",
    //     course:"High school",
    //     duration:"2009 - 2013",
    //     about:"From 6th to 10th grade, I built a strong foundation in academics, excelling in Mathematics and Science. I also broadened my skills through participation in sports, art, music, and social projects, which enhanced my creativity, teamwork, and problem-solving abilities."
    // }
]

const experience = [
    {
        logo:ggLogo,
        link:"https://globalgarner.com/",
        jobProfile:"React Developer",
        Company:"Global Garner Sales Services Limited",
        duration:"July 2021 - Present",
        skills:["HTML5", "CSS3", "Tailwind", "Material Tailwind","node-sass", "Javascript", "React", "Git", "GitHub", "Bitbucket", "Postman","Ant Design", "Bootstrap","Material UI"],
        about:[
            "Engineered a resilient web application, employing React.js, Redux, Material-UI (MUI), Tailwind CSS, and dynamic routing, to facilitate user interaction on Global-garner <b class='text-white cursor-pointer hover:underline'><a href='https://globalgarner.com/' target='_blank'>https://globalgarner.com/</a></b>. The platform hosts over <b class='text-white'> 20+ services </b> and having user-base <b class='text-white'> 1 Lakh </b>.",
            "Designed and managed various services including Brands vouchers, lab tests, ﬂight & bus bookings by utilizing <b class='text-white'> Reusable components </b> along with <b class='text-white'> Custom hooks </b> , Higher order components , <b class='text-white'>Skeleton eﬀect/Shimmer eﬀect , Inﬁnite scrolling, Dynamic API handing </b>.",
            "Implemented a cart system allowing users to add and manage items across diﬀerent services seamlessly. Developed a common utility to <b class='text-white'>manage multiple payment gateways, wallet systems, and coin redemption,</b> on checkout along with <b class='text-white'>dynamic routing </b> & and also handle private routes/Unauthorized routes.",
            "Integrated <b class='text-white'>Seat mapping </b> functionality for services requiring seat selection, ensuring a smooth booking experience for users. Managed concurrency for seat selection for ticket booking.",
            "Implemented a <b class='text-white'>Tree structure </b> for cashback and commission distribution, facilitating transparent and eﬃcient reward systems for users and parents.",
            "Utilized technologies such as <b class='text-white'>React.js, Redux, SCSS, Tailwind CSS, Bootstrap, Axios, Firebase, and Git </b> to develop and maintain the platform."
        ]
    }
]

export { skills, education, experience };