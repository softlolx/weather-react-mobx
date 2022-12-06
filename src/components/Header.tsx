import * as React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  box-sizing: border-box;
  padding: 0 0.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid red;
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 1px solid red;
  .logo {
    width: 10px;
    height: 10px;
    background: url(../images/logo_main.svg);
  }
`;

const StyledLocationButton = styled.div`
  border: 1px solid red;
`;

export function Header() {
  return (
    <StyledHeader>
      <StyledLogo>
        <div className="logo"></div>
        <h1 className="name">meteo</h1>
      </StyledLogo>
      <StyledLocationButton></StyledLocationButton>
    </StyledHeader>
  );
}
