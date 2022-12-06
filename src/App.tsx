import React from "react";
import styled from "styled-components";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 95%;
  margin: 10px 0;

  border: 1px solid red;
`;

export function App() {
  return <StyledApp>Hello</StyledApp>;
}
