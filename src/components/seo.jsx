import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import withLocation from "../utils/withLocation";

import shareImage from "../assets/images/share.jpg";

function SEO({
  title,
  description,
  image,
  location,
  titleTemplate,
  home,
  lang,
  meta,
  keywords,
}) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const siteMetadata = data.site.siteMetadata;
        const metaTitle = title || siteMetadata.title;
        const metaDescription = description || siteMetadata.description;
        const shareUrl = image || `${siteMetadata.siteUrl}${shareImage}`;
        const pageUrl = `${siteMetadata.siteUrl}${location.pathname}`;
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={titleTemplate || `${home ? "" : " %s"}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: metaTitle,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:image`,
                content: shareUrl,
              },
              {
                property: `og:url`,
                content: pageUrl,
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`,
              },
              {
                name: `twitter:title`,
                content: metaTitle,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: `twitter:image`,
                content: shareUrl,
              },
            ]
              .concat(
                Array.isArray(keywords) && keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          >
            <html lang="en" />
            <link rel="alternate" hrefLang="en-gb" href={pageUrl} />
          </Helmet>
        );
      }}
    />
  );
}

export default withLocation(SEO);

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
};

const detailsQuery = graphql`
  query defaultSeoQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;
