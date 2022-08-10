import NajotLogo from "assets/images/logos/najotlogo.png";
import FreelanceLogo from "assets/images/logos/freelance.png";
import CodeCraftLogo from 'assets/images/logos/codecraft.png';

import mssql from "assets/images/skills/mssql.png";
import sqlite from "assets/images/skills/sqlite.png";
import mysql from "assets/images/skills/mysql.png";
import postgres from "assets/images/skills/postgresql.png";

import react from "assets/images/skills/react.png";
import python from "assets/images/skills/python.png";
import csharp from "assets/images/skills/csharp.png";
import clang from "assets/images/skills/clang.png";

import linq from "assets/images/skills/linq.png";
import restful from "assets/images/skills/restapi.png";

import wpf from "assets/images/skills/wpf.png";
import aspnet from "assets/images/skills/aspnet.png";

import googlecloud from "assets/images/skills/googlecloud.png";
import heroku from "assets/images/skills/heroku.png";
import aws from "assets/images/skills/aws.png";
import nginx from "assets/images/skills/nginx.png";

import rider from "assets/images/skills/rider.png";


export const companies = [
  {
    title: "Najot Ta'lim IT school",
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
    skills: ["Asp.Net", "WPF", "heroku", "aws", "googlecloud"],
    period: "2021 - Present",
    logo: FreelanceLogo
  },
];

export const institutes = [
  {
    short_title: "Najot Ta'lim",
    title: "Najot Ta'lim IT school",
    alt: "college image",
    role: "",
    skills: ["foundation", "bootcamp"],
    period: "2021 - 2022",
    startingYear: "2021",
    logo: NajotLogo,
    awards: [
      {
          title: "Specialty grant winner",
          description:
            "Got a high score on the algorithmic programming exam",
          date: "December, 2021"
      }
    ]
  },
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
      // {
      //   title: "Speed Programming Battle",
      //   description:
      //     "Won speed programming battle which held at FAST - NUCES.",
      //   date: "May 1, 2015"
      // },
      // {
      //   title: "Silver Medal",
      //   description:
      //     "This medal was awarded to me by FAST - NUCES for getting a CGPA of 3.9 in 2nd semester.",
      //   date: "May 1, 2014"
      // },
      // {
      //   title: "Speed Programming Battle",
      //   description:
      //     "Won speed programming battle which held at FAST - NUCES.",
      //   date: "Nov 1, 2013"
      // }
    ]
  },
];

//AspNetCore, WPF
// MSSQL, PostgreSQL, SQLite, MySQL/MariaDb
// EntityFrameworkCore, Dapper
// LINQ, ADO.Net, Rest API, IoC, Swagger, Postman, Git/Github, Heroku & Aws deployments
// C, C#, Python, XAML, XML

export const skills = [
  {
    name: "PostgresSQL",
    description: "Database",
    link: "https://www.postgresql.org/",
    type: "database",
    image: postgres
  },
  {
    name: "MySQL/MariaDb",
    description: "Database",
    link: "https://www.mysql.com/",
    type: "database",
    image: mysql
  },
  {
    name: "MSSQL",
    description: "Database",
    link: "https://www.microsoft.com/ru-ru/sql-server/sql-server-2019",
    type: "database",
    image: mssql
  },
  {
    name: "SQLite",
    description: "Database",
    link: "https",
    type: "database",
    image: sqlite
  },
  {
    name: "Asp.Net",
    description: ".Net Web Framework",
    link: "",
    type: "languageFramework",
    image: aspnet
  },
  {
    name: "WPF",
    description: "Desktop development",
    link: "https://docs.microsoft.com/en-us/visualstudio/designers/getting-started-with-wpf?view=vs-2022",
    type: "languageFramework",
    image: wpf
  },
  {
    name: "Python",
    description: "Programming language",
    link: "https://www.python.org/",
    type: "languageFramework",
    image: python
  },
  {
    name: "C#",
    description: "Programming language",
    link: "https://www.python.org/",
    type: "languageFramework",
    image: csharp
  },
  {
    name: "C",
    description: "Programming language",
    link: "https://www.python.org/",
    type: "languageFramework",
    image: clang
  },
  {
    name: "React",
    description: "Web development",
    link: "https://reactjs.org/",
    type: "languageFramework",
    image: react
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
    name: "Google Cloud",
    description: "Devops",
    link: "https://www.digitalocean.com/",
    type: "devops",
    image: googlecloud
  },
  {
    name: "Nginx",
    description: "Web server",
    link: "https://www.nginx.com/",
    type: "devops",
    image: nginx
  },
  {
    name: "LINQ",
    description: "Language integrated query",
    link: "",
    type: "addition",
    image: linq
  },
  {
    name: "RESTful",
    description: "API",
    link: "",
    type: "addition",
    image: restful
  },
  {
    name: "EF Core",
    description: "ORM",
    link: "",
    type: "addition",
    image: aspnet
  },
  {
    name: "Dapper",
    description: "ORM",
    link: "",
    type: "addition",
    image: aspnet
  },
  {
    name: "JetBrains Rider",
    description: "Code editor of choice",
    link: "https://code.visualstudio.com/",
    type: "addition",
    image: rider
  }
];
