import styled from "styled-components";
import Logo from "@/components/atoms/Logo";
import Greeting from "@/components/atoms/Greeting";
import SearchToggleButton from "@/components/atoms/SearchToggleButton";
import { useState } from "react";
import SearchInput from "@/components/molecules/SearchInput";

export default function Home() {
  const [isToggle, setIsToggle] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <HomeStyle>
      <div>
        <Logo />
        <Greeting />
        <SearchToggleButton
          isToggle={isToggle}
          isVisible={isVisible}
          setIsToggle={setIsToggle}
          setIsVisible={setIsVisible}
        />
      </div>
      <SearchInput isVisible={isVisible} />
      <div>
        <h2>SVG 지도</h2>
      </div>
    </HomeStyle>
  );
}

const HomeStyle = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  & > div:first-child {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
  }

  & > div:last-child {
    height: 100vh;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    & > h2 {
      font-size: 40px;
    }
  }
`;
