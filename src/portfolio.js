/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Tan Loc Nguyen",
  title: "Hi all, I'm Tan",
  subTitle: emoji(
    "A Software Engineer 🚀 with a passion for problem-solving and a curiosity about how technology shapes the world."
  ),
  resumeLink:
    "https://drive.google.com/file/d/12FU8AsiVTphJVG-kBfb_GQj2QVQ3fKkb/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/tan-loc-nguyen",
  linkedin: "https://www.linkedin.com/in/tan-loc-nguyen-016983215/",
  gmail: "tanlocnguyen.tln@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "GRADUATE SOFTWARE ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Design and implement scalable, secure, and reliable server-side solutions, including seamless API creation and effective data handling"
    ),
    emoji(
      "⚡ Strong collaborator with a knack for problem-solving, delivering high-quality outcomes through iterative and agile approaches"
    ),
    emoji(
      "⚡ Develop highly intuitive, responsive, and efficient front-end experiences"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section
  schools: [
    {
      schoolName: "University of Technology Sydney",
      logo: require("./assets/images/uts-logo.png"),
      subHeader: "Bachelor of Engineering - Software Engineering (Honours)",
      duration: "February 2023 - May 2025 (expected)",
      desc: "Currently pursuing honours degree with a focus on Software Engineering."
    },
    {
      schoolName: "Ho Chi Minh City University of Technology",
      logo: require("./assets/images/hcmut-logo.png"),
      subHeader: "Bachelor of Computer Science",
      duration: "July 2020 - December 2022",
      desc: "Completed foundational courses in Computer Science."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Founding Engineer",
      company: "PantryPal",
      companylogo: require("./assets/images/pantrypal-logo.png"),
      date: "July 2024 – Present",
      desc: "Spearheading the transition from a local v1 mobile app for home cooking to a v2 full-stack using Supabase.",
      descBullets: [
        "Created detailed documentation to guide product development.",
        "Redesigned the database schema, enabling scalable and secure multi-user support."
      ]
    },
    {
      role: "Software Engineer",
      company: "UTS CSJI",
      companylogo: require("./assets/images/csji_logo.jpeg"),
      date: "February 2024 – August 2024",
      desc: "Collaborated with a team to develop a platform for community resource access.",
      descBullets: [
        "Worked in a Scrum setting to develop iteratively.",
        "Developed the authentication system following OAuth 2.0 standard."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Pico Coding",
      companylogo: require("./assets/images/pico-logo.jpeg"),
      date: "October 2023 – February 2024",
      desc: "Researched and implemented user migration from Auth0 to Amazon Cognito.",
      descBullets: [
        "Managed authentication flow using Amazon Cognito.",
        "Designed and implemented a leaderboard API using ExpressJS and TypeScript."
      ]
    },
    {
      role: "Consultant Intern",
      company: "KPMG",
      companylogo: require("./assets/images/kpmg_logo.jpeg"),
      date: "November 2022 – December 2022",
      desc: "Conducted a Digital & Data Leaders Survey Analysis report.",
      descBullets: [
        "Developed a data cleaning plan and analysed the data.",
        "Presented analysis proposal and interpreted results."
      ]
    },
    {
      role: "Team Lead",
      company: "GDSC HCMUT",
      companylogo: require("./assets/images/gdsc-logo.png"),
      date: "March 2022 – August 2022",
      desc: "Led a team of 4 in designing a business analysis process for an internal information management application.",
      descBullets: [
        "Defined core product features.",
        "Coordinated the end-to-end UX/UI design process."
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS THAT I WAS DOING AND AM DOING",
  projects: [
    {
      image: require("./assets/images/pantrypal-logo.png"),
      projectName: "PantryPal",
      projectDesc: "[Incoming] A mobile application that helps you organize your pantry, track expiration dates, and suggest recipes based on what you have",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.pantrypal.com.au/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/sync-draft-pic.png"),
      projectName: "Sync Draft",
      projectDesc: "A collaborative rich-text editing platform enabling real-time document collaboration using React, Node.js, WebSocket, MongoDB and Redis",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sync-draft-app.onrender.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/community-compass-pic.png"),
      projectName: "Community Compass",
      projectDesc: "A platform that enables residents of Ultimo and Pyrmont to access community resources and information about upcoming events",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://communitycompass.com.au/"
        }
      ]
    },
    {
      image: require("./assets/images/p2p-pic.png"),
      projectName: "P2P Chat App",
      projectDesc: "a peer-to-peer CLI chat app through LAN",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/tan-loc-nguyen/p2p-chat-app"
        }
      ]
    },
    {
      image: require("./assets/images/pokedex-pic.png"),
      projectName: "Pokedex",
      projectDesc: "A user-friendly web app to display Pokemon species info, built with TypeScript, ReactJS, and Tailwind CSS",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://pokedex-jet-beta.vercel.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@tanlocnguyen_/reflection-professional-practice-within-intercultural-and-global-contexts-e96201d9e4bc",
      title: "Reflection: Professional Practice within intercultural and global contexts",
      description:
        "Demonstrate professional practice through effective collaboration and communication within intercultural and global contexts."
    },
    {
      url: "https://medium.com/@tanlocnguyen_/reflection-principles-of-sustainability-to-create-viable-systems-4787029346ae",
      title: "Reflection: Principles of sustainability to create viable systems",
      description:
        "Applied principles of sustainability to design inclusive, secure, and socially impactful digital systems that support long-term community wellbeing."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),
  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss an opportunity or just want to say hi? My Inbox is open for all.",
  number: "(61) 0481 706 812",
  email_address: "tanlocnguyen.tln@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
