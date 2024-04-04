import styled from "styled-components";
import { IoClose } from "react-icons/io5";

interface CardProps {
  isCardOpen: boolean;
  setIsCardOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Card({ isCardOpen, setIsCardOpen }: CardProps) {
  const onClickHandler = () => {
    setIsCardOpen(!isCardOpen);
  };
  return (
    <CardStyle>
      <div>
        <div>
          <h3>Weather in Seoul</h3>
          <button type="button" onClick={onClickHandler}>
            <IoClose />
          </button>
        </div>
        <div>
          <span>KR</span>
          <span>2024-03-28 17:22:34</span>
        </div>
      </div>
    </CardStyle>
  );
}

const CardStyle = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 101px;

  & > div {
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

    & > div:last-child {
      display: flex;
      align-items: center;
      margin-top: 10px;

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
  }

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

    & > div {
      border-top-right-radius: 60px;
      border-bottom-left-radius: 0;
    }
  }

  @media screen and (max-width: 767px) {
    & > div {
      padding: 40px;

      & > div:first-child {
        & > h3 {
          font-size: 24px;
        }

        & > button {
          & > svg {
            font-size: 24px;
            color: #fff;
          }
        }
      }

      & > div:last-child {
        & > span {
          color: #fff;
          font-size: 14px;
        }

        & > span:first-child {
          font-size: 12px;
        }
      }
    }
  }
`;
