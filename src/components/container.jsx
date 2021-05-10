import React from "react";
import styled, { css } from "styled-components";

import mq from "../utils/mq";

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 120px;
  z-index: 3;
  @media (max-width: 1200px) {
    padding: 0px 60px;
  }
  ${mq.tablet(css`
    padding: 0px 45px;
  `)};

  ${mq.mobile(css`
    padding: 0px 15px;
  `)};

  ${(props) =>
    props.relative &&
    css`
      position: relative;
    `}
`;

function Container(props) {
  return <StyledContainer {...props} />;
}

export default Container;
