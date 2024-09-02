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
import next from '../Assets/Image/Skills/next.png'
import postman from '../Assets/Image/Skills/postman.svg'
import mui from '../Assets/Image/Skills/mui.png'
import socketIo from '../Assets/Image/Skills/socketIo.svg'
import react from '../Assets/Image/Skills/react.svg'

import sjbit from '../Assets/Image/Education/sjbit.jpeg'
import puc from '../Assets/Image/Education/puc.gif'
import school from '../Assets/Image/Education/jnv.jpeg'




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
    {
        name:"JSON",
        icons:json
    },
    // {
    //     name:"Axios",
    //     icons:''
    // },
    {
        name:"Socket.IO",
        icons:socketIo
    },
    {
        name:"React",
        icons:react
    },
    {
        name:"Next.js",
        icons:next
    },
    {
        name:"Material UI",
        icons:mui
    },
    {
        name:"Git",
        icons:git
    },
    {
        name:"GitHub",
        icons:github
    },
    {
        name:"Bitbucket",
        icons:bitbucket
    },
    {
        name:"Postman",
        icons:postman
    },
    {
        name:"VS Code",
        icons:vscode
    },
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
    {
        icon:school,
        name:"Jawahar Navodaya Vidyalaya, | Gajanuru, Shivamogga, Karnataka, India",
        course:"High school",
        duration:"2009 - 2013",
        about:"From 6th to 10th grade, I built a strong foundation in academics, excelling in Mathematics and Science. I also broadened my skills through participation in sports, art, music, and social projects, which enhanced my creativity, teamwork, and problem-solving abilities."
    }
]

export { skills, education};