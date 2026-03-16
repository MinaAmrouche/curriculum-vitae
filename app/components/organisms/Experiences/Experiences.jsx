import "./Experiences.scss";
import { Separator } from "components/atoms";
import { Item } from "components/molecules";

const Experiences = () => {
  const profile = `With 9+ years of experience across software development, product thinking, and system design, I founded IMinaIT to deliver tailored digital products for clients in research, tech, education, and creative industries. I specialise in JavaScript (React, Vue, Node.js) and enjoy owning projects end-to-end, from architecture and API design to UX/UI and front-end delivery. I have a strong eye for product quality and design, and I leverage AI tools (Cursor, GitHub Copilot, LLM-powered platforms) to build smarter, faster, and with greater impact.`;

  const experiences = [
    {
      title: "Lead Software Engineer, Design Academy Eindhoven",
      dates: "Jun 2024 - Present",
      content: `<li>Owned the full product lifecycle of XR-IT (eXtended Realities Intraverse Toolkit), from concept and architecture to UX/UI design, implementation, and deployment: a real-time remote-collaboration platform for distributed XR environments.</li>
<li>Designed the system architecture: a Node.js orchestrator with distributed clients, a Next.js front-end, PostgreSQL data layer, WebSocket & REST APIs, role-based access control, and certificate-based VPN authentication.</li>
<li>Handled UX/UI design of the management interface, ensuring operators could coordinate complex multi-machine XR workflows intuitively.</li>
<li>Packaged and distributed the full ecosystem as Windows applications; supported engineers via design reviews and code reviews.</li>
<li>Key delivery: "Cat Content", an award-winning virtual-production film connecting Unreal Engine, UltraGrid, and MVN/OptiTrack across Finland and the Netherlands in real-time.</li>`,
      technologies: "Node.js, Next.js, WebSocket, REST, VPN, Windows, Figma, TypeScript",
    },
    {
      title: "Senior Frontend Developer, UbiOps",
      dates: "Jan 2025 - Dec 2025",
      content: `<li>Led product and architectural decisions on UbiOps's web interface (an AI/LLM model-serving platform, SaaS and on-premise) as sole front-end developer.</li>
<li>Redesigned the entire logging experience around LogQL's query model: introduced syntax-highlighted search, real-time validation, user-friendly error states, and re-engineered bi-directional pagination, significantly improving observability for AI/ML workloads.</li>
<li>Drove a toolchain modernisation from Webpack/npm to Bun + Vite, with measurable gains in build speed, hot reload, and developer experience.</li>
<li>Stabilised CI/CD pipeline and repaired end-to-end test suites (Cucumber + Puppeteer).</li>`,
      technologies: "React, Vite, Bun, LogQL, Cucumber, Puppeteer, CI/CD, MUI",
    },
    {
      title: "Web Developer, Alloy",
      dates: "May 2024 - Present",
      content: `<li>Designed and implemented advanced features across multiple custom WordPress sites, including a secure link-sharing system with expiring tokens and access tracking.</li>
<li>Architected a complex course registration system with real-time seat validation and multi-person booking flows.</li>
<li>Delivered scroll-based animations and performance improvements using GSAP.</li>`,
      technologies: "WordPress, PHP, GSAP, JavaScript",
    },
    {
      title: "Freelance Software Developer, IMinaIT",
      dates: "Jun 2021 - Present",
      content: `<li>Designed and built a mobile-first PWA using Vue 3 and Firebase for a complex, performance-optimised children's educational game.</li>
<li>Led front-end architecture and delivery for an SSR Vue 2 app enhancing a national tennis platform, working alongside backend developers and designers.</li>
<li>Contributed product and front-end expertise to a social media campaign automation platform.</li>
<li>Owned front-end architecture and maintenance of a car rental application.</li>
<li>Designed and built a React-based PWA quiz game in partnership with a back-end developer.</li>`,
      technologies: "React, NextJS, Vue 3, Firebase, TypeScript, Tailwind, Vite, Figma",
    },
    {
      title: "Lead Front-end Developer, UbiOps",
      dates: "Sep 2019 - Jun 2021",
      content: `<li>Sole architect and developer of the UbiOps platform web interface, built from scratch in six months, translating a partially developed API into a full product using React, Redux, and MUI.</li>
<li>Owned product direction and UX decisions in close collaboration with the backend team; led recruitment and mentoring of two junior developers.</li>`,
      technologies: "React, Redux, MUI, Docker, GitLab CI, Kubernetes, GCloud",
    },
    {
      title: "Front-end Developer, Saegus",
      dates: "Apr 2018 - May 2019",
      content: `<li>Designed and developed 2 Angular web apps for a large company's data science department (a dataset labelling tool and a model showroom), collaborating with a data engineer and a UX/UI designer.</li>
<li>Led an energy company project: drove client communication, timeline estimation, and built a reusable React component system for multiple landing pages.</li>
<li>Enhanced a gamification-based React app for employee training and evaluation.</li>`,
      technologies: "React, Angular, Node.js, Vue, Bootstrap, Zeplin, Webpack",
    },
    {
      title: "Junior Developer, Monsieur Biz",
      dates: "Sep 2016 - Mar 2018",
      content: `<li>Designed and built a full-stack article/event platform from scratch, with front-office, back-office, and admin components.</li>
<li>Maintained and developed Magento e-commerce websites, including one specialising in overseas car parts sales.</li>`,
      technologies: "Magento, Symfony, PHP, React, Docker, CircleCI, jQuery",
    },
  ];

  return (
    <div className="Experiences">
      <div className="Experiences__profile">
        <h2>Profile</h2>
        <Separator />
        <Item>{profile}</Item>
      </div>

      <div className="Experiences__section">
        <Separator />
        <h2>Experience</h2>
        <Separator />
        {experiences.map((item, index) => {
          return (
            <Item title={item.title} dates={item.dates} key={index}>
              <p className="Experiences__technologies">
                Main technologies: {item.technologies}
              </p>
              <ul
                className="Experiences__content"
                dangerouslySetInnerHTML={{ __html: item.content }}
              ></ul>
            </Item>
          );
        })}
      </div>
    </div>
  );
};

export default Experiences;
