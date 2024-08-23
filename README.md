<br/>
<p align="center">
  <a href="https://jobify-io.netlify.app/">
    <img src="./client/public/vite.svg" alt="Logo" width="150">
  </a>

  <h3 align="center" style="font-size: 50px;">Jobify</h3>

  <p align="center">
    Search Job App
    <br/>
    <br/>
    <a href="https://jobify-io.netlify.app/">View Demo</a>
    .
    <a href="https://github.com/NazarTymiv/jobify/issues">Report Bug</a>
    .
    <a href="https://github.com/NazarTymiv/jobify/issues">Request Feature</a>
  </p>
</p>

![Contributors](https://img.shields.io/github/contributors/NazarTymiv/jobify?color=dark-green) ![Issues](https://img.shields.io/github/issues/NazarTymiv/jobify) 

## Table Of Contents

* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Authors](#authors)

## About The Project

![Screen Shot](https://nazar-tymiv.netlify.app/static/media/08.08521db7022a94795c5c.png)

Introducing **Jobify** - your ultimate companion in the job hunt! Crafted as my flagship project during my time at Boolean, **Jobify** revolutionizes the job search experience. Picture this: you're presented with job opportunities in the form of sleek, swipeable cards reminiscent of Tinder. With just a swipe to the right, you express interest in a job; a swipe to the left, and it's out of sight. 

But **Jobify** goes beyond mere swipes. Once you've expressed interest in a role, the employer behind the job listing gains insight into your profile. Your profile serves as a comprehensive snapshot of your professional prowess, complete with links to your portfolio website, CV, and more. Employers can gauge your suitability for the role and even reach out to you directly with job offers, creating a seamless bridge between talent and opportunity. 

With **Jobify**, the job search becomes not just efficient, but engaging and interactive. Say goodbye to traditional job boards and hello to a dynamic, intuitive platform designed to connect you with your dream job.

## Built With

<div style="display: flex;">
  <a href="https://react.dev/" style="margin-right: 15px;">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="Logo" width="50">
  </a>

  <a href="https://www.w3schools.com/js/" style="margin-right: 15px;">
      <img src="https://dev.iamvdo.me/css3.png" alt="Logo" width="50">
  </a>

  <a href="https://tailwindcss.com/" style="margin-right: 15px;">
      <img src="https://www.svgrepo.com/show/374118/tailwind.svg" alt="Logo" width="50">
  </a>

  <a href="https://nodejs.org/en" style="margin-right: 15px;">
      <img src="https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png?f=webp" alt="Logo" width="50">
  </a>

  <a href="https://www.postgresql.org/" style="margin-right: 15px;">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png" alt="Logo" width="50">
  </a>

  <a href="https://www.prisma.io/" style="margin-right: 15px;">
      <img src="https://cdn.changelog.com/uploads/icons/topics/3L8/icon_large.png?v=63693703596" alt="Logo" width="50">
  </a>

  <a href="https://www.figma.com/" style="margin-right: 15px;">
      <img src="https://cdn.sanity.io/images/599r6htc/regionalized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png" alt="Logo" width="50">
  </a>

  <a href="https://jwt.io/" style="margin-right: 15px;">
      <img src="https://cdn.worldvectorlogo.com/logos/jwt-3.svg" alt="Logo" width="50">
  </a>

  <a href="https://axios-http.com/" style="margin-right: 15px;">
      <img src="https://user-images.githubusercontent.com/8939680/57233882-20344080-6fe5-11e9-9086-d20a955bed59.png" alt="Logo" width="50">
  </a>

  <a href="https://react-icons.github.io/react-icons/" style="margin-right: 15px;">
      <img src="https://raw.githubusercontent.com/react-icons/react-icons/master/react-icons.svg" alt="Logo" width="50">
  </a>

  <a href="https://www.react-spring.dev/" style="margin-right: 15px;">
      <img src="https://www.svgrepo.com/show/354263/react-spring.svg" alt="Logo" width="50">
  </a>
</div>


## Getting Started

To get a local copy of **Jobify** and test it manually follow next steps.

### Prerequisites
Install [nodeJS](https://nodejs.org/en/download/current) or update npm to latest version using next command.

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo

```sh
git clone https://github.com/NazarTymiv/jobify.git
```

2. Sign up or login into [ElephantSQL](https://www.elephantsql.com/) account.

3. Create new instance using [this guide](https://www.youtube.com/watch?v=BuJj4LCWP_4).

4. Rename file `.env.example` to `.env` inside `server folder`

5. Change `DATABASE_URL` variable to link of created database and `?schema=prisma&connection_limit=5` put on the end of url.

```JS
DATABASE_URL="[LINK OF DATABASE]?schema=prisma&connection_limit=5"
```

6. Create one more instance it will be shadow database.

7. Change `SHADOW_DATABASE_URL` variable to link of shadow database and `?schema=shadow` put on the end of url.

```JS
SHADOW_DATABASE_URL="[LINK OF SHADOW DATABASE]?schema=shadow"
```

8. Install NPM packages

```sh
cd server

npm ci

cd ../client

npm ci
```

9. Change `JWT_SECRET` variable to any secret word into `server` folder.

```JS
JWT_SECRET="[JWT SECRET]"
```

10. Rename file `.env.example` to `.env` inside `client folder`

## Usage

For run the application use next steps:

1. Open two terminals of this app in VSCode your location should end on `/jobify`.

2. Inside the first terminal use command npm run server.

3. Inside the second terminal use command npm run client.

4. When you started client side you must be able to see the link inside the second terminal, press `ctrl + click`

## Authors

* **Nazar Tymiv** - *Full Stack Software Developer* - [Gihub Link](https://github.com/NazarTymiv) - [Portfolio Link](https://nazar-tymiv.netlify.app/) - [LinkedIn Link](https://www.linkedin.com/in/nazar-tymiv/)
