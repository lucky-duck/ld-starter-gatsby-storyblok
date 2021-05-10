const validImageUrlPattern = /^https?:\/\/a.storyblok.com\/f\/[0-9]+\/[0-9]+x[0-9]+\/[A-Za-z0-9]+\/[\S]+\.[A-Za-z]+/;

function getBasicImageProps(image) {
  let url = null;
  let lqip = null;

  if (image.filename === '') {
    return null;
  }

  let imageUrl = image.filename;

  if (typeof imageUrl === 'string') {
    url = imageUrl;
  }

  if (typeof imageUrl === 'object') {
    url = imageUrl.image;
    lqip = imageUrl.base64 ? image.base64 : null;
  }

  url = validImageUrlPattern.test(url) ? url : null;

  if (!url) {
    console.warn('URL Check Failed');
    return false;
  }

  let originalPath = imageUrl.replace('https://a.storyblok.com/', '');

  let [, , dimensions, , filename] = originalPath.split('/');
  let [width, height] = dimensions.split('x').map((num) => parseInt(num, 10));
  let [, extension] = filename.split('.');

  let aspectRatio = width / height;
  let metadata = { dimensions: { width, height, aspectRatio }, lqip };

  return {
    originalPath,
    extension,
    metadata,
  };
}

export default getBasicImageProps;
