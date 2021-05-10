import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { render } from "storyblok-rich-text-react-renderer";

import Container from "../../container";
import LuckyDuckLogo from "../../../assets/svg/ld-logomark.svg";

const WelcomeContainerOuter = styled.div`
  padding: 0px 60px;
`;

const WelcomeContainer = styled(Container)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
  flex-direction: column;
  padding: 60px;
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
        {console.log(title)}
      </WelcomeContainer>
    </WelcomeContainerOuter>
  );
}

export default Welcome;
