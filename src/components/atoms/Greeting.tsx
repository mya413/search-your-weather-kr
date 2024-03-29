import styled from "styled-components";

export default function Greeting() {
  return <GreetingStyle>반가워요! 당신의 이름을 알려주세요 😀</GreetingStyle>;
}

const GreetingStyle = styled.h2`
  font-size: calc(40px+1vw);
  margin-top: 30px;
  margin-bottom: 60px;
  font-weight: 300;
  text-align: center;
  transition: all 0.3s;
`;
