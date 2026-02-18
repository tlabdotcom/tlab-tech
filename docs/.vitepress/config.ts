import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TLab Tech",
  titleTemplate: "Amazing",
  description: "Documentation all TLab Tech Universe",
  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap",
        rel: "stylesheet",
      },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap",
        rel: "stylesheet",
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Docs", link: "/documentation/" }],

    sidebar: {
      "/documentation": [
        // 1. Overview
        {
          text: "Overview",
          items: [{ text: "Intro", link: "/documentation/" }],
        },

        // 2. Team & Culture
        {
          text: "Team & Culture",
          items: [
            {
              text: "Engineering Principles",
              link: "/documentation/principles/engineering",
            },
            { text: "Backend Engineer", link: "/documentation/team/backend" },
            { text: "Frontend Engineer", link: "/documentation/team/frontend" },
            {
              text: "Fullstack Engineer",
              link: "/documentation/team/fullstack",
            },
          ],
        },

        // 3. Workflow & Process
        {
          text: "Workflow & Process",
          items: [
            {
              text: "Git Workflow",
              link: "/documentation/workflow/git-workflow",
              collapsed: true,
              items: [
                {
                  text: "Trunk-Based",
                  link: "/documentation/workflow/git-trunk-based",
                },
                {
                  text: "Gitflow",
                  link: "/documentation/workflow/git-gitflow",
                },
              ],
            },
            {
              text: "Conventional Commits",
              link: "/documentation/workflow/conventional-commits",
            },
            {
              text: "Semantic Versioning",
              link: "/documentation/workflow/semantic-versioning",
            },
            // {
            //   text: "Code Review",
            //   link: "/documentation/workflow/code-review",
            // },
          ],
        },

        // 4. Coding Standards
        {
          text: "Coding Standards",
          items: [
            {
              text: "Naming Convention",
              link: "/documentation/technical-standards/naming-convention",
            },
            {
              text: "REST API Design",
              link: "/documentation/technical-standards/rest-api",
            },
            {
              text: "Database Schema",
              link: "/documentation/technical-standards/database-schema",
            },
            {
              text: "Testing Strategy",
              link: "/documentation/technical-standards/testing-strategy",
            },
            {
              text: "IDE & Tools",
              collapsed: true,
              items: [
                {
                  text: "JetBrains",
                  link: "/documentation/technical-standards/ide-jetbrains",
                },
                {
                  text: "VS Code",
                  link: "/documentation/technical-standards/ide-vscode",
                },
              ],
            },
          ],
        },

        // 5. Quality & Security
        {
          text: "Quality & Security",
          items: [
            {
              text: "SonarQube & Quality Gate",
              link: "/documentation/quality/sonarqube",
            },
            {
              text: "Dependency-Track",
              link: "/documentation/quality/dependency-track",
            },
          ],
        },

        // 6. Project SOPs
        {
          text: "Project SOPs",
          items: [
            {
              text: "Admin Dashboard",
              link: "/documentation/sop/frontend-admin-dashboard",
            },
            {
              text: "Web Company Profile",
              link: "/documentation/sop/frontend-company-profile",
            },
          ],
        },

        // 7. Cheat Sheets
        {
          text: "Cheat Sheets",
          items: [
            {
              text: "Linux Commands",
              link: "/documentation/cheatsheet/linux-command",
            },
            {
              text: "Git Commands",
              link: "/documentation/cheatsheet/git-command",
            },
            // {
            //   text: "CI Prompting",
            //   link: "/documentation/cheatsheet/ci-prompting",
            // },
            // {
            //   text: "Common Errors (FAQ)",
            //   link: "/documentation/cheatsheet/troubleshooting",
            // },
          ],
        },
      ],
    },

    search: {
      provider: "local",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" }, // Bisa diganti dengan link repo TLab Tech
    ],
  },
});
