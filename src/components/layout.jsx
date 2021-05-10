import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import Seo from "./seo";

const GlobalStyle = createGlobalStyle`  
html, body {
  font-family: 'Poppins', sans-serif;
  background-color: #f6f7fb;
}
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
`;

const LayoutContainer = styled.div`
  height: 100%;
  width: 100%;
`;

function Layout({ title, description, children }) {
  return (
    <LayoutContainer>
      <Seo title={title} description={description} />
      <GlobalStyle />
      {children}
    </LayoutContainer>
  );
}

export default Layout;
