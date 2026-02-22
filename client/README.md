# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

{
"name": "traveldiaries",
"version": "0.1.0",
"private": true,
"dependencies": {
"@testing-library/dom": "^10.4.1",
"@testing-library/jest-dom": "^6.9.1",
"@testing-library/react": "^16.3.1",
"@testing-library/user-event": "^13.5.0",
"axios": "^1.13.2",
"html2pdf.js": "^0.14.0",
"leaflet": "^1.9.4",
"leaflet-routing-machine": "^3.2.12",
"react": "^19.2.3",
"react-dom": "^19.2.3",
"react-router-dom": "^7.11.0",
"react-scripts": "5.0.1",
"web-vitals": "^2.1.4"
},
"scripts": {
"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject"
},
"eslintConfig": {
"extends": [
"react-app",
"react-app/jest"
]
},
"browserslist": {
"production": [
">0.2%",
"not dead",
"not op_mini all"
],
"development": [
"last 1 chrome version",
"last 1 firefox version",
"last 1 safari version"
]
},
"description": "This project was bootstrapped with Create React App",
"main": "index.js",
"devDependencies": {
"jest": "^27.5.1"
},
"keywords": [],
"author": "",
"license": "ISC"
}
