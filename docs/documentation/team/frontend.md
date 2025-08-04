# 📗 Frontend Engineer Handbook

Selamat datang, Sobat Amazing! 👋

Dokumentasi ini menyediakan basic set guideline untuk Sobat Amazing member **Frontend 
Engineer** di [TLab](https://tlab.co.id/)!

Dokumentasi ini aktif dikembangkan dan mencakup berbagai topik mulai dari standar pengembangan, setup project, workflow, hingga best practices.

Jika mempunyai feedback atau kritik saran silakan hubungi **TEAM FRONTEND**.

---

## 🔍 Daftar Isi

* [Frontend Roadmap](#frontend-roadmap)
* [Standard Tools](#standard-tools)
* [Coding Rules](#coding-rules)
* [Security Standard](#security-standard)
* [Boilerplate](#boilerplate)
* [Documentation & Tools](#documentation--tools)
* [Read More, Learn More!](#read-more-learn-more)

---

## 🛤️ Frontend Roadmap

Informasi lengkap tentang alur pembelajaran dan pengembangan Frontend:

* [roadmap.sh/frontend](https://roadmap.sh/frontend)

---

## 🧰 Standard Tools

* **CSS Framework**: [Tailwind](https://tailwindcss.com/)
* **Base Components**:

  * [ShadCN React](https://ui.shadcn.com/)
  * [ShadCN Vue](https://www.shadcn-vue.com/)
* **State Management**:

  * React: Zustand / Tanstack
  * Vue: Pinia
* **Routing**:

  * React: React Router
  * Vue: Vue Router
* **Data Fetching**: Axios, TanStack Query
* **Form Validation**:

  * React: React Hook Form / Zod
  * Vue: Vuelidate / Zod

---

## ✍️ Coding Rules

* Gunakan [Conventional Commits](/documentation/conventional-commits/)
* Gunakan **ESLint** + [Prettier](https://docs.google.com/presentation/d/1-wl5EFMKC_lxBDdTdsSSNAb_6OrQZ4D1dGke-9XoZ8E/edit?usp=sharing)

```js
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

* Gunakan **[Husky](https://github.com/typicode/husky)** + **Lint-Staged** untuk:

  * Menjalankan ESLint dan Prettier sebelum commit
  * Menjalankan unit test sebelum push
  * Memastikan commit message sesuai [conventional commits](https://www.conventionalcommits.org/)

* Tambahkan `data-testid` di komponen untuk mempermudah unit test dan E2E test

* Tulis unit test dengan minimal 10% coverage

  * Cek dengan [SonarQube](https://sonarqube.tlab.co.id/)

---

## 🔐 Security Standard

* Saat menyimpan data di browser (Local Storage, Cookies, Session, dll), **harus di-enkripsi**

  * Gunakan [Encrypt Storage](https://www.npmjs.com/package/encrypt-storage)
* Pahami dan hindari celah keamanan berdasarkan **OWASP Top 10**

  * [owasp.org/www-project-top-ten](https://owasp.org/www-project-top-ten/)

---

## 🧱 Boilerplate

Gunakan boilerplate resmi TLab sebagai dasar pengembangan frontend:

* **\[Bamboo DSL (Shadcn Based)]**

  * [ReactJs](https://git.tlab.co.id/fsfe/frontend-boilerplates/bamboo-react)
  * [VueJs](https://git.tlab.co.id/fsfe/frontend-boilerplates/bamboo-vue-3)
* Legacy:

  * [VueJs V1](https://git.tlab.co.id/tlab-internal-system/standart-pattern/vue-js-standart-pattern)

---

## 📚 Documentation & Tools

* Gunakan AI untuk mempercepat pengembangan:

  * [JetBrains AI](/documentation/jetbrains-ide/)
  * [GitHub Copilot](https://github.com/features/copilot)
  * [v0 by Vercel](https://v0.dev/)

* Workflow:
  * Gitflow, Branch Strategy [Atlassian Gitflow Guide](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

---

## 📖 Read More, Learn More!

* [100+ Web Development Things You Should Know](https://youtu.be/erEgovG9WBs?si=WPCSPyNUAZSrNwmd)
* [19 Essential Tools for Front End Developers](https://www.wearedevelopers.com/magazine/best-tools-for-front-end-development)
* [Frontend Performance Best Practices](https://roadmap.sh/best-practices/frontend-performance)
* [Code Review Best Practices](https://roadmap.sh/best-practices/code-review)
* [Metodologi CSS (BEM, OOCSS, dsb)](https://docs.google.com/presentation/d/1-qKMeKUKqUEsJE3onUYg7HXuimBFDkOWaEs9FAavups/edit#slide=id.g7c763257d0_0_0)

---

Happy Coding, Sobat Amazing 🚀
