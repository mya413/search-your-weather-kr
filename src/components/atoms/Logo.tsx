import logoImage from "@/assets/logo.svg";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

export default function Logo() {
  const path = useLocation().pathname;

  return (
    <>
      {path !== "/" ? (
        <LogoStyles>
          <img src={`${logoImage}`} alt="logo" />
        </LogoStyles>
      ) : (
        <HomeLogoStyles>
          <img src={`${logoImage}`} alt="logo" />
        </HomeLogoStyles>
      )}
    </>
  );
}

const LogoStyles = styled.div`
  width: 40px;

  & > img {
    width: 100%;
  }
`;

const HomeLogoStyles = styled.div`
  width: 20px;

  & > img {
    width: 100%;
  }
`;
