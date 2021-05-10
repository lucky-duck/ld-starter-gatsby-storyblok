import React, { useMemo } from "react";

import Layout from "../components/layout";
import StoryblokComponent from "../components/storyblok/storyblokComponent";

function StoryblokPage({ pageContext }) {
  console.log("Page Context", pageContext);
  const content = useMemo(() => {
    const { story } = pageContext;
    const parsedContent = JSON.parse(story.content);
    return {
      ...parsedContent,
      firstPublishedAt: story.first_published_at,
      pageName: parsedContent.pageName || parsedContent.pageTitle || story.name,
    };
  }, [pageContext.story.uuid]); //eslint-disable-line

  function selectPageComponent(componentName) {
    switch (componentName) {
      case "page":
        return StoryblokComponent;
      default:
        return null;
    }
  }

  function renderPageContent() {
    if (!(content || content.body || content.body.length)) {
      return null;
    }

    const StoryblokPageComponent = selectPageComponent(content.component);

    return StoryblokPageComponent ? (
      <StoryblokPageComponent {...content} pageContext={pageContext} />
    ) : (
      <div>Unknown storyblok component</div>
    );
  }

  if (!content) {
    return null;
  }

  return <Layout>{renderPageContent()}</Layout>;
}

export default StoryblokPage;
