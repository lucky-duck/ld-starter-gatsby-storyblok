import React from "react";
import styled from "styled-components";
import { render } from "storyblok-rich-text-react-renderer";
import { getFluidGatsbyImage } from "../../../utils/gatsby-storyblok-image";

import LazyImage from "../../lazyImage";

const BlockItem = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 20px;
  padding: 40px 20px;
  height: fit-content;
  max-width: calc(100vw - 20px);
`;

const BlockTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const BlockText = styled.div`
  margin-top: 10px;
  code {
    background-color: #000;
    color: #fff;
    padding: 2px 5px;
    border-radius: 5px;
    font-size: 12px;
    word-break: break-all;
  }
`;

const BlockImageContainer = styled.div`
  width: 100%;
  margin: 20px 0px;
`;

function WelcomeBlockItem({ content }) {
  return (
    <BlockItem>
      <BlockTitle>{content.title}</BlockTitle>
      {content.image && content.image.filename && (
        <BlockImageContainer>
          <LazyImage
            fluid={getFluidGatsbyImage(content.image)}
            imgStyle={{
              objectFit: "contain",
              backgroundColor: "#eee",
              height: "100%",
            }}
          />
        </BlockImageContainer>
      )}
      <BlockText>{render(content.text)}</BlockText>
    </BlockItem>
  );
}

export default WelcomeBlockItem;
