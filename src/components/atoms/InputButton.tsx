import styled from "styled-components";
import { FaArrowCircleRight } from "react-icons/fa";

export default function InputButton() {
  return (
    <InputButtonStyle type="button">
      <FaArrowCircleRight />
    </InputButtonStyle>
  );
}

const InputButtonStyle = styled.button`
  position: absolute;
  right: 5px;
  top: 10px;

  &:hover {
    & > svg {
      color: #222;
      transition: all 0.3s;
    }
  }

  & > svg {
    font-size: 20px;
    color: #bbb;
    transition: all 0.3s;
  }
`;
