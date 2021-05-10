import { useMemo } from "react";

import StoryblokPage from "./storyblokPage";
import StoryblokBlankSpace from "./adapters/storyblokBlankSpace";

//TODO: DELETE ME
import StoryblokWelcome from "./adapters/temporary/storyblokWelcome";
import StoryblokWelcomeBlocks from "./adapters/temporary/storyblokWelcomeBlocks";

export default function useStoryblokComponents(componentName) {
  const STORYBLOK_COMPONENTS = {
    page: StoryblokPage,
    blankSpace: StoryblokBlankSpace,

    //TODO: DELETE ME
    welcome: StoryblokWelcome,
    welcomeBlocks: StoryblokWelcomeBlocks,
  };
  return useMemo(() => {
    return STORYBLOK_COMPONENTS[componentName];
  }, [componentName]);
}
