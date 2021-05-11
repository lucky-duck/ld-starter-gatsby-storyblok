import { graphql, useStaticQuery } from "gatsby";

/**
 *
 * Template hook for getting Storyblok GraphQL data
 * Simply update the 'CHANGEME' fields
 * .
 * */

function useGraphQL() {
  return useStaticQuery(graphql`
    query {
      CHANGEME: allStoryblokEntry(
        filter: { field_component: { eq: "CHANGEME" } }
      ) {
        edges {
          node {
            id
            name
            uuid
            content
            full_slug
            first_published_at
          }
        }
      }
    }
  `);
}

export default useGraphQL;
