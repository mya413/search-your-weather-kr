import { IoClose } from "react-icons/io5";
import styled from "styled-components";

interface CloseButtonProps {
  setIsCardOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CloseButton({ setIsCardOpen }: CloseButtonProps) {
  const cardCloseHandler = () => {
    setIsCardOpen(false);
  };

  return (
    <ButtonStyle type="button" onClick={cardCloseHandler}>
      <IoClose />
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button`
  & > svg {
    font-size: 30px;
    color: #fff;
  }

  @media screen and (max-width: 767px) {
    & > svg {
      font-size: 24px;
      color: #fff;
    }
  }
`;
