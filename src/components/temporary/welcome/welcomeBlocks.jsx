import React from "react";
import styled from "styled-components";

import WelcomeBlockItem from "./welcomeBlockItem";
import Container from "../../container";

const WelcomeBlockContainerOuter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 60px;
`;

const WelcomeBlocksContainer = styled(Container)`
  display: grid;
  width: 100%;
  grid-auto-flow: row;
  grid-gap: 50px;
  padding: 0px 0px;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
`;

function WelcomeBlocks({ items }) {
  return (
    <WelcomeBlockContainerOuter>
      <WelcomeBlocksContainer>
        {items.map((welcomeBlock, i) => (
          <WelcomeBlockItem content={welcomeBlock} key={i} />
        ))}
      </WelcomeBlocksContainer>
    </WelcomeBlockContainerOuter>
  );
}

export default WelcomeBlocks;
