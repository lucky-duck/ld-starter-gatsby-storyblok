import React from "react";

import NonStretchedImage from "./nonStretchedImage";

const LazyImage = React.forwardRef((props, ref) => {
  return (
    <NonStretchedImage
      placeholderStyle={{ visibility: "hidden" }}
      {...props}
      ref={ref}
    />
  );
});

LazyImage.displayName = "LazyImage";

export default LazyImage;
