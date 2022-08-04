import NajotLogo from "assets/images/logos/najotlogo.png";
import FreelanceLogo from "assets/images/logos/freelance.png";
import figma from "assets/images/skills/figma.png";
import vscode from "assets/images/skills/vscode.png";
import react from "assets/images/skills/react.png";
import ruby from "assets/images/skills/ruby.png";
import rails from "assets/images/skills/rails.png";
import javascript from "assets/images/skills/javascript.png";
import typescript from "assets/images/skills/typescript.png";
import html5 from "assets/images/skills/html-5.png";
import css3 from "assets/images/skills/css3.png";
import python from "assets/images/skills/python.png";
import bootstrap from "assets/images/skills/bootstrap.png";
import postgres from "assets/images/skills/postgresql.png";
import redis from "assets/images/skills/redis.png";
import mysql from "assets/images/skills/mysql.png";
import heroku from "assets/images/skills/heroku.png";
import docean from "assets/images/skills/digital-ocean.png";
import aws from "assets/images/skills/aws.png";
import nginx from "assets/images/skills/nginx.png";
import CodeCraftLogo from 'assets/images/logos/codecraft.png';

export const companies = [
  {
    title: "Najot Ta'lim",
    alt: "PS image",
    role: "Second Teacher for \"dotNET\" groups",
    period: "05/2022 - Present",
    skills: ["Asp.Net", "WPF", "C# core", "PostgreSQL", "MSSQL", "aws"],
    logo: NajotLogo
  },
  {
    title: "Freelance",
    alt: "BT image",
    role: "Software Engineer",
    skills: ["ruby", "rails", "typescript", "javascript", "react", "aws"],
    period: "2021 - Present",
    logo: FreelanceLogo
  },
];

export const institutes = [
  {
    short_title: "Codecraft.uz",
    title: "CodeCraft.uz",
    alt: "Nuces image",
    role: "",
    skills: ["AppInventor (constructor for Android applications)", "Scratch (constructor)", "basic programming consepts"],
    period: "2015 - 2016",
    startingYear: "2015",
    logo: CodeCraftLogo,
    awards: [
      {
        title: "Speed Programming Battle",
        description:
          "Won speed programming battle which held at FAST - NUCES.",
        date: "May 1, 2015"
      },
      {
        title: "Silver Medal",
        description:
          "This medal was awarded to me by FAST - NUCES for getting a CGPA of 3.9 in 2nd semester.",
        date: "May 1, 2014"
      },
      {
        title: "Speed Programming Battle",
        description:
          "Won speed programming battle which held at FAST - NUCES.",
        date: "Nov 1, 2013"
      }
    ]
  },
  {
    short_title: "Govt Degree College",
    title: "Govt Degree College",
    alt: "college image",
    role: "FSC",
    skills: ["mathematic", "chemistry", "physics"],
    period: "2011 - 2013",
    startingYear: "2011",
    logo: ""
  }
];

export const skills = [
  {
    name: "Ruby on Rails",
    description: "Web development",
    link: "https://rubyonrails.org/",
    type: "development",
    image: rails
  },
  {
    name: "React",
    description: "Web development",
    link: "https://reactjs.org/",
    type: "development",
    image: react
  },
  {
    name: "Ruby",
    description: "Web development, scrapping",
    link: "https://www.ruby-lang.org/en/",
    type: "development",
    image: ruby
  },
  {
    name: "Python",
    description: "Web development, scrapping",
    link: "https://www.python.org/",
    type: "development",
    image: python
  },
  {
    name: "Javascript",
    description: "Web development",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    type: "development",
    image: javascript
  },
  {
    name: "Typescript",
    description: "Web development",
    link: "https://www.typescriptlang.org/",
    type: "development",
    image: typescript
  },
  {
    name: "Html5",
    description: "Web layouts",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    type: "development",
    image: html5
  },
  {
    name: "Css3",
    description: "Web design",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    type: "design",
    image: css3
  },
  {
    name: "Bootstrap",
    description: "Web design",
    link: "https://getbootstrap.com/",
    type: "design",
    image: bootstrap
  },
  {
    name: "Postgres",
    description: "Database",
    link: "https://www.postgresql.org/",
    type: "database",
    image: postgres
  },
  {
    name: "Mysql",
    description: "Database",
    link: "https://www.mysql.com/",
    type: "database",
    image: mysql
  },
  {
    name: "Redis",
    description: "Database",
    link: "https://redis.io/",
    type: "database",
    image: redis
  },
  {
    name: "Heroku",
    description: "Devops",
    link: "https://www.heroku.com/",
    type: "devops",
    image: heroku
  },
  {
    name: "AWS",
    description: "Devops",
    link: "https://aws.amazon.com/",
    type: "devops",
    image: aws
  },
  {
    name: "Digital Ocean",
    description: "Devops",
    link: "https://www.digitalocean.com/",
    type: "devops",
    image: docean
  },
  {
    name: "Nginx",
    description: "Web server",
    link: "https://www.nginx.com/",
    type: "devops",
    image: nginx
  },
  {
    name: "Visual Studio Code",
    description: "Code editor of choice",
    link: "https://code.visualstudio.com/",
    type: "development",
    image: vscode
  },
  {
    name: "Figma",
    description: "Collaborative Design",
    link: "https://www.figma.com/",
    type: "design",
    image: figma
  }
];
