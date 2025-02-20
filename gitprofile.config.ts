// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'AnkurKumarShukla', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 5, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [''], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'AnkurKumarShukla/EngageX',
          'AnkurKumarShukla/CareConnect',
          'AnkurKumarShukla/GenAI-NFT',
          'AnkurKumarShukla/audio-separation-nmf',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    // external: {
    //   header: 'My Projects',
    //   // To hide the `External Projects` section, keep it empty.
    //   projects: [
    //     {
    //       title: 'Project Name',
    //       description:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //       imageUrl:
    //         'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
    //       link: 'https://example.com',
    //     },
    //     {
    //       title: 'Project Name',
    //       description:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //       imageUrl:
    //         'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
    //       link: 'https://example.com',
    //     },
    //   ],
    // },
    external: {
      header: 'Hackathons',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'HackOn Blocks 2024 : Winner(Polygon Top 3)',
          description:
            'Bliss ensures secure Web2 and Web3 payments by encrypting Stripe NFT card credentials with device-bound keys, stored on IPFS, while also leveraging AI to analyze NFT trends and generate viral assets for creators.',
          imageUrl:
            'https://hackonblocks.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F34c9a260fe0a454797599945f919e2aa%2Fassets%2Ffavicon%2F835.png&w=1440&q=75',
          link: 'https://devfolio.co/projects/bliss-5d56',
        },
        {
          title: 'FVM Dataverse Hack : Winner(FVM DeFi)',
          description:
            'GainX DAO is a cross-chain, reputation-based P2P NFT-collateralized lending protocol integrating Axelar for interoperability, ML models for NFT price prediction, and derivatives for risk management, offering flexible lending options and enhanced lender incentives.',

          imageUrl:
            'https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/449/577/datas/medium.png',
          link: 'https://devpost.com/software/gainx-dao',
        },
        {
          title: 'SIH 2022: Winner',
          description:
            'Organised by gov of India , won in AICTE problem statement to develop solution to manage document verification at several stage of student from school admission to  job ',
          imageUrl: 'https://sih.gov.in/img1/SIH2024-logo.png',
          link: 'https://drive.google.com/file/d/1TlapRDK3SbQ0TRriUNI_ejmiYdLP76Op/view?usp=sharing',
        },
        {
          title: 'Eth Global - Agentic Ethereum : Participant',
          description:
            'Hypersync is an AI-powered Web3 social media management agent that automates content creation, engagement, and on-chain activities using multi-LLM integration and blockchain tools. It leverages AI-driven analytics, Coinbase’s AgentKit, and gasless Privvy Wallets to optimize social strategies and streamline Web3 interactions.',
          imageUrl:
            'https://ethglobal.b-cdn.net/events/agents/square-logo/default.png',
          link: 'https://ethglobal.com/showcase/hypersync-9smun',
        },
        {
          title: 'Eth India : Participant',
          description:
            'AttestAI addresses critical challenges in decentralized AI and federated learning by ensuring data integrity, contributor verification, and secure operations.',
          imageUrl:
            'https://assets.devfolio.co/hackathons/d64ead180bfc42bda8cee408f6d39b80/assets/logo/998.png',
          link: 'https://devpost.com/software/careconnect-kh21ci',
        },
        {
          title:
            'RAG n ROLL Amp up Search with Snowflake & Mistral : Participant',
          description:
            ' leveraging Snowflake for data storage, LangChain for document chunking, and Cortex Search for hybrid retrieval, enabling precise, low-latency medical insights. Users interact via a Streamlit interface, with Mistral AI generating accurate, context-aware responses to streamline diagnoses and decision-making.',
          imageUrl:
            'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/228/068/datas/gallery.jpg',
          link: 'https://devpost.com/software/careconnect-kh21ci',
        },
        {
          title: 'Build On - QuickNode : Participant',
          description:
            'SPIE: AI-driven real-time monitoring detects mule accounts, ensuring AML compliance and blocking illicit fund flows. Advanced pattern analysis enhances security and protects protocol integrity.',
          imageUrl:
            'https://build-on.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F2c9439e7aa194719bf6586341af2dd80%2Fassets%2Ffavicon%2F17.png&w=1440&q=75',
          link: 'https://devfolio.co/projects/spie-d456',
        },
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
      ],
    },
  },
  seo: {
    title: 'Ankur Shukla',
    description: '',
    imageURL:
      'https://pbs.twimg.com/profile_images/1716000653934575616/7w4_mNxz.jpg',
  },
  social: {
    linkedin: 'ankur-shukla-iiitv',
    twitter: 'Ankur__Shukla',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '@ankurshukl0',
    website: '',
    phone: '9793953201',
    email: 'shuklaankur123456789@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1AOWHbEyghrGAa4lgHPBN7tIhTBvJki4L/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Machine Learning',
    'Deep Learning',
    'Large Language Models',
    'fastapi',
    'Flask',
    'MongoDB',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'C++',
    'DSA',
  ],
  experiences: [
    {
      company: 'Odoo',
      position: 'Development Services',
      from: 'March 2024',
      to: 'September 2024',
      companyLink: 'https://www.odoo.com',
    },
    {
      company: 'Odoo',
      position: 'SDE Intern',
      from: 'January 2024',
      to: 'May 2024',
      companyLink: 'https://www.odoo.com',
    },
    {
      company: 'Indian Institute of Information Technology Vadodara',
      position: 'Teaching Assistant',
      from: 'September 2023',
      to: 'December 2023',
      companyLink: 'https://www.iiitvadodara.ac.in',
    },
    {
      company: 'UbiSys: Ubiquitous Systems Research Lab',
      position: 'ML Research Intern',
      from: 'May 2023',
      to: 'August 2023',
      companyLink: 'https://iitj.ac.in',
    },
  ],
  certifications: [
    {
      name: 'AWS Certified Solutions Architect',
      body: 'Amazon Web Services (AWS)',
      year: 'Jan 2024',
      link: 'https://coursera.org/verify/WYZLL9NVWMZF',
    },
    {
      name: 'AWS Cloud Technical Essentials',
      body: 'Amazon Web Services (AWS)',
      year: 'Jan 2024',
      link: 'https://coursera.org/verify/99E7FR2E7ACS',
    },
    {
      name: 'Data Analytics course by Google',
      body: 'Prepare Data for Exploration',
      year: 'May 2022',
      link: 'https://www.coursera.org/account/accomplishments/certificate/2HHUXCH7867V',
    },
    {
      name: 'Python (Basic) Certificate',
      body: 'HackerRank Python Assessment',
      year: 'Feb 2022',
      link: 'https://www.hackerrank.com/certificates/bd02db859f71',
    },
  ],
  educations: [
    {
      institution: 'Indian Institute of Information Technology Vadodara',
      degree: 'Bachelor of Technology - BTech, Computer Science Engineering',
      from: '2020',
      to: '2024',
    },
    {
      institution: 'Oxford Public School',
      degree: '12th, CBSE PCM',
      from: 'June 2018',
      to: 'August 2019',
    },
    {
      institution: "St Xavier's Public School",
      degree: '10th, ICSE',
      from: 'June 2017',
      to: 'July 2018',
    },
  ],

  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'night',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made after copying <a
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
