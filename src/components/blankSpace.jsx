import React from "react";
import styled, { css } from "styled-components";
import mq from "../utils/mq";

const SpacerItem = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  ${mq.tablet(css`
    height: ${(props) => props.tabletHeight};
  `)};
  ${mq.mobile(css`
    height: ${(props) => props.mobileHeight};
  `)};
`;

function BlankSpace({ height, tabletHeight, mobileHeight }) {
  return (
    <SpacerItem
      height={height + "px"}
      tabletHeight={tabletHeight ? tabletHeight + "px" : height}
      mobileHeight={mobileHeight ? mobileHeight + "px" : height}
    />
  );
}

export default BlankSpace;
