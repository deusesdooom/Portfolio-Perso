import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "epiconnect",
    category: "Social Platform",
    title: "EpiConnect",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["1.png"],
    live: "https://github.com/mehdi-bk/Epiconnect",
    github: "https://github.com/mehdi-bk/Epiconnect",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.firebase,
      ],
      backend: [PROJECT_SKILLS.firebase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A Large-Scale Social Platform for Epitech Students Across Europe
          </TypographyP>
          <TypographyP className="font-mono ">
            EpiConnect is a revolutionary social platform built to connect all 17 Epitech campuses across Europe, eliminating fragmented communication and fostering knowledge sharing at scale. I designed and developed this platform as the founder & lead developer, enabling cross-campus collaboration through innovative features and modern technologies.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <p className="font-mono mb-2">
            <strong>Project-Centric Posts:</strong> Students can share and collaborate on projects with detailed descriptions and real-time updates.
          </p>
          <p className="font-mono mb-2">
            <strong>GitHub Integration:</strong> Seamlessly connect your GitHub repositories to showcase your work and contributions.
          </p>
          <p className="font-mono mb-2">
            <strong>Real-Time Messaging:</strong> Instant communication between students across campuses for quick collaboration and networking.
          </p>
          <p className="font-mono mb-2">
            <strong>Campus-Aware Feeds:</strong> Personalized content based on your campus and interests, while staying connected globally.
          </p>
          <p className="font-mono mb-2">
            <strong>Peer-Learning Tools:</strong> Resources for knowledge sharing and collaborative learning across the entire Epitech network.
          </p>
          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-4">
            <li>Frontend: React 18, Vite, Tailwind CSS</li>
            <li>Backend: Firebase (Auth, Firestore, Storage)</li>
            <li>State Management: Zustand</li>
            <li>Real-Time Database: Firestore</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Impact</TypographyH3>
          <p className="font-mono mb-2">
            EpiConnect serves as a vital hub for Epitech's diverse student community, promoting cross-campus connections and collaborative innovation. The platform demonstrates how technology can break down geographical barriers and create meaningful connections within a distributed educational network.
          </p>
        </div>
      );
    },
  },
  {
    id: "web-vulnerability-script",
    category: "Security Tool",
    title: "Web-Vulnerability-Script",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["1.png"],
    live: "https://github.com/deusesdooom/Web-Vulnerability-Script",
    github: "https://github.com/deusesdooom/Web-Vulnerability-Script",
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Advanced Web Vulnerability Scanning & Assessment Tool
          </TypographyP>
          <TypographyP className="font-mono ">
            A powerful Python-based security scanning tool designed to detect common web vulnerabilities such as SQL injection, cross-site scripting (XSS), insecure configurations, and other OWASP Top 10 vulnerabilities. This tool crawls target websites, identifies potential weaknesses, and provides detailed exploitation steps for manual validation, helping security researchers and developers assess application risks efficiently.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Vulnerability Detection</TypographyH3>
          <p className="font-mono mb-2">
            <strong>SQL Injection:</strong> Identifies vulnerable SQL queries that could allow unauthorized database access.
          </p>
          <p className="font-mono mb-2">
            <strong>Cross-Site Scripting (XSS):</strong> Detects stored and reflected XSS vulnerabilities in web applications.
          </p>
          <p className="font-mono mb-2">
            <strong>Insecure Configurations:</strong> Scans for security misconfigurations, default credentials, and exposed sensitive data.
          </p>
          <p className="font-mono mb-2">
            <strong>Additional Vulnerabilities:</strong> Identifies CSRF, authentication issues, security headers, and more.
          </p>
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-4">
            <li>Automated website crawling and vulnerability mapping</li>
            <li>Detailed vulnerability reports with severity levels</li>
            <li>Exploitation steps for manual validation and testing</li>
            <li>Easy-to-use command-line interface</li>
            <li>Customizable scanning depth and parameters</li>
            <li>Export results in multiple formats</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Use Cases</TypographyH3>
          <p className="font-mono mb-2">
            Perfect for security researchers, penetration testers, developers securing their applications, and organizations conducting security audits. This tool empowers security professionals to identify and remediate vulnerabilities before they can be exploited.
          </p>
          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-4">
            <li>Language: Python</li>
            <li>Web Scraping: BeautifulSoup, Requests</li>
            <li>Security Testing: Custom vulnerability patterns</li>
          </ul>
        </div>
      );
    },
  },
];
export default projects;
