# Selamat Datang, Sobat Amazing!

Welcome, dokumentasi ini menyediakan basic set guideline untuk Sobat Amazing
member Frontend Engineer di [TLab](https://tlab.co.id/)!

Dokumentasi ini terus aktif dikembangkan. Jika mempunyai feedback atau kritik saran
silahkan hubungi **TEAM FRONTEND**

## Frontend Roadmap
More information about frontend path - [roadmap.sh](https://roadmap.sh/frontend)

## Standard Tools
* CSS Framework: [Tailwind](https://tailwindcss.com/)
* Use shadcn for base component
  - [Official/React](https://ui.shadcn.com/)
  - [Vue](https://www.shadcn-vue.com/)

## Coding Rules

- Use [Conventional Commits](/documentation/conventional-commits/)

- Use ESLint + [Prettier](https://docs.google.com/presentation/d/1-wl5EFMKC_lxBDdTdsSSNAb_6OrQZ4D1dGke-9XoZ8E/edit?usp=sharing)
  * Prettier Config
    ```
    const config = {
      trailingComma: "es5",
      tabWidth: 2,
      semi: true,
      singleQuote: false,
      bracketSpacing: true,
      printWidth: 120,
      arrowParens: "always",
    };
    ```
- Use [Husky](https://github.com/typicode/husky) + Lint-Staged? _(only check changed files)_
  - Run ESLint dan Prettier before commit
  - Run unit test before push
  - Check the commit message format to ensure it complies with standards (conventional commits, commitlint)
- Write [data-testid](https://docs.google.com/presentation/d/1DLnmBa7nQ6tQJg-8rFb8IALGuNM5WuUVgG-km-Ie0qI/edit?usp=sharing) to make it easier for teams to unit test and E2E testing.
- Write unit test minimum 10% coverage. [SonarQube](https://sonarqube.tlab.co.id/)
- Security Standart
    - When saving data in the browser (Local Storage, Cookies, Session, etc)
      encrypt the data using [Encrypt Storage](https://www.npmjs.com/package/encrypt-storage)
    - OWASP Top 10. [Read More](https://owasp.org/www-project-top-ten/)
- Use AI to help you with your works:
  - [JetBrains](/documentation/jetbrains-ide/)
  - [Copilot](https://github.com/features/copilot)
  - [v0](https://v0.dev/)
  - ...

## Boilerplate
* Bamboo DSL (Base Shadcn)
  * [ReactJs](https://git.tlab.co.id/fsfe/frontend-boilerplates/bamboo-react)
  * [VueJs](https://git.tlab.co.id/fsfe/frontend-boilerplates/bamboo-vue-3)
* [VueJs V1](https://git.tlab.co.id/tlab-internal-system/standart-pattern/vue-js-standart-pattern)

## Read More, Learn More!
* [100+ Web Development Things you Should Know](https://youtu.be/erEgovG9WBs?si=WPCSPyNUAZSrNwmd)
* [19 Essential Tools for Front End Developers](https://www.wearedevelopers.com/magazine/best-tools-for-front-end-development)
* [Frontend Performance Best Practices](https://roadmap.sh/best-practices/frontend-performance)
* [Code Review Best Practices](https://roadmap.sh/best-practices/code-review)
* [Metodologi CSS](https://docs.google.com/presentation/d/1-qKMeKUKqUEsJE3onUYg7HXuimBFDkOWaEs9FAavups/edit#slide=id.g7c763257d0_0_0)
