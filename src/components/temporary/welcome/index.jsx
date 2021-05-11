import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { render } from "storyblok-rich-text-react-renderer";

import Container from "../../container";
import mq from "../../../utils/mq";
import LuckyDuckLogo from "../../../assets/svg/ld-logomark.svg";

const WelcomeContainerOuter = styled.div`
  padding: 0px 60px;
  ${mq.mobile(css`
    padding: 0px 10px;
  `)};
`;

const WelcomeContainer = styled(Container)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
  flex-direction: column;
  padding: 60px;
  ${mq.mobile(css`
    padding: 40px 20px;
  `)};
`;

const Title = styled.h1`
  text-align: center;
  font-weight: 400;
  max-width: 800px;
  margin: 0;
  padding: 0;
  b {
    font-weight: 600;
  }
  ${mq.mobile(css`
    font-size: 22px;
  `)};
`;

const LogoContainer = styled.div`
  margin-bottom: 20px;
`;

function Welcome({ text, title }) {
  return (
    <WelcomeContainerOuter>
      <WelcomeContainer>
        <LogoContainer>
          <LuckyDuckLogo height={"60px"} />
        </LogoContainer>
        <Title>{render(title)}</Title>
      </WelcomeContainer>
    </WelcomeContainerOuter>
  );
}

export default Welcome;
