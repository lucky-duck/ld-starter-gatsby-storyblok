const path = require("path");
const PAGE_FIELD_COMPONENTS = [
  "page",
  //Add new page types here.
];
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const storyblokPageComponent = path.resolve(
    "src/templates/storyblokPage.jsx"
  );
  const {
    data: { stories },
  } = await graphql(
    `
      {
        stories: allStoryblokEntry {
          edges {
            node {
              id
              uuid
              name
              created_at
              slug
              field_component
              full_slug
              content
              is_startpage
              parent_id
              group_id
              first_published_at
            }
          }
        }
      }
    `
  );
  stories.edges
    .filter((entry) => {
      return PAGE_FIELD_COMPONENTS.includes(entry.node.field_component);
    })
    .forEach((entry) => {
      let pagePath =
        entry.node.full_slug === "home" ? "" : entry.node.full_slug;

      createPage({
        path: `/${pagePath}`,
        component: storyblokPageComponent,
        context: {
          story: entry.node,
          uuid: entry.node.uuid,
        },
      });
    });
};
