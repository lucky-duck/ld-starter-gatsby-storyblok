import React, { useMemo } from "react";
import GatsbyImage from "gatsby-image";

const NonStretchedImage = React.forwardRef((props, ref) => {
  const normalizedProps = useMemo(() => {
    const style = {
      ...(props.style || {}),
      backgroundColor: "transparent",
      objectFit: "contain",
    };
    if (props.fluid && props.fluid.presentationWidth) {
      style.maxWidth = !props.fluid.fixedWidth
        ? props.fluid.presentationWidth
        : "100%";
      const width = props.fluid.fixedWidth && props.fluid.presentationWidth;
      if (width) {
        style.width = width;
      }
    }

    return {
      ...props,
      style,
      ref,
    };
  }, [props.fluid]);

  return <GatsbyImage {...normalizedProps} />;
});

NonStretchedImage.displayName = "NonStretchedImage";

export default NonStretchedImage;
