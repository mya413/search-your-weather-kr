import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Greeting() {
  const navigator = useNavigate();

  const [savedName, setSavedName] = useState("");

  useEffect(() => {
    const save = JSON.parse(window.sessionStorage.getItem("name")!);
    if (!save) navigator("/welcome");
    setSavedName(save);
  }, [savedName]);

  return savedName ? (
    <HomeGreetingStyle>
      <span>{savedName}</span>님, 오늘은 어떤 날씨일까요?
    </HomeGreetingStyle>
  ) : (
    <GreetingStyle>반가워요! 당신의 이름을 알려주세요 😀</GreetingStyle>
  );
}

const GreetingStyle = styled.h2`
  font-size: 40px;
  margin-top: 30px;
  margin-bottom: 60px;
  font-weight: 300;
  text-align: center;
  transition: all 0.3s;

  @media screen and (max-width: 1024px) {
    font-size: 30px;
  }

  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`;

const HomeGreetingStyle = styled.h2`
  font-size: 20px;
  margin-left: 10px;
  font-weight: 300;
  text-align: center;
  transition: all 0.3s;

  & > span {
    font-size: 20px;
    font-weight: 600;
    transition: all 0.3s;
  }

  @media screen and (max-width: 767px) {
    font-size: 16px;

    & > span {
      font-size: 16px;
    }
  }
`;
