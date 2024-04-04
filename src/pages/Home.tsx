import styled from "styled-components";
import Logo from "@/components/atoms/Logo";
import Greeting from "@/components/atoms/Greeting";
import SearchToggleButton from "@/components/atoms/SearchToggleButton";
import { useState } from "react";
import SearchInput from "@/components/molecules/SearchInput";
import Card from "@/components/molecules/Card";
import Map from "@/components/atoms/Map";

export default function Home() {
  const [isToggle, setIsToggle] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(true);

  return (
    <HomeStyle>
      <div>
        <Logo />
        <Greeting />
        <SearchToggleButton isToggle={isToggle} setIsToggle={setIsToggle} />
      </div>
      <SearchInput isToggle={isToggle} />
      <div>
        <Map />
        {isCardOpen && (
          <Card isCardOpen={isCardOpen} setIsCardOpen={setIsCardOpen} />
        )}
      </div>
    </HomeStyle>
  );
}

const HomeStyle = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

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
    width: 100%;
    height: 100vh;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 1024px) {
    & > div:last-child {
      display: block;
      position: relative;
    }
  }

  @media screen and (max-width: 767px) {
    & > div:first-child {
      justify-content: flex-start;
    }
  }
`;
