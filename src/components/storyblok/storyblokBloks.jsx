import React from "react";
import SbEditable from "storyblok-react";

import StoryblokComponent from "./storyblokComponent";

function StoryblokBloks({ body }) {
  return body
    ? body.map((blok) => {
        return (
          <SbEditable key={blok._uid} content={blok}>
            <StoryblokComponent {...blok} />
          </SbEditable>
        );
      })
    : null;
}

export default StoryblokBloks;
