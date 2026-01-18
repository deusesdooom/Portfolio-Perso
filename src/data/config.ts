const config = {
  title: "Mehdi Ben Khadra | Cybersecurity & Full Stack Developer",
  description: {
    long: "Explore the portfolio of Mehdi Ben Khadra, a cybersecurity-focused full-stack developer and Epitech student specializing in secure systems, web security, penetration testing, and innovative digital solutions. Discover my latest work including EpiConnect, Web-Vulnerability-Script, and more. Let's build secure and amazing solutions together!",
    short:
      "Discover the portfolio of Mehdi Ben Khadra, a cybersecurity & full-stack developer creating secure applications and innovative solutions.",
  },
  keywords: [
    "Mehdi Ben Khadra",
    "portfolio",
    "cybersecurity developer",
    "full-stack developer",
    "penetration testing",
    "web security",
    "secure development",
    "EpiConnect",
    "Web-Vulnerability-Script",
    "security researcher",
    "incident response",
    "threat intelligence",
    "React",
    "Next.js",
    "Python",
    "Firebase",
    "Epitech",
  ],
  author: "Mehdi Ben Khadra",
  email: "mehdi.bk828@gmail.com",
  site: "https://mehdibenkhadra.com",

  // for github stars button
  githubUsername: "deusesdooom",
  githubRepo: "Epiconnect",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/mehdibk/",
    instagram: "",
    facebook: "",
    github: "https://github.com/deusesdooom",
  },
};
export { config };
