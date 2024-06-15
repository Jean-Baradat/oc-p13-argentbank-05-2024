# Welcome aboard, captain

This project is the 13th in the course OpenClassrooms "Utilisez une API pour un compte utilisateur bancaire avec React" course. It introduces students to React JS with Redux Toolkit and in this project Redux Toolkit Query.

This project was developed with:

- [Vite](https://vitejs.dev/)
- [React 18](https://react.dev/)
- [Axios](https://axios-http.com/)
- [Node.js](https://nodejs.org/en)
- [Prettier](https://prettier.io/)
- [ESlint](https://eslint.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview)
- [SASS](https://sass-lang.com/)

If you need more information about the project, please go to **package.json**


## Start

Download the project by saving it in a directory on your computer:

```bash
git clone https://github.com/Jean-Baradat/oc-p13-argentbank-05-2024
```

You'll also need another project for the server and an API for [mongoDB](https://www.mongodb.com/fr-fr):
The local server is available here: [Project-10-Bank-API](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API)

Follow the steps indicated in the project and once installed, you'll need to configure a MongoDB API and inisyalize it in `server\database\connection.js` in the [Project-10-Bank-API](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API) project.

Once the back has been launched correctly, you can modify the **VITE_API_URL** for use on this project in `.env.development`.

## Launch locally

Let's start by installing the dependencies:
```bash
npm i
```

and launch Vite:
```bash
npm run dev
```

> If you need more commands, please go to **package.json**

#### Build 

Build the application:
```bash
npm run build
```

Then to see this version:
```bash
npm run preview
```

You can also make: (To see the result on another machine in your network.)
```bash
npm run preview:network
```

## Environment variables

This project used the environment variables in:
- `.env.development`

Use the example `.env.example` to create your:
- `.env.production`

## Configuration 
Below you will find the configuration for all the development tools used for this project. Do not modify if you don't know how.

#### ESlint
- `.eslintrc.json`

#### Prettier
- `.prettierrc.json`

#### Js config
- `jsconfig.json`

#### Tailwind
- `tailwind.config.js`

#### Tailwind
- `vite.config.js`


## Workspace Settings
A `.vscode` file contains configurations for VScode for this project.



Jean 👋
