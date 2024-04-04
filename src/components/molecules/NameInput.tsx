import styled from "styled-components";
import { ChangeEvent, useEffect, useState } from "react";
import InputButton from "../atoms/InputButton";
import { useNavigate } from "react-router-dom";

export default function NameInput() {
  const navigator = useNavigate();

  const [inputName, setInputName] = useState("");

  const [inputCount, setInputCount] = useState(0);
  const MAX_LENGTH = 10;

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_LENGTH);
    }
    setInputName(e.target.value);
    setInputCount(e.target.value.length);
  };

  const enterKeyHandler = (e: any) => {
    if ((e.key === "Enter" || e.key.code === 13) && inputName) {
      e.preventDefault();
      navigator("/");
      setInputName(e.target.value);
    } else if ((e.key === "Enter" || e.key.code === 13) && !inputName) {
      alert("이름 또는 닉네임을 입력해주세요!");
    }
  };

  useEffect(() => {
    window.sessionStorage.setItem("name", JSON.stringify(inputName));
  }, [inputName]);

  return (
    <NameInputStyle>
      <input
        id="nameInput"
        type="text"
        placeholder="당신의 이름 또는 닉네임을 입력해주세요..."
        onChange={inputHandler}
        maxLength={MAX_LENGTH}
        onKeyDown={enterKeyHandler}
      />
      <InputButton inputName={inputName} />
      <label htmlFor="nameInput">{inputCount}/10자</label>
    </NameInputStyle>
  );
}

const NameInputStyle = styled.div`
  position: relative;
  width: 100%;

  & > input {
    width: 100%;
    height: 40px;
    font-size: 12px;
    padding: 0 10px;
    border-radius: 20px;
    border: 1px solid #bbb;
    background-color: #eee;
    outline-color: #86c5ff;
  }

  & > label {
    position: absolute;
    top: 50px;
    right: 10px;
    font-size: 14px;
    color: #86c5ff;
    font-weight: 500;
  }
`;
