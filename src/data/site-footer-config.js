import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTelegram
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Asadullokh Nurullaev. All Rights Reserved.`,
  author: {
    name: "Asadullokh Nurullaev",
    accounts: [
      {
        url: "https://github.com/asadullokhn",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://t.me/asadullokh_nurullaev",
        label: "Telegram Account",
        type: "telegram",
        icon: <FaTelegram />
      },
      {
        url: "https://linkedin.com/in/asadullokhn",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "mailto:asadullokhnurullaev@gmail.com",
        label: "Gmail",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
