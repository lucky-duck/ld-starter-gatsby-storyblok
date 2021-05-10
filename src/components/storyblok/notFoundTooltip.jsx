import React from "react";
import styled from "styled-components";
import Alert from "../../assets/svg/storyblokAlert.svg";

const ContentContainer = styled.div`
  width: 100%;
  margin: 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Muli, "Helvetica Neue", Helvetica, sans-serif, Arial;
`;

const BoxContainer = styled.div`
  border-radius: 5px;
  background-color: #f1f9f9;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 20px 15px 20px;
  max-width: 375px;
  border-width: 0px;
  border-left-width: 7px;
  border-style: solid;
  border-color: #f33950;
`;

const TextContainer = styled.div``;

const AlertTitle = styled.div`
  color: #f33950;
  font-weight: bold;
  font-size: 22px;
  letter-spacing: 1px;
  display: flex;
`;

const AlertText = styled.div`
  color: #484848;
  font-size: 12px;
  letter-spacing: 1px;
  margin-top: 2px;
`;

const AlertContainerOuter = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AlertContainer = styled.div`
  height: 32px;
  width: 32px;
  margin-right: 20px;
`;

function NotFound({ componentName }) {
  return (
    <ContentContainer>
      <BoxContainer>
        <AlertContainerOuter>
          <AlertContainer>
            <Alert fill={"#f33950"} />
          </AlertContainer>
        </AlertContainerOuter>
        <TextContainer>
          <AlertTitle>Component not found</AlertTitle>
          <AlertText>
            Uh oh - no component by the name of "<b>{componentName}</b>" could
            be found. Please make sure it's defined! <br />
          </AlertText>
        </TextContainer>
      </BoxContainer>
    </ContentContainer>
  );
}

export default NotFound;
