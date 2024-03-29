import styled from "styled-components";

export default function Greeting() {
  return <GreetingStyle>반가워요! 당신의 이름을 알려주세요 😀</GreetingStyle>;
}

const GreetingStyle = styled.h2`
  font-size: 40px;
  margin-top: 30px;
  margin-bottom: 60px;
  font-weight: 300;
  text-align: center;

  @media screen and (max-width: 1024px) {
    font-size: 30px;
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
