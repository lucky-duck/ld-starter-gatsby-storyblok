<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://ld-gatsby-storyblok-starter.netlify.app/static/share-d8f3fe0eb2d6c4f37271c33035e1947b.jpg" />
  </a>
</p>
<h1 align="center">
  Lucky Duck's Gatsby x Storyblok Start Kit
</h1>

Kick off your project with this starter kit, jam-packed with useful utils, templates and libraries to help get you going, faster 💫


## Problems? Questions? Suggestions? 💬

If you run into any issues, questions, or have a suggestion, hit up Josh Cawthorne on Slack. 

Don't work at Lucky Duck? That's fine! <a href="mailto:josh@luckyduck.co">Email josh instead.</a>


## Features 😎

- Designed to quickly create a project with Storyblok CMS integration
- Helpful templates and demo components to quickly understand the basics
- Includes some of our favourite libraries pre-installed
- Also includes some helpful utils that we've created while working on Gatsby/Storyblok sites
- Uses `styled-components` out of the box.
- Supports quick clone and deploying with Netlify (see **quick deploy** section)


## Prerequisites 🚨

- Node (Recommended v8.2.0 or higher)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)


## Quick Deploy 🚀

3.  **Clone with and host Netlify**

    Use the button below to quickly create a clone of this starter kit and host it on Netlify:
    
    <a href="https://app.netlify.com/start/deploy?repository=https://github.com/lucky-duck/ld-starter-gatsby-storyblok"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" target="_blank"></a>


## Quick start 🏎

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
    

## Starter Overview 🧐

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


## 🏗 Included Utils

### clientOnly.js
Wrap your components, pages or Storyblok adapters with this to ensure they only render on the client-side. Useful for libraries that don't support SSR.
  
#### Usage

```
import React from "react";
import ClientOnly from "../utils/clientOnly";

function MyCoolComponent() {
  return (
    <ClientOnly>
      <div>I'll only render on the client side. Neat, huh?</div>
    </ClientOnly>
  );
}

export default MyCoolComponent;
```
    
### constants.js
The clue's in the name, this holds constants for you.

### isCurrentPathCreator.js
  -   
### mq.js
Stands for `Media Queries`. Incredibly useful component that allows you to quickly create uniform responsive designs with `styled-components`. **Note:** Breakpoints are controlled in `contstants.js`.
  
#### Usage
```  
import React from "react";
import styled, {css} from "styled-components"
import mq from "../utils/mq";

const ComponentContainer = styled.div`
  height: 400px;
  width: 400px;
  font-size: 18px;

  ${mq.desktopSmall(css`
    height: 350px;
    width: 350px;
    font-size: 16px;
  `)};

  ${mq.tablet(css`
    height: 300px;
    width: 300px;
    font-size: 14px;
  `)};

  ${mq.mobile(css`
    height: 200px;
    width: 200px;
    font-size: 12px;
  `)};

  ${mq.mobileSmall(css`
    height: 100px;
    width: 100px;
    font-size: 10px;
  `)};
`;

function MyCoolComponent() {
  return (
    <ComponentContainer>
      Check out Mr. Responsive
    </ComponentContainer>
  );
}

export default MyCoolComponent;
```
 
### parseStoryblokLink.js
Used to parse between the different types of links Storyblok return.
  
#### Usage
  
```
import React from "react";
import parseStoryblokLink from "../utils/parse-storyblok-link";

function MyCoolComponent({link}) {
  return (
    <a href={parseStoryblokLink(link)}>Link here!</a>
  );
}

export default MyCoolComponent;
```
  
### scrollLocker.js
Used to lock the page in place. Intended for use with pop-up overlays or full-screen menus.
  
#### Usage
  
```
import React, {useState} from "react";
import { scrollLocker } from "../utils/scrollLocker";

function MyCoolComponent() {
  const [locked, setLocked] = useState(false)
  function toggleLock() {
    if(locked) {
        scrollLocker.unlock();
        setLocked(false)
      } else {
        scrollLocker.lock();
        setLocked(true)
      }
    }
  }

  return (
    <button onClick={() => toggleLock()}>Toggle Lock</button>
  );
}

export default MyCoolComponent;
```
  
### withLocation.js
Used to provide the component with information on its location on the site. Supports SSR.

#### Usage

```
import React from "react";
import withLocation from "../utils/withLocation";
  
 function MyCoolComponent({location}) {
    return (
      <div>My Cool Component here, checking in from {location.pathname}!</div>
    );
  }
    
  export default withLocation(MyCoolComponent);
```

### gatsbyStoryblokImage
Used to convert Storyblok image repsonses into a `gatsby-image` compatible format. Can be used for either a **fixed image** or a **fluid image**. Works well with the included `lazyImage.js` component.

**Note:** This is a forked version of <a href="https://github.com/bejamas/gatsby-storyblok-image" target="_blank">Bejama's gatsby-storyblok-image</a>. It's forked as we've found the version available on NPM doesn't currently work properly.

#### Fixed Image Usage

  ```
  import React from "react";
  
  import LazyImage from "../components/lazyImage";
  import { getFixedGatsbyImage } from "../utils/gatsby-storyblok-image";


  function MyCoolComponent({ image }) {
    const fixedImage = getFixedGatsbyImage(image, {
      width: 900
    })

    return (
      <div>
        <LazyImage fixed={fixedProps} alt={"A fixed image, woo!"}/>
      </div>
    )
  }

  export default MyCoolComponent
  ```
  
#### Fluid Image Usage
  
  ```
  import React from "react";
  
  import LazyImage from "../components/lazyImage";
  import { getFluidGatsbyImage } from "../utils/gatsby-storyblok-image";

  function MyCoolComponent({ image }) {
    return (
      <div>
        <LazyImage fluid={getFluidGatsbyImage(image)} alt={"A fluid image, woo!"}/>
      </div>
    )
  }

  export default MyCoolComponent
  ```

## 📚 Included Libraries

Some of our favourite libraries and plugins come installed out of the box with the starter kit. See below for some brief info on each library and some tailor-made examples of usage.

## React Libraries

### Date Fns
Provides a simple way to format date and times.
<a href="https://date-fns.org/" target="_blank">Library Link</a>

#### Usage

```
  import React from "react";
  import { format } from 'date-fns'
  
  function MyCoolComponent({publishDate}) {
    return (
      <div>Article published: {format(new Date(publishDate), "do LLLL yyyy")}</div>
    )
  }
  
  export default MyCoolComponent
```

- Framer Motion
- React Cool Inview
- React Cool OnClickOutside
- React Helmet
- React Swiper
- Storyblok JS Client
- Storyblok React
- Storyblok Rich Text React Renderer
- Styled Components
- Styled System
- Swiper
- URL Loader


## Gatsby Plugins

- Gatsby Image
- Gatsby Plugin Catch Links
- Gatsby Plugin Google Fonts
- Gatsby Plugin Manifest
- Gatsby Plugin React Helmet
- Gatsby Plugin React SVG
- Gatsby Plugin SASS
- Gatsby Plugin Sharp
- Gatsby Plugin Sitemap
- Gatsby Plygin Styled Components
- Gatsby Source Filesystem
- Gatsby Source Storyblok
- Gatsby Transformer Sharp


## Babel Plugins

### Babel Plugin Styled Components
<a href="https://github.com/styled-components/babel-plugin-styled-components" target="_blank">Plugin Link</a>
