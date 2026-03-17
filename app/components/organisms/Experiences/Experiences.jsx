import "./Experiences.scss";
import { Separator } from "components/atoms";
import { Item } from "components/molecules";

const Experiences = () => {
  const profile = `Software developer and founder of IMinaIT with 9+ years of experience spanning full-stack web development, system architecture, and product design. I own projects end-to-end: from scoping and technical architecture to UX/UI and delivery, integrating AI tools throughout my workflow to build smarter and ship faster. I have a strong design sensibility, bridging complex systems and intuitive, polished interfaces. I am especially drawn to projects at <b>the intersection of technology and the arts</b>: research environments, cultural institutions, creative production, and experimental media.`;

  const experiences = [
    {
      title: "Freelance - Lead Software Engineer & System Architect | Design Academy Eindhoven",
      dates: "Jun 2024 - Present",
      content: `<li>End-to-end ownership of XR-IT, a real-time distributed platform connecting XR environments: game engines, motion-capture systems, and AV streaming.</li>
<li>Designed the full system architecture: Node.js orchestrator, distributed clients, Next.js front-end, SQLite, WebSocket & REST APIs, RBAC, and VPN.</li>
<li>Handled UX/UI design of the management interface; packaged the ecosystem as Windows applications.</li>
<li>Supported engineers through solution design and code reviews.</li>`,
      technologies: "Node.js, Next.js, SQLite, WebSocket, Figma, TypeScript",
    },
    {
      title: "Freelance - Senior Frontend Developer | UbiOps",
      dates: "Jan 2025 - Dec 2025",
      content: `<li>Sole front-end developer on an AI/LLM model-serving platform (SaaS + on-premise).</li>
<li>Led a full redesign of the logging experience around LogQL: syntax-highlighted search, real-time validation, and bi-directional pagination.</li>
<li>Migrated the toolchain from Webpack/npm to Bun + Vite; stabilised CI/CD pipeline and repaired Cucumber + Puppeteer test suites.</li>`,
      technologies: "React, Vite, Bun, LogQL, Cucumber, Puppeteer, MUI",
    },
    {
      title: "Freelance - Web Developer | Studio Alloy",
      dates: "May 2024 - Present",
      content: `<li>Building a reusable event registration system deployed across multiple websites: waiting lists, multi-role automated and custom email notifications (students, teachers, venues), attendance tracking, and a cross-event reporting tool.</li>
<li>Implemented other custom features including a secure link-sharing system with expiring tokens and access tracking, and scroll-based animations with GSAP.</li>`,
      technologies: "WordPress, PHP, GSAP, JavaScript",
    },
    {
      title: "Freelance - Lead Software Engineer & Technical Advisor | Animax",
      dates: "Jun 2021 - Present",
      content: `<li>Hybrid physical-digital mobile game for children about endangered animals, linking physical collectible tokens to a digital experience via unique QR codes.</li>
<li>Involved from ideation: built the Vue.js PWA with a vanilla JS mini-game, designed the full backend (token uniqueness, ownership, social features, player progression), manage all DevOps, and serve as ongoing technical advisor to the project creator.</li>`,
      technologies: "Vue.js, Firebase, JavaScript, PWA, Node.js",
    },
    {
      title: "Freelance - Software Developer | IMinaIT",
      dates: "Jun 2021 - Present",
      content: `<li>Led front-end architecture for an SSR Vue 2 app enhancing a national tennis platform.</li>
<li>React PWA quiz game, social media campaign automation platform, and car rental app maintenance.</li>`,
      technologies:
        "React, NextJS, Vue 3, Firebase, TypeScript, Tailwind, Vite, Figma",
    },
    {
      title: "Lead Front-end Developer | UbiOps",
      dates: "Sep 2019 - Jun 2021",
      content: `<li>Single-handedly built the UbiOps web interface from scratch in 6 months using React, Redux, and MUI, translating a partially developed API into a full product.</li>
<li>Owned product direction and UX decisions in collaboration with the backend team; recruited and mentored two junior developers.</li>`,
      technologies: "React, Redux, MUI, Docker, GitLab CI, Kubernetes, GCloud",
    },
    {
      title: "Front-end Developer | Saegus",
      dates: "Apr 2018 - May 2019",
      content: `<li>Built 2 Angular apps for a data science department; led a React component system for an energy company; enhanced a gamification training app.</li>`,
      technologies: "React, Angular, Node.js, Vue, Bootstrap, Webpack",
    },
    {
      title: "Junior Developer | Monsieur Biz",
      dates: "Sep 2016 - Mar 2018",
      content: `<li>Built a full-stack article/event platform from scratch; maintained Magento e-commerce sites.</li>`,
      technologies: "Magento, Symfony, PHP, React, Docker, CircleCI, jQuery",
    },
  ];

  const isSingle = (content) => (content.match(/<li>/g) || []).length === 1;
  const stripLi = (content) => content.replace(/<\/?li>/g, "");

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
              {isSingle(item.content) ? (
                <p
                  className="Experiences__content"
                  dangerouslySetInnerHTML={{ __html: stripLi(item.content) }}
                />
              ) : (
                <ul
                  className="Experiences__content"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              )}
            </Item>
          );
        })}
      </div>
    </div>
  );
};

export default Experiences;
