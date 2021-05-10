import React from "react";
import { Location } from "@reach/router";
import isCurrentPathCreator from "../utils/isCurrentPathCreator";

function withLocation(WrappedComponent) {
  return function WithLocation(props) {
    return (
      <Location>
        {({ location }) => (
          <WrappedComponent
            {...props}
            location={location}
            isCurrentPath={isCurrentPathCreator(location)}
          />
        )}
      </Location>
    );
  };
}

export default withLocation;
