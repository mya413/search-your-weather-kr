import styled from "styled-components";
import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface InputBtnProps {
  inputName: string;
}

export default function InputButton({ inputName }: InputBtnProps) {
  const navigator = useNavigate();

  const saveNameHandler = () => {
    if (inputName) {
      navigator("/");
    } else {
      alert("이름 또는 닉네임을 입력해주세요!");
    }
  };

  return (
    <InputButtonStyle type="button" onClick={saveNameHandler}>
      <FaArrowCircleRight />
    </InputButtonStyle>
  );
}

const InputButtonStyle = styled.button`
  position: absolute;
  right: 10px;
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
