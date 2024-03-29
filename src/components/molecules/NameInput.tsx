import styled from "styled-components";
import { ChangeEvent, useState } from "react";
import InputButton from "../atoms/InputButton";

export default function NameInput() {
  const [inputCount, setInputCount] = useState(0);
  const MAX_LENGTH = 10;

  const inputCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputCount(e.target.value.length);
  };

  return (
    <NameInputStyle>
      <input
        id="nameInput"
        type="text"
        placeholder="Please enter your name or nickname..."
        onChange={inputCountHandler}
        maxLength={MAX_LENGTH}
      />
      <InputButton />
      <label htmlFor="nameInput">{inputCount}/10자</label>
    </NameInputStyle>
  );
}

const NameInputStyle = styled.div`
  position: relative;
  & > input {
    width: 400px;
    height: 40px;
    font-size: 12px;
    padding: 0 10px;
    border-radius: 20px;
    border: 1px solid #bbb;
    background-color: #eee;
    outline-color: #86c5ff;
  }
  & > button {
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
  }
  & > label {
    position: absolute;
    top: 50px;
    right: 10px;
    font-size: 14px;
    color: #86c5ff;
    font-weight: 500;
  }
  @media screen and (max-width: 744px) {
    & > input {
      width: 300px;
    }
  }
  @media screen and (max-width: 375px) {
    & > input {
      width: 250px;
    }
  }
`;
