const nullLink = null;

function isValidFullSlug(link) {
  return typeof link == "string" && link[0] !== "/";
}

function parseStoryblokLink(link) {
  if (!parseStoryblokLink.isValidUrl(link)) {
    return nullLink;
  }

  if (link.url) {
    if (link.anchor) {
      return (
        "/" + link.url + "#" + link.anchor.replace(/\s/g, "").toLowerCase()
      );
    }

    return link.url;
  }

  if (link.email) {
    return "mailto:" + link.email;
  }

  if (link.cached_url) {
    if (link.cached_url === "home") {
      return "/";
    }
    if (link.anchor) {
      if (link.cached_url.includes("home")) {
        let updLink = link.cached_url.replace("/home", "");
        return (
          "/" + updLink + "#" + link.anchor.replace(/\s/g, "").toLowerCase()
        );
      }
      return (
        "/" +
        link.cached_url +
        "#" +
        link.anchor.replace(/\s/g, "").toLowerCase()
      );
    }
    if (link.cached_url.includes("home")) {
      link = link.cached_url.replace("/home", "");
      return "/" + link;
    }
    return "/" + link.cached_url;
  }

  return `/${link}`;
}

parseStoryblokLink.isValidUrl = function (link) {
  return (
    link && (link.url || link.email || link.cached_url || isValidFullSlug(link))
  );
};

export default parseStoryblokLink;
