import logoImage from "@/assets/logo.svg";
import styled from "styled-components";

export default function Logo() {
  return (
    <LogoStyles>
      <img src={`${logoImage}`} alt="logo" />
    </LogoStyles>
  );
}

const LogoStyles = styled.div`
  width: 40px;

  & > img {
    width: 100%;
  }
`;
