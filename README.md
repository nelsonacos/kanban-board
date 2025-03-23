<div id="top"></div>

[![GitHub contributors](https://img.shields.io/github/contributors/nelsonacos/kanban-board.svg?style=for-the-badge)](https://github.com/nelsonacos/kanban-boards/graphs/contributors)
[![GitHub issues](https://img.shields.io/github/issues/nelsonacos/kanban-board?style=for-the-badge)](https://github.com/nelsonacos/kanban-board/issues)
[![GitHub forks](https://img.shields.io/github/forks/nelsonacos/kanban-board?style=for-the-badge)](https://github.com/nelsonacos/kanban-board/network)
[![GitHub stars](https://img.shields.io/github/stars/nelsonacos/kanban-board?style=for-the-badge)](https://github.com/nelsonacos/kanban-board/stargazers)
[![GitHub license](https://img.shields.io/github/license/nelsonacos/kanban-boards?style=for-the-badge)](https://github.com/nelsonacos/kanban-board/blob/main/LICENSE)
[![Linkedin url](https://img.shields.io/badge/-LinkedIn-black.svg?color=%23555555&logo=linkedin&style=for-the-badge)](https://www.linkedin.com/in/nelchar/)

<br />
<div align="center">

  <h3 align="center">Kanban Board</h3>

  <p align="center">
    <a href="#top"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="#">View Demo</a>
    ·
    <a href="https://github.com/nelsonacos/kanban-board/issues">Report Bug</a>
    ·
    <a href="https://github.com/nelsonacos/kanban-board/issues">Request Feature</a>
  </p>
</div>

<p align="center">
    <a href="https://github.com/nelsonacos/kanban-board">
        <img src="https://img.shields.io/badge/react-black?style=for-the-badge&logo=react" alt="React">
    </a>
    <a href="https://github.com/nelsonacos/kanban-board">
        <img src="https://img.shields.io/badge/typescript-black?style=for-the-badge&logo=typescript" alt="Typescript">
    </a>
    <a href="https://github.com/nelsonacos/kanban-board">
        <img src="https://img.shields.io/badge/Vite-black?style=for-the-badge&logo=Vite" alt="Vite">
    </a>
</p>

## About The Project

### Prerequisites

[node install docs](https://nodejs.org/es/download/package-manager/)

```sh
sudo apt install nodejs
```

[npm](https://www.npmjs.com/package/npm-install)

```sh
npm install npm@latest -g
```

<p align="right">(<a href="#top">back to top</a>)</p>

### Getting Started

### Starting the Project with Docker Compose

1. Clone the repo

```sh
git clone https://github.com/nelsonacos/kanban-board.git
```

2. Open command line and go to project folder 

```bash
cd kanban-board
```
3. Run The Command:

```sh
docker-compose up --build
```
Open http://localhost:5173/ with your browser to see the result.

### Starting the Project without Docker Compose

1. Clone the repo

```sh
git clone https://github.com/nelsonacos/kanban-board.git
```

2. Open command line and go to project folder 

```bash
cd kanban-board
```

3. Install NPM packages

```sh
npm install
```
   
I am using a small server called [json-server](https://github.com/typicode/json-server) to serve the API.


4. First, run the server

```js
npm run back
```

5. Then open another command line and run the frontend

```js
npm run dev
```

Open [http://localhost:5173/](http://localhost:5173/) with your browser to see the result.

<p align="right">(<a href="#top">back to top</a>)</p>

### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
<p align="right">(<a href="#top">back to top</a>)</p>
