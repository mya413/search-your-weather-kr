import { data, filteredDatas } from "@/utils/filteredDatas";
import {
  IoSunny,
  IoPartlySunnySharp,
  IoCloud,
  IoWaterSharp,
} from "react-icons/io5";
import { FaWind } from "react-icons/fa";
import styled from "styled-components";

interface MainProps {
  data: data[];
}

export default function Main({ data }: MainProps) {
  const filteredData = filteredDatas(data);

  return (
    <MainStyle>
      <li>
        {filteredData[1]?.fcstValue === "1" ? (
          <IoSunny />
        ) : filteredData[1]?.fcstValue === "3" ? (
          <IoPartlySunnySharp />
        ) : (
          <IoCloud />
        )}
        <span>{`${filteredData[2]?.fcstValue}℃`}</span>
      </li>
      <li>
        <IoWaterSharp />
        <span>{`${filteredData[3]?.fcstValue}%`}</span>
      </li>
      <li>
        <FaWind />
        <span>{`${filteredData[4]?.fcstValue}m/s`}</span>
      </li>
    </MainStyle>
  );
}

const MainStyle = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;

  & > li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    & > svg,
    & > span {
      font-size: 26px;
      color: #fff;
      font-weight: 500;
    }

    & > svg {
      font-size: 60px;
    }
  }

  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: space-around;
    align-items: center;

    & > li {
      gap: 10px;

      & > svg,
      & > span {
        font-size: 20px;
      }

      & > svg {
        font-size: 40px;
      }
    }
  }
`;
