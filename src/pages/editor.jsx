import React from "react";

import SbEditable from "storyblok-react";
import config from "../../gatsby-config";
import Layout from "../components/layout";
import StoryblokComponent from "../components/storyblok/storyblokComponent";
import NoContentMessage from "../components/storyblok/notFoundTooltip";

const sbConfigs = config.plugins.filter((item) => {
  return item.resolve === "gatsby-source-storyblok";
});
const sbConfig = sbConfigs.length > 0 ? sbConfigs[0] : {};

const loadStoryblokBridge = function (cb) {
  let script = document.createElement("script");
  script.type = "text/javascript";
  script.src = `//app.storyblok.com/f/storyblok-latest.js?t=${sbConfig.options.accessToken}`;
  script.onload = cb;
  document.getElementsByTagName("head")[0].appendChild(script);
};

class StoryblokEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { story: null };
  }

  componentDidMount() {
    loadStoryblokBridge(() => {
      this.initStoryblokEvents();
    });
  }

  loadStory() {
    window.storyblok.get(
      {
        slug: window.storyblok.getParam("path"),
        version: "draft",
        resolve_relations: sbConfig.options.resolveRelations || [],
      },
      (data) => {
        this.setState({ story: data && data.story });
      }
    );
  }

  initStoryblokEvents() {
    this.loadStory();

    let sb = window.storyblok;

    sb.on(["change", "published"], () => {
      this.loadStory();
    });

    sb.on("input", (payload) => {
      if (this.state.story && payload.story.id === this.state.story.id) {
        payload.story.content = sb.addComments(
          payload.story.content,
          payload.story.id
        );
        this.setState({ story: payload.story });
      }
    });

    sb.pingEditor(() => {
      if (sb.inEditor) {
        sb.enterEditmode();
      }
    });
  }

  render() {
    if (this.state.story == null) {
      return <NoContentMessage />;
    }

    if (
      this.state.story.content.component === "page" &&
      this.state.story.content.body === undefined
    ) {
      return <NoContentMessage />;
    }

    const { name: pageName, content } = this.state.story;

    return (
      <Layout seoTitle={"Editor"}>
        <SbEditable content={content}>
          <StoryblokComponent {...content} pageName={pageName} />
        </SbEditable>
      </Layout>
    );
  }
}

export default StoryblokEntry;
