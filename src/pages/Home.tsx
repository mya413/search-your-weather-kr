import styled from "styled-components";
import Logo from "@/components/atoms/Logo";
import Greeting from "@/components/atoms/Greeting";
import NameInput from "@/components/molecules/NameInput";

export default function Home() {
  return (
    <HomeStyle>
      <div>
        <Logo />
        <Greeting />
        <NameInput />
      </div>
    </HomeStyle>
  );
}

const HomeStyle = styled.div`
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

    & > h2 {
      font-size: 40px;
      margin-top: 30px;
      margin-bottom: 60px;
      font-weight: 300;
      text-align: center;
    }
  }

  @media screen and (max-width: 1024px) {
    & > div {
      padding: 0 20px;
      & > h2 {
        font-size: 30px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    & > div {
      & > h2 {
        font-size: 20px;
      }
    }
  }
`;
