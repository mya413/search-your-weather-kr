import styled from "styled-components";
import Logo from "@/components/atoms/Logo";
import Greeting from "@/components/atoms/Greeting";
import NameInput from "@/components/molecules/NameInput";

export default function Welcome() {
  return (
    <WelcomeStyle>
      <div>
        <Logo />
        <Greeting />
        <NameInput />
      </div>
    </WelcomeStyle>
  );
}

const WelcomeStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  @media screen and (max-width: 1024px) {
    & > div {
      padding: 0 20px;
    }
  }
`;
