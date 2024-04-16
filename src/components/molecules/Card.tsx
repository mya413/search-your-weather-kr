import styled from "styled-components";
import {
  IoClose,
  IoSunny,
  IoPartlySunnySharp,
  IoCloud,
  IoWaterSharp,
} from "react-icons/io5";
import { FaWind } from "react-icons/fa";
import { year, month, day } from "@/utils/date";
import { hours, minutes, seconds } from "@/utils/time";

interface CardProps {
  isCardOpen: boolean;
  setIsCardOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data?: any;
  locationInfo?: any;
  setLocationInfo: any;
  setData: any;
}

export default function Card({
  isCardOpen,
  setIsCardOpen,
  data,
  locationInfo,
  setLocationInfo,
  setData,
}: CardProps) {
  let datas = [];

  if (data) {
    datas = [...data].filter(
      (item, idx) =>
        idx % 6 === 0 &&
        (item.category === "T1H" ||
          item.category === "SKY" ||
          item.category === "REH" ||
          item.category === "PTY" ||
          item.category === "WSD")
    );
  }

  const onClickHandler = () => {
    const activeElement = document.querySelector(".active");

    if (locationInfo) {
      setIsCardOpen(true);
      setLocationInfo(null);
      setData(null);
    }

    if (activeElement) {
      activeElement.classList.remove("active");
    }
  };
  return (
    <CardStyle>
      <CardInnerBlock>
        <div>
          <h3>{`Weather in ${locationInfo?.[0]?.title[0]}`}</h3>
          <button type="button" onClick={onClickHandler}>
            <IoClose />
          </button>
        </div>
        <div>
          <span>KR</span>
          <span>{`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`}</span>
        </div>
        <div>
          <div>
            {datas?.[1]?.fcstValue === "1" ? (
              <IoSunny />
            ) : datas?.[1]?.fcstValue === "3" ? (
              <IoPartlySunnySharp />
            ) : (
              <IoCloud />
            )}
            <span>{`${datas?.[2]?.fcstValue}℃`}</span>
          </div>
          <div>
            <IoWaterSharp />
            <span>{`${datas?.[3]?.fcstValue}%`}</span>
          </div>
          <div>
            <FaWind />
            <span>{`${datas?.[4]?.fcstValue}m/s`}</span>
          </div>
        </div>
      </CardInnerBlock>
    </CardStyle>
  );
}

const CardStyle = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 101px;

  @media screen and (max-width: 1024px) {
    position: absolute;
    bottom: 0;
    left: 0;
    padding-top: 0;
    height: 4%;
    transition: all 0.5s;

    &:hover {
      height: 50%;
      transition: all 0.5s;
    }
  }
`;

const CardInnerBlock = styled.div`
  height: 100%;
  padding: 50px;
  background: linear-gradient(#6dbef9, #e7f4ff);
  border-top-left-radius: 60px;
  border-bottom-left-radius: 60px;

  & > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > h3 {
      color: #fff;
      font-size: 30px;
      font-weight: 700;
    }

    & > button {
      & > svg {
        font-size: 30px;
        color: #fff;
      }
    }
  }

  & > div:nth-child(2) {
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
  }

  & > div:last-child {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;

    & > div:first-child,
    & > div:nth-child(2),
    & > div:last-child {
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
  }

  @media screen and (max-width: 1024px) {
    border-top-right-radius: 60px;
    border-bottom-left-radius: 0;
  }

  @media screen and (max-width: 767px) {
    & > div:first-child {
      & > h3 {
        font-size: 24px;
        line-height: 1.2;
      }

      & > button {
        & > svg {
          font-size: 24px;
          color: #fff;
        }
      }
    }

    & > div:nth-child(2) {
      & > span {
        color: #fff;
        font-size: 14px;
      }

      & > span:first-child {
        font-size: 12px;
      }
    }

    & > div:last-child {
      display: flex;
      justify-content: space-around;
      align-items: center;

      & > div:first-child,
      & > div:nth-child(2),
      & > div:last-child {
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
  }
`;
