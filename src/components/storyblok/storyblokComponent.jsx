import React from "react";

import ComponentNotFound from "./notFoundTooltip";
import useStoryblokComponents from "./useStoryblokComponents";

function StoryblokComponent({ component, ...rest }) {
  const Component = useStoryblokComponents(component);
  return Component ? (
    <Component {...rest} />
  ) : (
    <ComponentNotFound componentName={component} />
  );
}

export default StoryblokComponent;
