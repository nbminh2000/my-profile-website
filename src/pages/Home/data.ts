export const MAX_LENGTH = 180;

export type Experience = {
  year: string;
  items: {
    title: string;
    domain: string;
    teamSize: string;
    work: string[];
    tech: string[];
    duration?: string;
    company?: string;
  }[];
};

export type Contact = {
    email: string;
    phone: string;
    linkedin: string;
}

export type Skills = {
    category: string;
    items: string[];
}

export const contactData: Contact = {
    email: "binhminhvd212@gmail.com",
    phone: "+84 764 874 462",
    linkedin: "https://www.linkedin.com/in/nbminh2000"
};

export const skillsData: Skills[] = [
    {
        category: "Back-end",
        items: ["Java", "Spring Boot", "Golang (Basic)"]
    },
    {
        category: "Front-end",
        items: ["HTML", "CSS", "JavaScript", "ReactJS"]
    },
    {
        category: "Database",
        items: ["Oracle", "MySQL"]
    },
    {
        category: "Testing",
        items: ["Test Case Design", "FUT Execution", "Test Coverage"]
    }
];

export const experienceData: Experience[] = [
  {
    year: "2022",
    items: [
      {
        title: "Website Migration from VB.NET to Java 1.8",
        domain: "Migration of the House/Apartment rental system from VB to Java",
        teamSize: "200",
        work: ["Create testcase,", "Execute testcase"],
        tech: ["Java", "VB", "SVN"],
        duration: "6/2022 -> 2/2023",
        company: "FPT Software",
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        title: "Upgrade version java 1.8. Upgrade version Oracle",
        domain: "project on enrollment and admission management",
        teamSize: "60",
        work: ["Coding", "Create documentation", "Execute test coverage", "Analyze bug"],
        tech: ["Java", "Shell", "Oracle", "Kibana", "SVN", "Git"],
        duration: "3/2023 -> 2/2024",
        company: "FPT Software",
      }
    ],
  },
  {
    year: "2024",
    items: [
      {
        title: "API management and maintenance of sales promotion management system",
        domain: "create and manage vouchers for Korean sales system",
        teamSize: "15",
        work: ["Coding", "Create testcase", "Execute testcase", "Resolve bug"],
        tech: ["Java", "Git"],
        duration: "3/2024 -> 12/2024",
        company: "FPT Software",
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        title: "Maintain and develop the payment information management module.",
        domain: "Updated the system to better manage multiple payment methods.",
        teamSize: "40",
        work: ["Coding", "Create documentation", "Create testcase", "Execute testcase", "Resolve bug"],
        tech: ["Java", "Shell", "Git"],
        duration: "1/2025 -> 3/2025",
        company: "FPT Software",
      },
      {
        title: "Migration Client-specific framework to Spring framework",
        domain: "The client's framework library is no longer supported, so migration to the Spring framework is required.",
        teamSize: "15",
        work: ["Coding", "Create documentation", "Execute test coverage", "Resolve bug"],
        tech: ["Java", "Kibana", "Git"],
        duration: "4/2025 -> 9/2025",
        company: "FPT Software",
      },
      {
        title: "Payment Application Processing System Upgrade",
        domain: "Legacy system modernization and enhancement, including system upgrades and new feature development.",
        teamSize: "50",
        work: ["Coding", "Create documentation", "Create testcase FUT", "Execute testcase", "Resolve bug"],
        tech: ["Java", "ReactJS", "Kibana", "Git"],
        duration: "10/2025 -> now",
        company: "FPT Software",
      },
    ],
  },
];



export type TabType = "description" | "skills" | "experience" | "contact";