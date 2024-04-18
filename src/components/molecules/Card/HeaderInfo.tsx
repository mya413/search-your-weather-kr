import { year, month, day, hours, minutes, seconds } from "@/utils/date";
import styled from "styled-components";

export default function HeaderInfo() {
  return (
    <HeaderInfoStyle>
      <span>KR</span>
      <span>{`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`}</span>
    </HeaderInfoStyle>
  );
}

const HeaderInfoStyle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  & > span {
    color: #fff;
    font-size: 16px;
  }

  & > span:first-child {
    background-color: #222;
    padding: 5px 12px;
    font-size: 14px;
    font-weight: 500;
    margin-right: 10px;
    border-radius: 30px;
  }

  @media screen and (max-width: 767px) {
    & > span {
      color: #fff;
      font-size: 14px;
    }

    & > span:first-child {
      font-size: 12px;
    }
  }
`;
