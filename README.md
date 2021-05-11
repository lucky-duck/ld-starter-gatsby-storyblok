<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://ld-gatsby-storyblok-starter.netlify.app/static/share-d8f3fe0eb2d6c4f37271c33035e1947b.jpg" />
  </a>
</p>
<h1 align="center">
  Lucky Duck's Gatsby x Storyblok Start Kit
</h1>

Kick off your project with this starter kit, jam-packed with useful utils, templates and libraries to help get you going, faster 🚀

## Problems? Questions?

If you run into any issues, questions, or have a suggestion, hit up Josh on Slack. 

Don't work at Lucky Duck? That's fine! <a href="mailto:josh@luckyduck.co">Email josh instead.</a>

## Features

- A simple landing page with blog functionality built with Netlify CMS
- Editable Pages: Landing, About, Product, Blog-Collection and Contact page with Netlify Form support
- Create Blog posts from Netlify CMS
- Tags: Separate page for posts under each tag
- Basic directory organization
- Uses Bulma for styling, but size is reduced by `purge-css-plugin`
- Blazing fast loading times thanks to pre-rendered HTML and automatic chunk loading of JS files
- Uses `gatsby-image` with Netlify-CMS preview support
- Separate components for everything
- Netlify deploy configuration
- Netlify function support, see `lambda` folder
- Perfect score on Lighthouse for SEO, Accessibility and Performance (wip:PWA)
- ..and more


## Prerequisites

- Node (Recommended v8.2.0 or higher)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)


## 🚀 Quick Deploy

3.  **Clone with and host Netlify**

    Use the button below to quickly create a clone of this starter kit and host it on Netlify:
    
    <a href="https://app.netlify.com/start/deploy?repository=https://github.com/lucky-duck/ld-starter-gatsby-storyblok"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" target="_blank"></a>


## 🏎 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the ld gatsby storyblok starter.

    ```shell
    # create a new Gatsby site using the ld-gatsby-storyblok-starter
    gatsby new my-site-name https://github.com/lucky-duck/ld-starter-gatsby-storyblok
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-site-name/
    gatsby develop
    ```

3.  **Open the source code and start editing**

    Your site is now running at `http://localhost:8000`.
    

## 🧐 Starter Overview

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├──── assets
    ├────── fonts
    ├────── images
    ├────── svg
    ├────── videos
    ├──── components
    ├────── storyblok
    ├──────── adapters
    ├──── hooks
    ├──── pages
    ├──── templates
    ├──── utils
    ├── static  
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`src/assets`**: This directory will contain all of the static assets used on the site (anything not supplied by Storyblok), such as fonts, images and SVGs.

3.  **`src/components`**: This directory will contain all your sites components, along with Storyblok adapters to connect your component up to Storyblok.

3.  **`src/hooks`**: This directory will contain all of the custom hooks for your site. Included is a template file for creating Storyblok GraphQL queries.

3.  **`src/pages`**: This directory will contain any static pages for your site, such as the 404 page, or the Storyblok editor page (included in project).

3.  **`src/templates`**: This directory will contain any Storyblok page templates your site requires. It comes with a page template out of the box.

3.  **`src/utils`**: This directory will contain any utils you need for the site. It comes with a host of helpful utils out of the box.

5.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.


## 📚 Included Libraries


