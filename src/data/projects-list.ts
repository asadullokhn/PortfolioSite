import dgLogo from "assets/images/projects/dg_logo.png";
import botLogo from "assets/images/projects/bot.png";
import qualificationLogo from "assets/images/projects/qualification.png";
import testMixerLogo from "assets/images/projects/testMixer.png";
import pos from "assets/images/projects/pos.png";

export const projectsList = [
  {
    id: 1,
    title: "DigitalGeneration Uzbekistan",
    logo: dgLogo,
    blurHash: "L4ADc400P*Zi4Tu1y;Qo00pH#YXl",
    link: "https://raqamliavlod.uz/",
    desc: "This is a platform which has courses and forums where each user can learn and ask questions in any IT sphere for free. Besides that, this platform also has checker system, which helps to users to improve algorithmic performance by solving problems",
    technologies: ["ASP.NET", "WPF"]
  },
  {
    id: 2,
    title: "Qualification",
    link: null,
    logo: qualificationLogo,
    blurHash: "L0Aer?tjH[tPyAayj[j[00ay%xkB",
    desc: "Currently developing web backend for maktab.uz (Ministry of Education), which focus on testing students and collecting statistics of all schools and student of whole country.",
    technologies: ["ASP.NET", "C#"]
  },
  {
    id: 4,
    title: "POS system",
    logo: pos,
    blurHash: "L2M5%%0000EN00I:-oIp00kC?^sl",
    link: "https://workof.com/",
    desc: "Successfully completed point of sale platform on WPF. A material design has been used to achieve a great user interface.",
    technologies: ["WPF", "C# | XAML"]
  },
  {
    id: 5,
    title: "Test-Mixer",
    logo: testMixerLogo,
    blurHash: "L1O^uE0679I00AGT?.H{00y7p2tK",
    link: null,
    desc: "A platform for preparing unique tests for each student of the presidential school (Muhammad al-Khwarizmi Specialized IT School) has been successfully developed.",
    technologies: ["C#", "WPF"]
  },
  {
    id: 6,
    title: "TextagramBot",
    logo: botLogo,
    blurHash: "L09sWSxdH;s?%6axWAfk00V?%jax",
    link: "https://t.me/Shrifty_textprobot",
    desc: "The bot, which has over 50,000 users, converts English and Russian text into creative fonts",
    technologies: ["Aiogram", "Python"]
  }
];
